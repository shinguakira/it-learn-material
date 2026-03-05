# タスク1：コンポーネントとJSX

[← 初級タスクに戻る](../index.md)

> 参考：[React](../../../frontend/typescript/react/) — コンポーネントについて学ぶ

Reactの基本的な構成要素 — コンポーネント、JSX構文、propsを学びましょう。TaskFlowアプリの静的なシェルを構築します。

## タスク

### 最初のコンポーネント

- [ ] `src/components/` フォルダを作成する
- [ ] `src/components/Header.jsx` を作成する：
  ```jsx
  function Header() {
    return (
      <header>
        <h1>TaskFlow</h1>
        <p>Manage your tasks efficiently</p>
      </header>
    );
  }
  export default Header;
  ```
- [ ] `App.jsx` に `Header` をインポートして使用する：
  ```jsx
  import Header from "./components/Header";

  function App() {
    return (
      <div>
        <Header />
      </div>
    );
  }
  export default App;
  ```
- [ ] ブラウザでレンダリングされることを確認する

### Props

- [ ] propsを受け取る `src/components/TaskCard.jsx` を作成する：
  ```jsx
  function TaskCard({ title, description, priority }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Priority: {priority}</span>
      </div>
    );
  }
  export default TaskCard;
  ```
- [ ] ハードコードしたデータで `App.jsx` 内に `TaskCard` を使用する：
  ```jsx
  <TaskCard title="Learn React" description="Complete the basics" priority="high" />
  <TaskCard title="Setup project" description="Already done!" priority="low" />
  ```

### リストのレンダリング

- [ ] `App.jsx` にタスクオブジェクトの配列を作成する：
  ```jsx
  const tasks = [
    { id: 1, title: "Learn React", description: "Complete the basics", priority: "high" },
    { id: 2, title: "Setup project", description: "Already done!", priority: "low" },
    { id: 3, title: "Add features", description: "Coming soon", priority: "medium" },
  ];
  ```
- [ ] `.map()` を使って各タスクに対して `TaskCard` をレンダリングする：
  ```jsx
  {tasks.map((task) => (
    <TaskCard key={task.id} title={task.title} description={task.description} priority={task.priority} />
  ))}
  ```
- [ ] マッピングされた各要素に `key` propを追加する — Reactがリスト内のアイテムを追跡するために必要

### 条件付きレンダリング

- [ ] 各タスクオブジェクトに `completed` フィールドを追加する（一部を `true`、一部を `false` に設定）
- [ ] `TaskCard` 内で、タスクが完了している場合は取り消し線を表示する：
  ```jsx
  <h3 style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</h3>
  ```

### 進捗を保存

- [ ] 変更をコミットする：`git add . && git commit -m "Add components, props, and list rendering"`

## 理解すべきポイント

- コンポーネントは再利用可能なUIの部品 — カスタムHTMLタグのようなもの
- propsは親コンポーネントから子コンポーネントへデータを渡す方法（HTML属性のようなもの）
- JSX内の `{}` でJavaScript式を書くことができる
- `.map()` でリストをレンダリングする場合、各アイテムにはユニークな `key` propが必要 — Reactが変更を追跡するため
- JSXでは `class` の代わりに `className` を使用する（`class` はJavaScriptの予約語のため）
- 条件付きレンダリングには三項演算子（`? :`）や `&&` などのJavaScript式を使用する

> 次：[2. ステートとイベント](2-state-events.md)
