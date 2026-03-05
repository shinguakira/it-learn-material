# タスク7：高度な機能

[← 初級タスクに戻る](../index.md)

TaskFlowを本格的なプロジェクト管理ツールのように感じられる機能を追加しましょう。

> これはコースの中で最も大きなタスクです。各セクションを一つずつ進め、都度テストしましょう。各セクション完了後にコミットすることを検討してください。

## パートA：タスク管理の強化

### タスクの詳細

- [ ] タスクにフィールドを追加する：期限、カテゴリ/タグ、メモ
- [ ] `AddTaskForm` を新しいフィールドで更新する（期限用のdate input、メモ用のtext area）
- [ ] `TaskCard` に期限を表示し、期限超過のタスクを赤でハイライトする

### タスクの編集

- [ ] 各 `TaskCard` に「編集」ボタンを追加する
- [ ] 編集時、カードが現在の値が入った入力フィールドに切り替わる
- [ ] `TaskCard` 内でstateを使って、カードが「表示」モードか「編集」モードかを管理する：
  ```jsx
  const [isEditing, setIsEditing] = useState(false);
  ```
- [ ] 編集した値を保存し、表示モードに戻す
- [ ] 親コンポーネントで `editTask` 関数を作成し、propsとして渡す

## パートB：検索、ソート、統計

### ソートと検索

- [ ] タイトルでリアルタイムにタスクを絞り込む検索バーを追加する
- [ ] ソートオプションを追加する：優先度順、期限順、作成日順
- [ ] `useMemo` を使ってフィルタリング/ソートを最適化する：
  ```jsx
  import { useMemo } from "react";

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort(/* your sort logic */);
  }, [tasks, searchQuery, sortBy]);
  ```

### タスクの統計

- [ ] `TaskStats.jsx` コンポーネントを作成して以下を表示する：
  - タスクの合計数
  - 完了したタスク数
  - 優先度別のタスク数（例：「高 3件、中 2件、低 1件」）
  - 完了率をプログレスバーで表示する（`<div>` の中に `<div>` を入れて、幅のパーセンテージで表現する）
- [ ] タスクページのタスクリストの上に配置する

## パートC：仕上げ

### 確認ダイアログ

- [ ] タスクを削除する前に確認を表示する：「このタスクを削除してもよろしいですか？」
- [ ] シンプルにするため `window.confirm()` を使う

### オプション

- [ ] 色分けされたラベルでタスクカテゴリを追加する
- [ ] キーボードショートカットを追加する（例：「n」キーで新規タスクフォームを開く）— `useEffect` とクリーンアップ関数を使う：
  ```jsx
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "n") setShowForm(true);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  ```
- [ ] アプリをレスポンシブにする — スタイルの条件分岐で `window.innerWidth` を使って小さい画面向けにレイアウトを調整する

### 進捗を保存

- [ ] 変更をコミットする：`git add . && git commit -m "Add advanced features: edit, search, sort, stats"`

## 理解すべきポイント

- `useMemo` は負荷の高い計算結果をキャッシュし、依存関係が変わったときだけ再計算する
- インライン編集（表示/編集モードの切り替え）は実際のアプリでよく使われるUIパターンである
- 実際のプロジェクト管理ツールには検索、ソート、フィルタリングがある — これらはすべてレンダリング前にstateを変換することで動作する
- コンポーネントをひとつの役割（表示、フォーム、統計）に集中させると、保守が容易になる
- 破壊的な操作の前に確認を入れることで、ユーザー体験が向上する
- `useEffect` のクリーンアップ（`return () => ...` の関数）はコンポーネントがアンマウントされるときに実行される — メモリリークを防ぐため、イベントリスナー、タイマー、サブスクリプションは必ずクリーンアップすること

> 次：[8. PrettierとESLint](8-prettier-eslint.md)
