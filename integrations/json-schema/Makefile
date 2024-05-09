ROOT=$(shell dirname $(shell dirname $$PWD))

generate:
	docker run \
		--rm \
		-w /spec \
		-v ${ROOT}:/spec \
		-u node \
		-it node:lts \
			npx --yes ts-json-schema-generator \
				-f '/spec/core/tsconfig.build.json' \
				--path '/spec/core/src/sisgea/**/*.declaration.ts' \
				--functions 'hide' \
				-o /spec/integrations/json-schema/v1/sisgea.schema.json \
			;
