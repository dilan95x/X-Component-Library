#!/bin/bash

# Extract version from package.json
version=$(node -p -e "require('./package.json').version")

# Set the version as an output
echo "::set-output name=version::$version"
