import { setTypeSpecNamespace } from "@typespec/compiler"
import { $extension } from "@typespec/json-schema"
import { METADATA_ENTITY_TOKEN, NAMESPACE_EXTENSIONS } from "../tokens.js"

//

export function $entity(context, target, entityToken) {
  $extension(context, target, "additionalProperties", false)

  $extension(context, target, METADATA_ENTITY_TOKEN, entityToken.value)
}

setTypeSpecNamespace(NAMESPACE_EXTENSIONS, $entity)

//
