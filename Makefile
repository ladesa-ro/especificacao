
generate-json-schema:
	docker build .devops;

	docker run \
		--rm \
		-w /arquivos \
		-v $${PWD}:/arquivos \
		-u node \
		-it $$(docker build -q .devops) \
			typescript-json-schema \
				javascript/packages/sisgea-spec/tsconfig.build.json \* \
				-o json-schema/v1/sisgea.schema.json \
				--refs \
				--noExtraProps \
				--required \
				--strictNullChecks \
			;
