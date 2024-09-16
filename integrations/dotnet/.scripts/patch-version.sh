#!/usr/bin/env bash

set -e

#

PKG_JSON_PATH=package.json
DIR_BUILD_PROPS_PATH=Directory.Build.props

#

PKG_JSON_QUERY_VERSION=".version"
DIR_BUILD_PROPS_QUERY_VERSION=".Project.PropertyGroup[1].Version"

#

pkg_json_version=$(cat ${PKG_JSON_PATH} | jq -r ${PKG_JSON_QUERY_VERSION})
echo Target version: ${pkg_json_version}

#

dir_build_props_content=$(cat ${DIR_BUILD_PROPS_PATH})

# dir_build_props_content_patched=$(echo ${dir_build_props_content} | xq "${DIR_BUILD_PROPS_QUERY_VERSION} = \"${pkg_json_version}\"" -x)

# source: https://stackoverflow.com/a/44980159
dir_build_props_content_patched=$(sed ":a;N;$!ba; s|<Version>.*<\/Version>|<Version>${pkg_json_version}<\/Version>|g" Directory.Build.props)

echo "${dir_build_props_content_patched}" > ${DIR_BUILD_PROPS_PATH}