#!/usr/bin/env bash
# aws s3 sync ../../gotoubun/dist/ s3://gotoubun/ --include "*"
# aws s3 sync ../../gotoubun/dist/ s3://gotoubun/ --include "*" --exclude "data/5hanayome/*" --exclude "img/icons/*" --exclude "tw_icon_05.png"
aws2 s3 sync ../../gotoubun/dist/ s3://gotoubun/ --include "*" --exclude "data/5hanayome/*" --exclude "img/icons/*" --exclude "tw_icon_05.png"
