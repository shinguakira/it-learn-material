# タスク5：React Router

[← 初級タスクに戻る](../index.md)

> 参考：[React](../../../frontend/typescript/react/) — ルーティングについて学ぶ

ルーティングを追加して、アプリに複数のページを持たせましょう — タスク管理ページと自己紹介ページです。

## タスク

### React Routerのインストール

- [ ] React Router (v6) をインストールします：
  ```bash
  npm install react-router-dom
  ```
  > **注意：** このガイドはReact Router v6を使用しています。オンラインで検索する場合、`<Routes>` と `<Route element={...}>` を使っている例を参照してください — 古いv5のチュートリアルは異なる構文（`<Switch>`、`<Route component={...}>`）を使っています。

- [ ] `main.jsx` でアプリを `BrowserRouter` でラップします：
  ```jsx
  import { BrowserRouter } from "react-router-dom";

  createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  ```

### ルートの設定

- [ ] `src/pages/` フォルダを作成します
- [ ] タスク管理のUIを `src/pages/TasksPage.jsx` に移動します（タスクのstateとロジックもここに移動します）
- [ ] プレースホルダーとして `src/pages/AboutPage.jsx` を作成します：
  ```jsx
  function AboutPage() {
    return <h2>About Me — Coming Soon</h2>;
  }
  export default AboutPage;
  ```
- [ ] `App.jsx` でルートを設定します：
  ```jsx
  import { Routes, Route } from "react-router-dom";
  import TasksPage from "./pages/TasksPage";
  import AboutPage from "./pages/AboutPage";

  function App() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    );
  }
  ```
- [ ] ブラウザのURLに `/` と `/about` を入力して、両方のルートをテストしましょう

### ナビゲーション

- [ ] `Header.jsx` にナビゲーションリンクを追加します：
  ```jsx
  import { Link } from "react-router-dom";

  function Header() {
    return (
      <header style={{ backgroundColor: "#2c3e50", padding: "16px", color: "#fff" }}>
        <h1>TaskFlow</h1>
        <nav>
          <Link to="/" style={{ color: "#fff", marginRight: "16px" }}>Tasks</Link>
          <Link to="/about" style={{ color: "#fff" }}>About Me</Link>
        </nav>
      </header>
    );
  }
  ```
- [ ] `Link` の代わりに `NavLink` を使って、アクティブなページをハイライトしましょう：
  ```jsx
  import { NavLink } from "react-router-dom";

  <NavLink
    to="/"
    style={({ isActive }) => ({
      color: "#fff",
      marginRight: "16px",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    })}
  >
    Tasks
  </NavLink>
  ```

### 404ページ

- [ ] `src/pages/NotFoundPage.jsx` を作成し、「ページが見つかりません」というメッセージとホームへのリンクを表示しましょう
- [ ] キャッチオールルートを追加します：
  ```jsx
  <Route path="*" element={<NotFoundPage />} />
  ```
- [ ] 存在しないURL（例：`/xyz`）にアクセスしてテストしましょう

### 進捗を保存

- [ ] 変更をコミットしましょう：`git add . && git commit -m "Add React Router with pages and navigation"`

## 理解すべきポイント

- React Routerはクライアントサイドルーティングを実現します — ナビゲーション時にページのリロードが発生しません
- `<BrowserRouter>` はアプリ全体をラップし、ルーティングを有効にします
- `<Routes>` と `<Route>` は、どのURLパスでどのコンポーネントをレンダリングするかを定義します
- `<Link>` と `<NavLink>` は、ページをリロードせずにナビゲーションリンクを作成します（`<a href>` とは異なります）
- `path="*"` は他のルートにマッチしないすべてのURLをキャッチします（404ページ）
- ページを `pages/` フォルダに、共有UIを `components/` フォルダに整理するのは一般的なパターンです

> 次：[6. 自己紹介ページ](6-self-introduction.md)
