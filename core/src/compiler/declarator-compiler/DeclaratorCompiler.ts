import {
  IDeclarationExtraOperation,
  IDeclarator,
  IOperationProperties,
  IOperationProperty,
  IOperationPropertyReference,
} from '../../types';

export type ICompiledEntityProperties = Record<string, IOperationProperty>;

export type ICompiledEntity = {
  name: string;
  properties: ICompiledEntityProperties;
};

export type ICompiledOperation = {
  name: string;
  description: string;

  params: unknown;
  queries: null | IOperationProperties;
  body: null | IOperationProperty | IOperationProperties | ICompiledEntity;

  output: {
    success: null | ICompiledEntity | IOperationProperty | IOperationProperties;
  };
};

export type ICompiledDeclarator = {
  name: string;
  id: 'numeric' | 'uuid' | false;
  dated: boolean;

  properties: ICompiledEntityProperties;

  entities: Iterable<ICompiledEntity>;
  operations: Iterable<ICompiledOperation>;
};

function capitalizeFirst(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}

export class DeclaratorCompiler {
  get #declaration() {
    return this.declarator();
  }

  constructor(readonly declarator: IDeclarator<any>) {}

  compileEntity(viewName: string) {
    const declaration = this.#declaration;

    if (!(viewName in declaration.views)) {
      throw new TypeError(`View ${viewName} is not defined.`);
    }

    let entityAlias: string;

    if (viewName === 'default') {
      entityAlias = `${declaration.name}`;
    } else {
      entityAlias = `${declaration.name}${capitalizeFirst(viewName)}`;
    }

    const entity: ICompiledEntity = {
      name: `${entityAlias}`,
      properties: {},
    };

    const viewArgs = declaration.views[viewName];

    for (const viewArg of viewArgs) {
      const targetProperty: IOperationProperty = this.compileProperty(viewArg);
      entity.properties[viewArg] = targetProperty;
    }

    return entity;
  }

  private compileProperty(pointer: any) {
    const declaration = this.#declaration;
    const [targetPropertyKey, view = null] = pointer.split('@');

    const properties = declaration.properties;

    let targetProperty: IOperationProperty | null = null;

    if (targetPropertyKey in properties) {
      targetProperty = properties[targetPropertyKey];
    } else {
      if (targetProperty === 'id' && declaration.id) {
      }

      switch (targetPropertyKey) {
        case 'id': {
          if (declaration.id) {
            targetProperty = this.getIdProperty();
          }
          break;
        }

        case 'dateCreated': {
          if (declaration.dated) {
            targetProperty = this.getDateCreatedProperty();
          }
        }

        case 'dateDeleted': {
          if (declaration.dated) {
            targetProperty = this.getDateDeletedProperty();
          }
        }

        case 'dateUpdated': {
          if (declaration.dated) {
            targetProperty = this.getDateUpdatedProperty();
          }
        }

        default: {
          break;
        }
      }
    }

    if (targetProperty === null) {
      throw new TypeError(`Property ${targetPropertyKey} is not defined.`);
    }

    {
      let targetReference: null | IOperationPropertyReference = null;

      if (targetProperty.type === 'reference') {
        targetReference = targetProperty;
      } else if (targetProperty.type === 'array' && targetProperty.of.type === 'reference') {
        targetReference = targetProperty.of;
      }

      if (targetReference) {
        if (view === null) {
          throw new TypeError(`Please specify a view for the property ${targetPropertyKey}.`);
        }

        targetReference.view = view;
      }
    }

    return targetProperty;
  }

  *compileEntities() {
    for (const viewName in this.#declaration.views) {
      yield this.compileEntity(viewName);
    }
  }

  compileOperation(operation: IDeclarationExtraOperation) {
    const name = operation.name;

    if (!name) {
      throw new TypeError('Operation name is not defined.');
    }

    const description = operation.description;

    if (!description) {
      throw new TypeError('Operation description is not defined.');
    }

    const compiledOperation: ICompiledOperation = {
      name,
      description,

      body: null,
      params: null,
      queries: null,

      output: {
        success: null,
      },
    };

    const body = operation.body;

    if (body) {
      if (typeof body === 'string') {
        compiledOperation.body = this.compileEntity(body);
      } else {
        compiledOperation.body = body;
      }
    }

    const queries = operation.queries;

    if (queries) {
      compiledOperation.queries = queries;
    }

    const params = operation.params;

    if (params) {
      compiledOperation.params = params;
    }

    const outputs = operation.outputs;

    if (outputs) {
      const success = outputs.success;

      if (success) {
        if (typeof success === 'string') {
          compiledOperation.output.success = this.compileEntity(success);
        } else if (typeof success.type === 'string') {
          compiledOperation.output.success = <IOperationProperty>success;
        } else {
          compiledOperation.output.success = Object.fromEntries(
            Object.entries(success).map(([key, value]) => {
              if (typeof value === 'string') {
                return [key, this.compileEntity(value)];
              }

              return [key, value];
            }),
          );
        }
      }
    }

    return compiledOperation;
  }

  getIdProperty() {
    let id: IOperationProperty;

    if (this.#declaration.id === 'uuid') {
      id = {
        type: 'string',
        format: 'uuid',
        required: true,
        nullable: false,
        description: 'ID to find',
      };
    } else if (this.#declaration.id === 'numeric') {
      id = {
        type: 'integer',
        required: true,
        nullable: false,
        description: 'ID to find',
      };
    } else {
      throw new TypeError('Cannot find by id when declarator ID is disabled.');
    }

    return id;
  }

  private getDateCreatedProperty(): IOperationProperty {
    return {
      type: 'string',
      format: 'date-time',
      required: true,
      nullable: false,
      description: 'Data de criação.',
    };
  }

  private getDateUpdatedProperty(): IOperationProperty {
    return {
      type: 'string',
      format: 'date-time',
      required: true,
      nullable: false,
      description: 'Data de atualização.',
    };
  }

  private getDateDeletedProperty(): IOperationProperty {
    return {
      type: 'string',
      format: 'date-time',
      required: true,
      nullable: false,
      description: 'Data de exclusão.',
    };
  }

  *compileOperations() {
    const operations = this.#declaration.operations;

    if (operations) {
      const crud = operations.crud;

      if (crud) {
        if (crud.findById) {
          yield this.compileOperation({
            name: `${this.#declaration.name}FindById`,
            description: 'Find by id.',
            params: { id: this.getIdProperty() },
            outputs: { success: { view: 'default' } },
          });
        }

        if (crud.create) {
          yield this.compileOperation({
            name: `${this.#declaration.name}Create`,
            description: 'Create.',
            body: 'input',
            outputs: {
              success: {
                view: 'default',
              },
            },
          });
        }

        if (crud.updateById) {
          const targetView = typeof crud.updateById === 'string' ? crud.updateById : 'input';

          yield this.compileOperation({
            name: `${this.#declaration.name}UpdateById`,
            description: 'Update by id.',
            params: { id: this.getIdProperty() },
            body: 'input',
            outputs: {
              success: {
                view: targetView,
              },
            },
          });
        }

        if (crud.deleteById) {
          yield this.compileOperation({
            name: `${this.#declaration.name}DeleteById`,
            description: 'Delete by id.',
            params: { id: this.getIdProperty() },
            outputs: { success: { type: 'boolean', nullable: false, required: true, description: 'Success.' } },
          });
        }

        if (crud.list) {
          yield this.compileOperation({
            name: `${this.#declaration.name}List`,
            description: 'List.',
            outputs: {
              success: {
                view: 'default',
              },
            },
          });
        }
      }

      const extra = operations.extra ?? {};

      for (const extraOperationKey in extra) {
        yield this.compileOperation({
          name: `${this.#declaration.name}${capitalizeFirst(extraOperationKey)}`,
          ...extra[extraOperationKey],
        });
      }
    }
  }

  compile(): ICompiledDeclarator {
    const declaration = this.#declaration;

    const entities = this.compileEntities();
    const operations = this.compileOperations();

    return {
      name: declaration.name,
      //
      id: declaration.id ?? false,
      dated: declaration.dated ?? false,
      //
      properties: declaration.properties,
      //
      entities,
      operations,
    };
  }
}
