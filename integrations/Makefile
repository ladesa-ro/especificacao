
generate-dotnet:
	docker buildx build dotnet/.devops;

	docker run --rm \
		-v $${PWD}:/home/user/spec/integrations \
		-w /home/user/spec/integrations \
		-it $$(docker buildx build -q dotnet/.devops) \
			generatejsonschematypes \
			--rootNamespace Sisgea.Spec \
			--outputPath dotnet/Sisgea.Spec/Generated \
			json-schema/v1/sisgea.schema.json

generate:
	make -C json-schema generate;
	make generate-dotnet;
