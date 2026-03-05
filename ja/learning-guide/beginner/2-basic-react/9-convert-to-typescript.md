# タスク9：TypeScriptに変換

[← 初級タスクに戻る](../index.md)

> 参考：[TypeScript](../../../frontend/typescript/) — TypeScriptについて学ぶ

最後の仕上げ — TaskFlowプロジェクト全体をJavaScriptからTypeScriptに変換しましょう。

## タスク

### TypeScriptのセットアップ

- [ ] TypeScriptとReactの型定義をインストールする：
  ```bash
  npm install --save-dev typescript @types/react @types/react-dom
  ```
- [ ] プロジェクトルートに `tsconfig.json` ファイルを作成する：
  ```json
  {
    "compilerOptions": {
      "target": "ES2020",
      "module": "ESNext",
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "jsx": "react-jsx",
      "strict": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "noEmit": true
    },
    "include": ["src"]
  }
  ```
- [ ] `npm run dev` を実行してViteがまだ動作することを確認する（`vite.config.js` のリネームは不要 — Viteがそのまま処理してくれる）

### 型を作成する

- [ ] `src/types/task.ts` にTaskの型を作成する：
  ```typescript
  export type Task = {
    id: number;
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
    completed: boolean;
    dueDate?: string;
    notes?: string;
  };
  ```
- [ ] `"high" | "medium" | "low"` が値をこの3つの選択肢だけに制限していることに注目する
- [ ] `?` はオプショナルなフィールドを示す — `dueDate` と `notes` は `undefined` になりえる

### ファイルを一つずつ変換する

最もシンプルなファイルから始めて、徐々に進めていきましょう：

- [ ] `src/data/profile.js` を `src/data/profile.ts` にリネームする — profileオブジェクトに型を追加する：
  ```typescript
  type Profile = {
    name: string;
    title: string;
    skills: string[];
    strongPoints: { point: string; description: string }[];
    contact: {
      email: string;
      github: string;
    };
  };

  export const profile: Profile = { /* your existing data */ };
  ```
- [ ] `src/styles.js` を `src/styles.ts` にリネームする — `React.CSSProperties` 型を追加する：
  ```typescript
  import { CSSProperties } from "react";

  export const buttonStyle: CSSProperties = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  ```
- [ ] `src/hooks/useLocalStorage.js` を `src/hooks/useLocalStorage.ts` にリネームする — ジェネリクスを追加する：
  ```typescript
  import { useState, useEffect, Dispatch, SetStateAction } from "react";

  function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
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

### コンポーネントを変換する（`.jsx` → `.tsx`）

- [ ] `main.jsx` を `main.tsx` にリネームし、`index.html` を `main.tsx` を指すように更新する：
  ```html
  <script type="module" src="/src/main.tsx"></script>
  ```
- [ ] `App.jsx` を `App.tsx` にリネームする
- [ ] `TaskCard.jsx` を `TaskCard.tsx` に変換する — propsのリファクタリングもこのタイミングで行う。個別のprops（`title`、`description`、`priority`...）を渡す代わりに、単一の `task` オブジェクトを渡すようにする。これは型を追加するだけでなく、実際のリファクタリングです：
  ```typescript
  import { Task } from "../types/task";

  type TaskCardProps = {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, updated: Partial<Task>) => void;
  };

  function TaskCard({ task, onToggle, onDelete, onEdit }: TaskCardProps) {
    // ...existing code
  }
  ```
- [ ] `AddTaskForm.jsx` を `AddTaskForm.tsx` に変換する — フォームイベントに型を付ける：
  ```typescript
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ...
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // ...
  }
  ```
- [ ] `Header.jsx` を `Header.tsx` に変換する
- [ ] Aboutページの全コンポーネント（`ProfileHeader.jsx`、`SkillList.jsx` など）を型付きpropsで `.tsx` に変換する
- [ ] 全ページコンポーネント（`TasksPage.jsx`、`AboutPage.jsx`、`NotFoundPage.jsx`）を `.tsx` に変換する
- [ ] `TaskFilter.jsx` と `TaskStats.jsx` を `.tsx` に変換する

### すべての型エラーを修正する

- [ ] `npx tsc --noEmit` を実行して、ビルドせずに型エラーをチェックする
- [ ] エラーを一つずつ修正する — エラーメッセージをよく読めば、何が問題か正確に教えてくれる
- [ ] `npm run dev` を実行して、アプリがまだ正常に動作することを確認する
- [ ] `npm run build` を実行して、本番ビルドが成功することを確認する

### ESLintをTypeScript用に更新する

- [ ] Viteのテンプレートにはすでに `eslint.config.js` に `typescript-eslint` が含まれている — 設定済みかどうか確認する
- [ ] まだの場合、最新のflat-configパッケージをインストールする：
  ```bash
  npm install --save-dev typescript-eslint
  ```
- [ ] `eslint.config.js` を更新して使用する：
  ```js
  import tseslint from "typescript-eslint";

  export default tseslint.config(
    // ...your existing config
    ...tseslint.configs.recommended,
  );
  ```
- [ ] `npm run lint` を実行して、新しい警告を修正する

### 進捗を保存

- [ ] 変更をコミットする：`git add . && git commit -m "Convert project to TypeScript"`

## 理解すべきポイント

- TypeScriptはJavaScriptに型注釈を追加します — コードを実行する前にバグを発見できます
- `type` はオブジェクトの形状を定義します — データがどのような構造かを示す契約のようなものです
- Propsの型を定義すると、コンポーネントが何を期待しているかが正確にわかります — もう推測する必要はありません
- `"high" | "medium" | "low"` のようなユニオン型は、値を特定の選択肢に制限します
- `?` はオプショナルなプロパティを示します：`dueDate?: string` は `undefined` になりえることを意味します
- ジェネリクス（`<T>`）を使うと、任意の型で動作する再利用可能なコードが書けます
- プロジェクトのTypeScript化は一度にすべてではなく、ファイルごとに進めるのがベストです
- `tsconfig.json` の `strict: true` は最も厳格なチェックを有効にします — 最初は手間がかかりますがバグが減ります
- `React.CSSProperties` はインラインスタイルオブジェクトの型です

## おめでとうございます！

Reactと TypeScriptで完全なタスク管理アプリを構築しました！これであなたは以下のことができるようになりました：

- ViteでReactプロジェクトをセットアップする
- 再利用可能なコンポーネントとpropsでUIを構築する
- `useState` で状態管理し、`useEffect` で副作用を処理する
- localStorageでブラウザにデータを保存する
- React Routerで複数ページのアプリを作成する
- インラインスタイルで動的かつコンポーネントスコープのスタイリングを行う
- PrettierとESLintできれいなコードを書く
- 型を定義してJavaScriptをTypeScriptに変換する

> 前：[8. PrettierとESLint](8-prettier-eslint.md)
