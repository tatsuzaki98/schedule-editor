# 使い方
ビルド

`make all`

起動(localhost:8080 -> 80)

`make run`

バックグラウンドで起動

`make serve`

デバッグモードで起動(localhost:3000)

`make start`

# ディレクトリ構成
/client: ブラウザに表示するJavaScriptのソース, フレームワークにReact.jsを使用。

/server: バックグラウンドの処理を行うJavaScriptのソース, フレームワークにExpressを使用。/dataから知識グラフを取得する。Solr(localhost:8983)に接続して検索結果を取得する。

/data: 知識グラフのデータ。

/public: html, cssなどブラウザに表示するファイル。

/config: JavaScriptのビルド設定。

/build: ビルドしたJavaScriptファイル。

# 人名メモ
藤原経光, 頼高, 大炊御門
