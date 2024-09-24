#!/usr/bin/env bash

set -e;

SCHEMAS_FILE="schemas.ts"

INTEGRATIONS_NPM_PKG_DIR="${PWD}"

INTEGRATIONS_NPM_PKG_SRC_DIR="$(realpath ${INTEGRATIONS_NPM_PKG_DIR}/src)"
INTEGRATIONS_NPM_PKG_SRC_SCHEMAS="${INTEGRATIONS_NPM_PKG_SRC_DIR}/${SCHEMAS_FILE}"

INTEGRATIONS_JSON_SCHEMA_DIR="$(realpath ${INTEGRATIONS_NPM_PKG_DIR}/../../json-schema)"
INTEGRATIONS_JSON_SCHEMA_LIB_DIR="$(realpath ${INTEGRATIONS_JSON_SCHEMA_DIR}/lib)"

function generate_schemas {
  quicktype \
    -s schema \
    --src ${INTEGRATIONS_JSON_SCHEMA_DIR}/lib/* \
    -l typescript \
    --no-ignore-json-refs \
    --just-types \
    --converters top-level \
    --no-combine-classes \
    -o ${INTEGRATIONS_NPM_PKG_SRC_SCHEMAS};

  sed -i --expression=':a;N;$!ba;s|\ntype|\nexport type|g' ${INTEGRATIONS_NPM_PKG_SRC_SCHEMAS};
}

function generate_tokens {
  json_schema_files="$(find ${INTEGRATIONS_JSON_SCHEMA_LIB_DIR} -type f -name '*.json')"

  echo "export const Nodes = [" > ${INTEGRATIONS_NPM_PKG_SRC_DIR}/nodes.ts

  for json_schema_file in ${json_schema_files[@]}; do
    raw_id=$(cat ${json_schema_file} | jq --raw-output '.["$id"]')

    id=$(basename "${raw_id}")

    echo "$(cat ${json_schema_file})," >> ${INTEGRATIONS_NPM_PKG_SRC_DIR}/nodes.ts;
  done

  echo "];" >> ${INTEGRATIONS_NPM_PKG_SRC_DIR}/nodes.ts
}

generate_schemas;

generate_tokens;

pnpm run code-static:fix;