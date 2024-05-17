export type UniTypeBase = {
  kind: 'type';
  nullable: boolean;
  required: boolean;
  description: string;
  default?: any;
};

export type UniTypeString = UniTypeBase & {
  type: 'string';

  format?: 'uuid' | 'date' | 'date-time' | 'time' | 'e-mail';

  constraints?: {
    minLength?: number | false;
    maxLength?: number | false;
    pattern?: string;
  } & Record<`x-${string}`, any>;
};

export type UniTypeInteger = UniTypeBase & {
  type: 'integer';
  constraints?: {
    min?: number;
    max?: number;
    integer?: boolean;
    positive?: boolean;
  };
};

export type UniTypeReference = UniTypeBase & {
  type: 'reference';
  targetsTo: string;
};

export type UniTypeObject = UniTypeBase & {
  type: 'object';
  properties: Record<string, UniType>;
};

export type UniView = {
  kind: 'view';
  name: string;
  description: string;
  partialOf: string | null;
  properties: Record<string, UniType>;
};

export type UniTypeArray = UniTypeBase & {
  type: 'array';
  of: UniType;
};

export type UniTypeBoolean = UniTypeBase & {
  type: 'boolean';
};

export type UniTypeFile = UniTypeBase & {
  type: 'file';
  mimeTypes: string[];
};

export type UniType = UniTypeString | UniTypeInteger | UniTypeReference | UniTypeObject | UniTypeArray | UniTypeBoolean | UniTypeFile;

// =================================

export type UniOperation = {
  kind: 'operation';

  name: string;
  description: string;

  input?: {
    body?: string | UniType;
    queries?: Record<any, UniTypeString | UniTypeInteger | UniTypeBoolean>;
  };

  output?: {
    success?: string | UniType;
  };
};

export type UniDeclarator = {
  kind: 'declarator';

  entity: string;

  operations?: {
    crud?: {
      findById?: false | { input: string; output: string };
      deleteById?: false | string;

      list?:
        | false
        | {
            view: string;
            filters?: [string, string[]][];
          };

      create?: false | string;
      updateById?: false | string;
    };

    extra?: {
      [key: string]: UniOperation;
    };
  };
};

// =================================

export type UniToken = UniType | UniOperation | UniDeclarator | UniProvider | UniView;

// ==================================================================================

export interface UniProviderContext {
  Add(node: UniToken): this;
}

export type UniProviderFn = (ctx: UniProviderContext) => void;

export type UniProvider = {
  kind: 'provider';
  fn: UniProviderFn;
};

// ==================================================================================

type UniTypeBaseOptions = {
  nullable?: boolean;
  required?: boolean;
  description?: string;
};

export const UniTypeBase = <C extends UniTypeBase, K extends UniTypeBaseOptions = UniTypeBaseOptions>(k?: K): C =>
  ({
    kind: 'type',
    nullable: false,
    required: true,
    description: 'Descrição não fornecida.',
    ...k,
  }) as unknown as C;

export const UniTypeString = <K extends Partial<UniTypeString> = Partial<UniTypeString>>(k?: K): UniTypeString =>
  UniTypeBase<UniTypeString>({ type: 'string', ...k });

export const UniTypeInteger = <K extends Partial<UniTypeInteger> = Partial<UniTypeInteger>>(k?: K): UniTypeInteger =>
  UniTypeBase<UniTypeInteger>({ type: 'integer', ...k });

export const UniTypeReference = <K extends Partial<UniTypeReference> = Partial<UniTypeReference>>(k?: K): UniTypeReference =>
  UniTypeBase<UniTypeReference>({ type: 'reference', ...k });

export const UniTypeObject = <K extends Partial<UniTypeObject> = Partial<UniTypeObject>>(k?: K): UniTypeObject =>
  UniTypeBase<UniTypeObject>({ type: 'object', properties: {}, ...k });

export const UniView = <K extends Partial<UniView> = Partial<UniView>>(k?: K): UniView => ({
  kind: 'view',
  name: 'UnnamedView',
  description: '',
  partialOf: null,
  ...k,
  properties: {
    ...k?.properties,
  },
});

export const UniTypeArray = <K extends Partial<UniTypeArray> = Partial<UniTypeArray>>(k?: K): UniTypeArray =>
  UniTypeBase<UniTypeArray>({ type: 'array', of: {}, ...k });

export const UniTypeBoolean = <K extends Partial<UniTypeBoolean> = Partial<UniTypeBoolean>>(k?: K): UniTypeBoolean =>
  UniTypeBase<UniTypeBoolean>({ type: 'boolean', ...k });

export const UniTypeFile = <K extends Partial<UniTypeFile> = Partial<UniTypeFile>>(k?: K): UniTypeFile =>
  UniTypeBase<UniTypeFile>({ type: 'file', mimeTypes: [], ...k });

//

type UniTypeEntityOptions = Partial<UniTypeObject> & {
  id?: 'numeric' | 'uuid' | false;
  dated?: boolean;
};

export const UniTypeEntity = <K extends Partial<UniTypeEntityOptions> = Partial<UniTypeEntityOptions>>(k: K): UniTypeObject => {
  const properties: Record<string, UniType> = {};

  if (k) {
    const {
      id,
      dated,
      properties: { ...rest },
    } = k;

    Object.assign(properties, rest);

    if (id) {
      const description = 'ID do Registro.';

      if (id === 'numeric') {
        properties.id = UniTypeInteger({ description });
      } else if (id === 'uuid') {
        properties.id = UniTypeString({ description, format: 'uuid' });
      }
    }

    if (dated) {
      properties.dateCreated = UniTypeString({ description: 'Data de Criação do Registro.', format: 'date-time' });
      properties.dateUpdated = UniTypeString({ description: 'Data de Atualização do Registro.', format: 'date-time' });
      properties.dateDeleted = UniTypeString({ description: 'Data de Exclusão do Registro.', format: 'date-time', nullable: true });
    }
  }

  return UniTypeObject({
    type: 'object',
    ...k,
    properties,
  });
};

export const UniTypePick = <Obj extends UniTypeObject | UniView, Properties extends keyof Obj['properties'] = keyof Obj['properties']>(
  obj: Obj,
  propertiesToPick: Properties[] | Record<Properties, boolean>,
): UniTypeObject['properties'] => {
  const checkProperty = (property: Properties | string) => {
    const permissivePropertiesToPick = <string[] | Record<string, boolean>>propertiesToPick;

    if (Array.isArray(permissivePropertiesToPick)) {
      return permissivePropertiesToPick.findIndex((i) => i === property) !== -1;
    } else {
      if (typeof property === 'string' && property in permissivePropertiesToPick && permissivePropertiesToPick[property]) {
        return true;
      }
    }

    return false;
  };
  const properties = Object.fromEntries(Object.entries(obj.properties).filter(([key]) => checkProperty(key)));
  return properties;
};

export const UniTypePartial = <Obj extends UniTypeObject | UniView>(obj: Obj): UniTypeObject['properties'] => {
  const properties = Object.fromEntries(Object.entries(obj.properties).map(([key, value]) => [key, { ...value, required: false }]));

  return properties;
};

export const UniTypeMerge = (objects: UniTypeObject[]): UniTypeObject => {
  const obj = UniTypeObject();

  for (const object of objects) {
    const { properties, ...rest } = object;
    Object.assign(obj.properties, properties);
    Object.assign(obj, rest);
  }

  return obj;
};

export const UniDeclarator = <K extends UniDeclarator>(declarator: Partial<K> = {}): UniDeclarator => ({
  kind: 'declarator',
  entity: '',
  ...declarator,
});

export const UniOperation = <K extends UniOperation, Op extends Omit<K, 'kind'>>(operation: Op): UniOperation => ({
  kind: 'operation',
  ...operation,
});

export const UniTypeReferenceExtends = (ref: any, extension: Partial<UniTypeReference>) =>
  UniTypeReference({
    ...ref,
    ...extension,
  });

export const UniTypeArrayExtends = (ref: any, extension: Partial<Omit<UniTypeArray, 'of'>> & { of: Partial<UniTypeArray['of']> }) =>
  UniTypeArray({
    ...ref,
    ...extension,
    of: {
      ...ref?.of,
      ...extension?.of,
    },
  });

export const UniProvider = (fn: UniProviderFn): UniProvider => ({
  kind: 'provider',
  fn,
});

export const IsUniType = (node: UniToken): node is UniType => {
  return node.kind === 'type';
};

export const IsUniView = (node: UniToken): node is UniView => {
  return node.kind === 'view';
};
