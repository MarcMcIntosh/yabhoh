#!/usr/bin/env bash

# This script was used to create the resources directory tree

# test in the scripts dir
# with ./build_dirs && tree resources && rm -rf resources
TOOLS=tools/{bash,vim,nix,docker,travis,jenkins,prometheus};
AGILE=agile/{scrum,xp};
SD=software-design;
COMM=communication;
LEARNING=learning;
# DIRS=resources/{$TESTS,$TOOLS,$AGILE,$SD,$COMM,$LEARNING}

## TESTS DIRECTORY
mkdir -p resources/tests/{tdd,tfp,headless-browser-testing,visual-regression-testing};

## TOOLS DIRECTORY
mkdir -p resources/tools/{bash,vim,nix,docker,travis,jenkins,prometheus}

## AGILE DIRECTORY
mkdir -p resources/agile

## SOFTWARE DESIGN
mkdir -p resources/software-design

## COMMUNICATION
mkdir -p resources/communication

## LEARNING
mkdir -p resources/learning

