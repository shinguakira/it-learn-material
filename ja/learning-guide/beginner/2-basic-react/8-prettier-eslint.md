# タスク8：PrettierとESLint

[← 初級タスクに戻る](../index.md)

コードフォーマッターとリンターを設定して、コードをきれいで一貫性のある状態に保ちましょう。

## タスク

### Prettier（フォーマット）

- [ ] Prettierを開発依存関係としてインストールする：
  ```bash
  npm install --save-dev prettier
  ```
- [ ] プロジェクトルートに `.prettierrc` ファイルを作成する：
  ```json
  {
    "semi": true,
    "singleQuote": false,
    "tabWidth": 2,
    "trailingComma": "all"
  }
  ```
- [ ] VS Codeに **Prettier** 拡張機能をインストールする
- [ ] VS Codeの設定で「Format on Save」を有効にする（Settings → "format on save" を検索 → チェックボックスをオンにする）
- [ ] `package.json` にformatスクリプトを追加する：
  ```json
  "scripts": {
    "format": "prettier --write src/"
  }
  ```
- [ ] `npm run format` を実行して、ファイルがどのように修正されるか確認する
- [ ] ファイルのインデントをわざと崩して、保存してPrettierが自動的に修正するのを確認する

### ESLint（リンティング）

- [ ] Viteがすでに `eslint.config.js` ファイルを作成していることを確認する — 開いてルールを見てみる
- [ ] `npm run lint` を実行する（Viteにはこのスクリプトがデフォルトで含まれている）
- [ ] 警告やエラーが出た場合、メッセージを読んで修正を試みる
- [ ] 使わない変数を書いて、ファイルを保存し、ESLintが警告を出すか確認する
- [ ] VS Codeに **ESLint** 拡張機能をインストールして、エディター上で直接警告が表示されるようにする

### プロジェクトを整理する

- [ ] `npm run format` を実行して、既存のコードをすべてフォーマットする
- [ ] `npm run lint` を実行して、プロジェクト全体の警告を修正する
- [ ] すべてのコンポーネントとページが正しくフォーマットされていることを確認する

### 進捗を保存

- [ ] 変更をコミットする：`git add . && git commit -m "Add Prettier and ESLint, format codebase"`

## 理解すべきポイント

- **Prettier** はフォーマッターです — コードの見た目を修正します（インデント、クォート、セミコロン）
- **ESLint** はリンターです — 潜在的なバグや悪いパターンを見つけます（未使用の変数、importの不足）
- それぞれ異なる問題を解決し、一緒に使うことで効果を発揮します
- `--save-dev` はそのパッケージが開発時にのみ必要で、本番環境では不要であることを意味します
- 既存のプロジェクトでこれらのツールを実行すると、見落としていた問題を発見できます

> 次：[9. TypeScriptに変換](9-convert-to-typescript.md)
