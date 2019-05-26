# About

五等分の花嫁の公式Twitterのイラストをセリフで検索したくなって作ったもの


## Update memo

1. fetchImages

    1. puppeteerのurlリストに公式モーメントページのurlをメモ

    2. スクリプトで画像をまとめて取得

2. quotes

    1. 画像を見ながらセリフデータリストのスプレッドシートを手動更新してtsvをダウンロード

    2. スクリプトでjsonを作成して更新

3. deploy

    1. スクリプトでビルドしてリストとデータをS3にアップロード


## Thanks

* https://twitter.com/5Hanayome

* https://github.com/vuejs/vue-cli

* https://element.eleme.io

* https://www.favicon-generator.org/

* https://www.terraform.io/
