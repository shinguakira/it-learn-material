# タスク4：Git & GitHub

[← 初級タスクに戻る](../index.md)

バージョン管理でプロジェクトを保存し、GitHubにプッシュしましょう。

## なぜGit？

履歴書ページを作業中に、誤って全部削除してしまったとします。Gitがなければ、作業は消えてしまいます。Gitがあれば、以前のどのバージョンにも戻れます。

Gitはこれらの問題を解決します：
- **ミスを元に戻せる** — コードの過去の保存バージョンに戻れる
- **何が変わったか追跡できる** — 何を、いつ、なぜ変更したか正確に見られる
- **他の人と一緒に作業できる** — 複数人が同じプロジェクトで、お互いのコードを上書きせずに作業できる
- **コードをバックアップできる** — GitHubにプッシュすれば、パソコンが壊れてもコードは安全

すべてのプロの開発者がGitを使っています。これはオプションではなく、基本的なスキルです。

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

## オプション：GUIでGitを使う（ターミナルが好みならスキップ可）

Gitはターミナルだけでなく、ビジュアルなツールでも使えます：

### VS Code内蔵のGit

- [ ] 左サイドバーの **Source Control** アイコンをクリック（または `Ctrl+Shift+G`）
- [ ] 変更されたファイルが一覧表示される — ファイル横の **+** ボタンでステージング（`git add` と同じ）
- [ ] テキストボックスにコミットメッセージを入力し、**チェックマーク** ボタンでコミット
- [ ] **...** → **Push** でGitHubにプッシュ
- [ ] ファイルを変更して、Source Controlパネルに表示されることを確認してみよう

### TortoiseGit（Windows専用）

- [ ] [TortoiseGit](https://tortoisegit.org/)をダウンロード・インストールする（[Git for Windows](https://git-scm.com/downloads)も未インストールならインストール）
- [ ] エクスプローラーでプロジェクトフォルダを右クリック — コンテキストメニューにTortoiseGitのオプションが表示される
- [ ] **Git Commit** を試す — 変更の確認、ファイルの選択、メッセージの入力、コミットができるウィンドウが開く
- [ ] **Git Push** でコミットをGitHubにプッシュ
- [ ] **Git Log** でコミット履歴をビジュアルに確認できる

> これらのGUIツールは裏で同じGitコマンドを実行しています。先にターミナルコマンドを学んでおくと、GUIが何をしているか理解しやすくなります。

## 理解すべきポイント

- Gitはファイルの変更をローカルで追跡する
- GitHubはコードをオンラインに保存する（リモートリポジトリ）
- `git add` → `git commit` → `git push` が基本ワークフロー
- コミットは戻ることができるセーブポイントのようなもの
- VS Codeには内蔵Git機能がある — ターミナルを使わずにステージング、コミット、プッシュができる
- TortoiseGitはWindowsエクスプローラーにGitを統合し、ビジュアルなワークフローを提供する

> 次へ：[5. デプロイ](5-deploy.md)
