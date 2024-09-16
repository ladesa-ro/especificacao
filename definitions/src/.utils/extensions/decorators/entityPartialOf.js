import { setTypeSpecNamespace } from "@typespec/compiler"
import { $extension } from "@typespec/json-schema"
import { METADATA_ENTITY_PARTIAL_OF_TOKEN, NAMESPACE_EXTENSIONS } from "../tokens.js"

//

export function $entityPartialOf(context, target, partialOf) {
  $extension(context, target, METADATA_ENTITY_PARTIAL_OF_TOKEN, partialOf.value)
}

setTypeSpecNamespace(NAMESPACE_EXTENSIONS, $entityPartialOf)

//
