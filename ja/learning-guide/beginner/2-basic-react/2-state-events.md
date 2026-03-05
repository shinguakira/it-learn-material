# タスク2：ステートとイベント

[← 初級タスクに戻る](../index.md)

> 参考：[React](../../../frontend/typescript/react/) — ステート管理について学ぶ

アプリをインタラクティブにしましょう。`useState` を学び、フォーム入力を処理し、タスクの追加・削除・切り替え機能を実装します。

## タスク

### useStateの基本

- [ ] Reactから `useState` をインポートする：
  ```jsx
  import { useState } from "react";
  ```
- [ ] `App.jsx` でハードコードしたタスク配列をステートに移動する：
  ```jsx
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", description: "Complete the basics", priority: "high", completed: false },
  ]);
  ```
- [ ] タスクがまだ正しくレンダリングされることを確認する

### 新しいタスクの追加

- [ ] `src/components/AddTaskForm.jsx` を作成し、タイトル、説明、優先度ドロップダウン（`<select>`）の入力フィールドを含める
- [ ] `useState` を使ってフォームの入力値を管理する
- [ ] フォーム送信を処理する — propsで渡された関数を呼び出して新しいタスクを追加する
- [ ] `App.jsx` に `addTask` 関数を作成する：
  ```jsx
  function addTask(title, description, priority) {
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }
  ```
- [ ] `addTask` を `AddTaskForm` にpropとして渡す
- [ ] タスクをいくつか追加して、リストに表示されることを確認する

### タスクの切り替えと削除

- [ ] `TaskCard` にチェックボックスを追加して `completed` ステートを切り替えられるようにする
- [ ] `App.jsx` に `toggleTask` 関数を作成する：
  ```jsx
  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  ```
- [ ] `TaskCard` に削除ボタンを追加する
- [ ] `deleteTask` 関数を作成する：
  ```jsx
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  ```
- [ ] 両方の関数を `TaskCard` にpropsとして渡して接続する

### タスクのフィルタリング

- [ ] タスクリストの上にフィルターボタンを追加する：「All」「Active」「Completed」
- [ ] どのフィルターがアクティブかをステートで管理する
- [ ] 選択されたフィルターに基づいて表示するタスクをフィルタリングする

### 進捗を保存

- [ ] 変更をコミットする：`git add . && git commit -m "Add state, events, and task CRUD"`

## 理解すべきポイント

- `useState` はレンダー間で値を「記憶」するためのもの
- ステートの更新は再レンダリングをトリガーする — Reactが自動的に画面を更新する
- ステートを直接変更してはいけない — 常に新しい配列やオブジェクトを作成する（スプレッド `...`、`.map()`、`.filter()` を使用）
- 新しいステートが前のステートに依存する場合は、関数型アップデーター `setState(prev => ...)` を使う — これにより古いクロージャのバグを回避できる
- Reactのイベントはキャメルケースを使用する：`onClick`、`onChange`、`onSubmit`
- データは下方向に流れ（親から子へpropsで）、イベントは上方向に流れる（子が親の関数を呼び出す）
- `Date.now()` は学習目的でユニークIDを簡単に生成する方法

> 次：[3. スタイリングと構造](3-styling-structure.md)
