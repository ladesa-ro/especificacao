using Ladesa.Extensions;

namespace Ladesa.Schemas;

model CommonEntityUuid {
  ...ObjectUuid;
}

model CommonEntityUuidDated {
  ...ObjectUuid;
  ...DatedObject;
}
