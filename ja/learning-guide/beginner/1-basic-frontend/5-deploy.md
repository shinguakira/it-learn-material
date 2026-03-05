# タスク5：デプロイ

[← 初級タスクに戻る](../index.md)

履歴書サイトをインターネットに公開して、誰でも見られるようにしましょう。

## タスク

### オプションA：GitHub Pages（初心者におすすめ）

- [ ] GitHubでリポジトリページに移動する
- [ ] **Settings → Pages** をクリックする
- [ ] 「Source」で **Deploy from a branch** を選択する
- [ ] **main** ブランチと **/ (root)** フォルダを選択して **Save** をクリック
- [ ] 数分待ってから `https://yourname.github.io/your-repo/` にアクセスする
- [ ] 履歴書ページがインターネット上で表示されることを確認する
- [ ] URLを誰かに共有する

### オプションB：Vercel（代替手段）

- [ ] [vercel.com](https://vercel.com/) にアクセスしてGitHubアカウントでサインアップする
- [ ] **Add New → Project** をクリック
- [ ] GitHubリポジトリをインポートする
- [ ] **Deploy** をクリック
- [ ] 提供されたURLにアクセスしてサイトが公開されていることを確認する

## 理解すべきポイント

- デプロイとはサイトをインターネット上でアクセス可能にすること
- GitHub Pagesは静的サイト（HTML/CSS/JS）を無料でホスティングする
- `git push` するたびにGitHub Pagesが自動的にサイトを更新できる
- サイトURLはGitHubのユーザー名とリポジトリ名に基づく

## おめでとうございます！

初級タスクをすべて完了しました。これで以下のことができるようになりました：
- HTMLでページを構造化する
- CSSでスタイリングする
- JavaScriptでインタラクティブな機能を追加する
- GitとGitHubでコードを管理する
- サイトをデプロイして世界に公開する

> 次へ：[6. 実際のレストランWebサイト](6-real-restaurant-website.md)
