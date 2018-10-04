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

## PUBPLIC DIRECTORY
mkdir public

## TESTS DIRECTORY
mkdir -p resources/tests/{tfp-tdd,pyramid,types,unit,intergrated,headless-browser,visual-regression,techniques};


## TOOLS DIRECTORY
mkdir -p resources/tools/{bash,vim,git-github,nix,docker,travis,jenkins,prometheus}

## AGILE DIRECTORY
mkdir -p resources/agile-methods/{scrum,xp,moderation,facilitation,tools}

## SOFTWARE DESIGN
mkdir -p resources/software-design/{fp,oop,solid,kiss,dry,yagni,sql-and-nosql,monolith-and-mirco-services,monorepo-and-multirepo}

## COMMUNICATION
mkdir -p resources/communication/{public-speaking,blogging,confrences-and-meetups,free-software,netiquette}

## LEARNING
mkdir -p resources/learning/{books-to-read,learn-by-teaching}

## Create Readme files
find resources/ -type d -exec touch {}/README.md \;
