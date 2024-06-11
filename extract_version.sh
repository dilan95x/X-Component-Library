#!/bin/bash

version=$(node -p -e "require('./package.json').version")

echo "VERSION=$version" > version.env
