
generate-json-schema:
	docker build .devops;

	docker run \
		--rm \
		-w /arquivos \
		-v $${PWD}:/arquivos \
		-u node \
		-it $$(docker build -q .devops) \
			typescript-json-schema \
				core/tsconfig.build.json \* \
				-o integrations/json-schema/v1/sisgea.schema.json \
				--refs \
				--noExtraProps \
				--required \
				--strictNullChecks \
			;
