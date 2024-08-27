import { setTypeSpecNamespace } from "@typespec/compiler";
import { $extension } from "@typespec/json-schema";

//

const NAMESPACE = "Ladesa.Extensions";

const METADATA_ENTITY_TOKEN = "x-ladesa-entity-token";
const METADATA_ENTITY_PARTIAL_OF_TOKEN = "x-ladesa-entity-partial-of-token";

//

export function $entity(context, target, entityToken, partialOf) {
  $extension(context, target, METADATA_ENTITY_TOKEN, entityToken.value);

  if (partialOf) {
    $extension(
      context,
      target,
      METADATA_ENTITY_PARTIAL_OF_TOKEN,
      partialOf.value,
    );
  }
}

setTypeSpecNamespace(NAMESPACE, $entity);

//
