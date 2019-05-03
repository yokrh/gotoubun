#!/bin/bash
cd gotoubun/
npm run build
cd ../
cd s3/prd/
sh up.sh
