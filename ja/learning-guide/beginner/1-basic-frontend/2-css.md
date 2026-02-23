# タスク2：CSS

[← 初級タスクに戻る](../index.md)

> 参照：[CSS](../../../frontend/css/) — スタイリングとレイアウトを学ぶ

履歴書ページの改善を続けましょう。HTMLだけのタスク、CSSだけのタスク、両方を使うタスクがあります。

## タスク

### 履歴書にコンテンツを追加する（HTML）

- [ ] HTMLのテーブルを使って「強み」セクションを追加する（CSSは不要）
  ```html
  <section>
    <h2>強み</h2>
    <table>
      <tr><td>勤勉</td><td>長時間集中して働ける</td></tr>
      <tr><td>学習力</td><td>新しいスキルを素早く習得できる</td></tr>
      <tr><td>健康</td><td>めったに体調を崩さず、常に出勤できる</td></tr>
    </table>
  </section>
  ```
- [ ] 使えるプログラミング言語のセクションを追加する（例：C++）
  ```html
  <section>
    <h2>プログラミング言語</h2>
    <ul>
      <li>C++</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </section>
  ```
- [ ] クリックで移動できるリンクをGoogleなどに追加する
  ```html
  <a href="https://www.google.com">Googleにアクセス</a>
  ```

### 履歴書をスタイリングする（CSS）

- [ ] `index.html` と同じフォルダに `style.css` ファイルを作成する
- [ ] HTMLにリンクされていることを確認する：`<link rel="stylesheet" href="style.css" />`
- [ ] CSSで名前（h1）を青色にする
  ```css
  h1 {
    color: blue;
  }
  ```
- [ ] bodyの背景色とフォントファミリーを変更する
- [ ] セクションに `padding` と `margin` を追加する
- [ ] テーブルにボーダーとスペースを追加してスタイリングする

### オプション：もっときれいにする

- [ ] `max-width` と `margin: auto` でコンテンツを中央に配置する
- [ ] Flexboxで2カラムレイアウトを作る
- [ ] 色、フォント、スペースを調整してプロフェッショナルな見た目にする
- [ ] リンクのスタイルを変更する（色を変える、下線を消すなど）

## 理解すべきポイント

- `<table>`、`<tr>`、`<td>` はテーブルレイアウトを作る — 強みのような構造化された情報に便利
- `<a href="url">テキスト</a>` は別のページへのクリック可能なリンクを作る
- CSSセレクタはHTML要素を対象にする（例：`h1`、`.classname`、`#id`）
- ボックスモデル：`margin` → `border` → `padding` → コンテンツ
- `display: flex` で子要素を横並びにする

> 次へ：[3. JavaScript](3-javascript.md)
