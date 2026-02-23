# タスク4：Git & GitHub

[← 初級タスクに戻る](../index.md)

バージョン管理でプロジェクトを保存し、GitHubにプッシュしましょう。

## タスク

- [ ] [Git](https://git-scm.com/downloads)をインストールする
- [ ] インストールを確認する：ターミナルで `git --version` を実行
- [ ] [GitHub](https://github.com/)アカウントを作成する（まだの場合）
- [ ] 名前とメールアドレスを設定する：
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
  ```
- [ ] ターミナルでプロジェクトフォルダに移動する
- [ ] gitリポジトリを初期化する：`git init`
- [ ] ファイルを追加する：`git add .`
- [ ] 最初のコミットを作成する：`git commit -m "Initial commit"`
- [ ] GitHubで新しいリポジトリを作成する（github.comで **New** をクリック）
- [ ] 接続してプッシュする：
  ```bash
  git remote add origin https://github.com/yourname/your-repo.git
  git branch -M main
  git push -u origin main
  ```
- [ ] GitHubページを更新してファイルがあることを確認する

## 理解すべきポイント

- Gitはファイルの変更をローカルで追跡する
- GitHubはコードをオンラインに保存する（リモートリポジトリ）
- `git add` → `git commit` → `git push` が基本ワークフロー
- コミットは戻ることができるセーブポイントのようなもの

> 次へ：[5. デプロイ](5-deploy.md)
