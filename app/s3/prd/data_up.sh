#!/usr/bin/env bash
# aws s3 sync ../../gotoubun/public/data/ s3://gotoubun/data/ --include "*.json"
# aws s3 sync ../../gotoubun/public/data/ s3://gotoubun/data/ --include "*.jpg"
aws2 s3 sync ../../gotoubun/public/data/ s3://gotoubun/data/ --include "*.json"
aws2 s3 sync ../../gotoubun/public/data/ s3://gotoubun/data/ --include "*.jpg"
