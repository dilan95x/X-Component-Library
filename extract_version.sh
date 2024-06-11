#!/bin/bash

# Extract version from package.json
version=$(node -p -e "require('./package.json').version")

# Write the version to a file
echo "VERSION=$version" > version.env
