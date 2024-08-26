import { BuildTypeInteger, BuildTypeObject, BuildTypeString } from "@unispec/ast-builder";
import type { IUniNodeType, IUniNodeTypeObject } from "@unispec/ast-types";

export type ICommonEntityOptions = Partial<IUniNodeTypeObject> & {
  id?: "numeric" | "uuid" | false;
  dated?: boolean;
};

export const CommonEntity = <K extends Partial<ICommonEntityOptions> = Partial<ICommonEntityOptions>>(
  optionsEntityObject: K,
): IUniNodeTypeObject => {
  if (optionsEntityObject) {
    const properties: Record<string, IUniNodeType> = {};

    const {
      id,
      dated,
      properties: { ...optionsProperties },
      ...restObject
    } = optionsEntityObject;

    Object.assign(properties, optionsProperties);

    if (id) {
      const description = "ID do Registro.";

      if (id === "numeric") {
        properties.id = BuildTypeInteger({ description });
      } else if (id === "uuid") {
        properties.id = BuildTypeString({ description, format: "uuid" });
      }
    }

    if (dated) {
      properties.dateCreated = BuildTypeString({ description: "Data de Criação do Registro.", format: "date-time" });
      properties.dateUpdated = BuildTypeString({ description: "Data de Atualização do Registro.", format: "date-time" });
      properties.dateDeleted = BuildTypeString({ description: "Data de Exclusão do Registro.", format: "date-time", nullable: true });
    }

    return BuildTypeObject({
      type: "object",
      ...restObject,
      properties,
    });
  }

  return BuildTypeObject();
};
