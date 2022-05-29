# sam-swagger-sample

AWS SAM と Swagger を使用した APIGateway+Lambda のサンプル

## 前提

- AWS SAM CLI をインストールしていること
- 開発で使用する言語の SDK 等をインストールしていること（今回は nodejs を使用する）
- Debug 用に AWSToolkit の vscode 拡張をインストールしていること

## 開発手順

1. sam init --runtime nodejs14.x

Which template source would you like to use? -1

        1 - AWS Quick Start Templates
        2 - Custom Template Location

Choose an AWS Quick Start application template -6

        1 - Hello World Example
        2 - Multi-step workflow
        3 - Standalone function
        4 - Scheduled task
        5 - Data processing
        6 - Serverless API

Would you like to enable X-Ray tracing on the function(s) in your application? [y/N]: n

Project name [sam-app]: sam-swagger-sample

2. src/handlers 配下に Lambda 関数を実装

3. \_\_tests\_\_/unit/handlers 配下に Lambda 関数の unittest を実装

4. 今回は使用しないので/events を削除

5. swagger で API の定義を作成し root フォルダ配下に追加

6. template.yaml を修正

## Debug 方法

1.  sam build を実行

2.  .vscode 配下に debug 用の launch.json を追加

3.  sam local invoke samSwaggerSamplePost -d 5858 を実行

4.  vscode の debug で launch.json の設定を使用する

## テスト実行

1.  sam build を実行

2.  npm test <test ファイル> を実行

※jest を利用するので、必要であれば npm install -D jest 実行
