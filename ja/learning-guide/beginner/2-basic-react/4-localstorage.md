# タスク4：localStorage

[← 初級タスクに戻る](../index.md)

メモリ上のstateから永続ストレージにアップグレードしましょう。ページをリフレッシュしてもタスクが消えなくなります。

## タスク

### 問題を理解する

- [ ] アプリにいくつかタスクを追加してから、ページをリフレッシュしてみましょう — タスクが消えてしまうことに気づくはずです
- [ ] ブラウザのDevToolsを開き、Application → Local Storage で何が保存されているか確認しましょう（まだ何もありません）

### useEffectとlocalStorage

- [ ] Reactから `useEffect` をインポートします：
  ```jsx
  import { useState, useEffect } from "react";
  ```
- [ ] タスクが変更されるたびにlocalStorageに保存します：
  ```jsx
  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);
  ```
- [ ] アプリ起動時にlocalStorageからタスクを読み込みます：
  ```jsx
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("taskflow-tasks");
    return saved ? JSON.parse(saved) : [];
  });
  ```
- [ ] テストしましょう：タスクを追加し、ページをリフレッシュして、タスクが残っていることを確認します
- [ ] DevTools → Application → Local Storage を開いて、保存されたデータを確認しましょう

### カスタムフック

- [ ] `src/hooks/useLocalStorage.js` を作成します
- [ ] localStorageのロジックを再利用可能なフックに移動します：
  ```jsx
  import { useState, useEffect } from "react";

  function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }
  export default useLocalStorage;
  ```
- [ ] `App.jsx` でカスタムフックを使います：
  ```jsx
  const [tasks, setTasks] = useLocalStorage("taskflow-tasks", []);
  ```
- [ ] すべてが同じように動作することを確認しましょう

### Cookie（知識として）

- [ ] localStorageとCookieの違いを理解しましょう：
  - **localStorage**：ブラウザにデータを保存、有効期限なし、最大約5MB
  - **Cookie**：リクエストごとにサーバーに送信される、有効期限を設定可能、最大約4KB
- [ ] このアプリにはlocalStorageが適しています — Cookieはログインセッションなどに向いています

### オプション

- [ ] stateとlocalStorageの両方をクリアする「全タスク削除」ボタンを追加しましょう
- [ ] 各タスクに「最終更新日時」のタイムスタンプを追加しましょう

### 進捗を保存

- [ ] 変更をコミットしましょう：`git add . && git commit -m "Add localStorage persistence and custom hook"`

## 理解すべきポイント

- `useEffect` はコンポーネントのレンダリング後にコードを実行します — 「副作用」（Reactのレンダリングサイクル外の処理）のためのものです
- 依存配列 `[tasks]` は、`tasks` が変更されたときだけエフェクトを実行するようReactに指示します
- 保存エフェクトは初回レンダリング時にも実行されます — つまり読み込んだデータをlocalStorageに書き戻します（無害ですが、エフェクトは必ず最低1回は実行されることを知っておきましょう）
- `localStorage.setItem()` と `localStorage.getItem()` は文字列を保存・取得します
- `JSON.stringify()` と `JSON.parse()` はJavaScriptオブジェクトと文字列を相互に変換します
- カスタムフックを使うと、ステートフルなロジックを抽出して再利用できます — フックを使う関数にすぎません
- 遅延初期化 `useState(() => ...)` は、関数を初回レンダリング時にのみ実行します

> 次：[5. React Router](5-react-router.md)
