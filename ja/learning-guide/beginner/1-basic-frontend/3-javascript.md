# タスク3：JavaScript

[← 初級タスクに戻る](../index.md)

ページにインタラクティブな機能を追加しましょう。

## タスク

- [ ] HTMLの `</body>` の前に `<script src="script.js"></script>` を追加する
- [ ] `script.js` ファイルを作成する
- [ ] `console.log("Hello!")` を使い、ブラウザのコンソールで確認する（F12 → Console）
- [ ] 変数を作成し、`document.getElementById()` でページに表示する
- [ ] 履歴書ページにボタンを追加する
- [ ] ボタンクリックでセクションの表示/非表示を切り替える
- [ ] HTMLにシンプルな問い合わせフォームを作成する：
  ```html
  <form id="contact-form">
    <input type="text" id="name-input" placeholder="Your name" />
    <input type="email" id="email-input" placeholder="Your email" />
    <textarea id="message-input" placeholder="Your message"></textarea>
    <button type="submit">Send</button>
  </form>
  <div id="form-output"></div>
  ```
- [ ] `script.js` でフォームの `submit` イベントを監視する：
  ```js
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  });
  ```
- [ ] イベントハンドラの中で `.value` を使って入力値を読み取る：
  ```js
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const message = document.getElementById("message-input").value;
  ```
- [ ] 送信されたデータを `form-output` のdivに表示する：
  ```js
  document.getElementById("form-output").innerHTML =
    "<p>Name: " + name + "</p><p>Email: " + email + "</p><p>Message: " + message + "</p>";
  ```
- [ ] テスト：フォームに入力して「Send」をクリックし、フォームの下にデータが表示されることを確認する

## 理解すべきポイント

- `<script>` はJavaScriptとHTMLを接続する
- `console.log()` はデバッグ用 — F12でブラウザのコンソールを確認
- `document.getElementById()` でJavaScriptからHTML要素にアクセスする
- イベントリスナー（`onclick`、`addEventListener`）でユーザーの操作に応答する
- `e.preventDefault()` でフォーム送信時のページリロードを防ぐ
- `.value` で `<input>` や `<textarea>` の現在のテキストを読み取る

> 次へ：[4. Git & GitHub](4-git-github.md)
