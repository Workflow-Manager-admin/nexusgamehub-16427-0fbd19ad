#!/bin/bash
cd /home/kavia/workspace/code-generation/nexusgamehub-16427-0fbd19ad/nexusgamehub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

