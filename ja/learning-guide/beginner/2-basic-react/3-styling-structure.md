# タスク3：スタイリングと構造

[← 初級タスクに戻る](../index.md)

インラインスタイルを使ってアプリを本格的なタスク管理ツールのような見た目にし、プロジェクト構造を整理しましょう。

## タスク

### Reactのインラインスタイル

- [ ] Reactでは、インラインスタイルは文字列ではなくJavaScriptオブジェクトを使います：
  ```jsx
  <div style={{ backgroundColor: "#f5f5f5", padding: "16px", borderRadius: "8px" }}>
    <h3>My Task</h3>
  </div>
  ```
- [ ] 二重の波括弧 `{{ }}` に注目してください — 外側の `{}` はJSX、内側の `{}` はJavaScriptオブジェクトです
- [ ] CSSプロパティ名はcamelCaseを使います：`background-color` は `backgroundColor` に、`font-size` は `fontSize` になります

### TaskCardのスタイリング

- [ ] `TaskCard` にインラインスタイルを追加して、カードのような見た目にしましょう：
  ```jsx
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };
  ```
- [ ] 優先度に応じて異なるボーダーカラーを表示しましょう：
  ```jsx
  const priorityColors = {
    high: "#e74c3c",
    medium: "#f39c12",
    low: "#27ae60",
  };

  const cardStyle = {
    borderLeft: `4px solid ${priorityColors[priority]}`,
    // ...rest of styles
  };
  ```
- [ ] 完了済みタスクには薄い背景色とグレーのテキストでスタイルを適用しましょう
- [ ] 削除ボタンは赤色に、チェックボックスは視覚的に分かりやすくスタイルしましょう

### レイアウトのスタイリング

- [ ] `Header` コンポーネントに背景色とパディングを設定しましょう
- [ ] `AddTaskForm` の入力フィールド間に適切なスペースを設定しましょう
- [ ] `App.jsx` にコンテナ用の div を追加し、`maxWidth` と `margin: "0 auto"` でコンテンツを中央揃えにしましょう
- [ ] フィルターボタンにアクティブ状態のスタイル（異なる背景色）を設定しましょう
- [ ] "3 tasks (1 completed)" のようなタスク数の表示を追加しましょう

### 再利用可能なスタイルオブジェクト

- [ ] `src/styles.js` ファイルを作成して、共有スタイルオブジェクトを格納しましょう：
  ```jsx
  export const colors = {
    primary: "#3498db",
    danger: "#e74c3c",
    success: "#27ae60",
    warning: "#f39c12",
    background: "#f5f5f5",
    white: "#ffffff",
  };

  export const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };
  ```
- [ ] これらの共有スタイルをコンポーネントでインポートして使いましょう

### プロジェクト構造の整理

- [ ] ファイルを以下のように整理しましょう：
  ```
  src/
    components/
      Header.jsx
      TaskCard.jsx
      AddTaskForm.jsx
      TaskFilter.jsx
    styles.js
    App.jsx
    main.jsx
  ```
- [ ] ファイル構成を変更した後、すべてのインポートが正しく動作するか確認しましょう

### 進捗を保存

- [ ] 変更をコミットしましょう：`git add . && git commit -m "Add styling and reorganize project structure"`

> **注意：** 実際のプロジェクトでは、インラインスタイルの代わりにCSS Modules、Tailwind CSS、styled-componentsなどが使われます。ここでインラインスタイルを使っているのは、追加のセットアップが不要で、ReactがJavaScriptでスタイルをどう扱うかを理解しやすいためです。他のアプローチは今後のプロジェクトで学びます。

## 理解すべきポイント

- Reactのインラインスタイルは、CSS文字列ではなくJavaScriptオブジェクトを使う
- プロパティ名はcamelCaseを使う（`background-color` ではなく `backgroundColor`）
- 値は文字列（`"16px"`）または数値（ピクセル値の場合は `16`）
- JavaScriptの変数や式を使って動的にスタイルを計算できる
- スタイルオブジェクトを変数や共有ファイルに抽出すると、コンポーネントがすっきりする
- アプリが大きくなるにつれてプロジェクト構造が重要になる — 関連するファイルをまとめよう

> 次：[4. localStorage](4-localstorage.md)
