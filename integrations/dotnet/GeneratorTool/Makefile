
build:
	docker buildx build -t sisgea/dotnet-generator-tool .

sample:
	SPEC_JSON_SCHEMA="./input.json" SPEC_CHARP_OUTPUT="./out.cs" dotnet run;