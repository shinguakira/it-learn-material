# タスク0：Vite + Reactのセットアップ

[← 初級タスクに戻る](../index.md)

> 参考：[React](../../../frontend/typescript/react/) — Reactについて学ぶ

Viteを使って最初のReactプロジェクトを作成しましょう。

## タスク

- [ ] [Node.js](https://nodejs.org/) がインストールされていることを確認する（ターミナルで `node --version` を実行）
- [ ] Viteで新しいReactプロジェクトを作成する：
  ```bash
  npm create vite@latest taskflow -- --template react
  ```
- [ ] プロジェクトフォルダに移動する：`cd taskflow`
- [ ] 依存パッケージをインストールする：`npm install`
- [ ] 開発サーバーを起動する：`npm run dev`
- [ ] ターミナルに表示されたURL（通常 `http://localhost:5173`）を開き、Vite + Reactのスターターページが表示されることを確認する
- [ ] VS Codeでプロジェクトフォルダを開く
- [ ] プロジェクト構成を探索する — 以下のファイルを確認する：
  - [ ] `package.json` — プロジェクトの依存関係とスクリプト
  - [ ] `vite.config.js` — Viteの設定ファイル
  - [ ] `index.html` — 唯一のHTMLファイル（`<div id="root">` に注目）
  - [ ] `src/main.jsx` — Reactを `#root` にレンダリングするエントリーポイント
  - [ ] `src/App.jsx` — メインコンポーネント
- [ ] `App.jsx` のテキストを「TaskFlow」に変更し、ブラウザが自動的に更新されることを確認する（ホットリロード）
- [ ] スターターファイルを整理する：`src/App.css` の中身を空にし、`src/assets/` のロゴファイルを削除する
- [ ] `App.jsx` の内容をシンプルなコンポーネントに置き換える：
  ```jsx
  function App() {
    return (
      <div>
        <h1>TaskFlow</h1>
        <p>My task management app</p>
      </div>
    );
  }
  export default App;
  ```
- [ ] ブラウザで正しくレンダリングされることを確認する

### 進捗を保存

- [ ] gitリポジトリを初期化する：`git init`
- [ ] `.gitignore` ファイルを作成する（Viteが自動生成するものに `node_modules/` が含まれていることを確認）
- [ ] ステージしてコミットする：`git add .` → `git commit -m "Initial TaskFlow setup"`

## 理解すべきポイント

- Viteは開発中に高速なホットリロードでReactアプリを提供するビルドツール
- `npm create vite@latest` はテンプレートから新しいプロジェクトをスキャフォールドする
- Reactは `index.html` 内の単一の `<div id="root">` にレンダリングする — これがSingle Page Application（SPA）
- `.jsx` ファイルではJavaScriptの中にHTMLに似た構文（JSX）を書くことができる
- Reactコンポーネントはjsxを返す関数
- `export default` でコンポーネントを他のファイルから利用可能にする

> 次：[1. コンポーネントとJSX](1-components-jsx.md)
