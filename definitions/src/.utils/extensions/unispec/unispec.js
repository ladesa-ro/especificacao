import { setTypeSpecNamespace } from "@typespec/compiler"
import { $extension } from "@typespec/json-schema"

//
export const NAMESPACE_JSON_SCHEMA = "Unispec.JsonSchema"

const MetadataKeys = {
  Kind: "x-unispec-kind",
  //
  EntityId: "x-unispec-entity-id",
  EntityPartialOf: "x-unispec-entity-partial-of",
  //
  OperationId: "x-unispec-operation-id",
  OperationMeta: "x-unispec-operation-meta",
}

const MetadataKinds = {
  Entity: "entity",
  Operation: "operation",
}

//

function $unispecNode(context, target, kind) {
  $extension(context, target, MetadataKeys.Kind, kind)
}

export function $entity(context, target, entityId) {
  $unispecNode(context, target, MetadataKinds.Entity)

  $extension(context, target, MetadataKeys.EntityId, entityId.value)

  $extension(context, target, "additionalProperties", false)
}

setTypeSpecNamespace(NAMESPACE_JSON_SCHEMA, $entity)

//

export function $entityPartialOf(context, target, partialOf) {
  $extension(context, target, MetadataKeys.EntityPartialOf, partialOf.value)
}

setTypeSpecNamespace(NAMESPACE_JSON_SCHEMA, $entityPartialOf)

//

export function $operation(context, target, operationId, operationOptions) {
  $unispecNode(context, target, MetadataKinds.Operation)

  $extension(context, target, MetadataKeys.OperationId, operationId.value)

  $extension(context, target, "additionalProperties", false)

  if (operationOptions) {
    const meta = operationOptions.meta

    if (meta) {
      $extension(context, target, MetadataKeys.OperationMeta, meta)
    }
  }
}

setTypeSpecNamespace(NAMESPACE_JSON_SCHEMA, $operation)

//
