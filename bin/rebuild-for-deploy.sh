#!/usr/bin/env bash
set -ex
script_dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd "$script_dir" || exit 1
cd .. || exit 1

rm -rf node_modules
rm -f package-lock.json
npm install -omit=dev
npm dedup -omit=dev
