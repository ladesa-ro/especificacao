
build:
	docker buildx build -t sisgea/dotnet-generator-tool .

sample:
	SPEC_JSON_SCHEMA="./plg/input.json" SPEC_CHARP_OUTPUT="./plg/out.cs" dotnet run;