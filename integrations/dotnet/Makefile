build:
	make -C .. -C json-schema build;
	make -C GeneratorTool build;

generate:
	make -C .. -C json-schema generate;
	SPEC_JSON_SCHEMA="../json-schema/v1/sisgea.schema.json" SPEC_CHARP_OUTPUT="./Sisgea.Spec/Dtos.cs" dotnet run --project GeneratorTool;