# タスク3：JavaScript

[← 初級タスクに戻る](../index.md)

ページにインタラクティブな機能を追加しましょう。

## タスク

- [ ] HTMLの `</body>` の前に `<script src="script.js"></script>` を追加する
- [ ] `script.js` ファイルを作成する
- [ ] `console.log("Hello!")` を使い、ブラウザのコンソールで確認する（F12 → Console）
- [ ] 変数を作成し、`document.getElementById()` でページに表示する：
  ```js
  const greeting = "Welcome to my resume!";
  document.getElementById("greeting").textContent = greeting;
  ```
  （HTMLに先に `<p id="greeting"></p>` を追加しておくこと）

### ボタンとアラート

- [ ] 履歴書ページにボタンを追加する：
  ```html
  <button id="hello-btn">Click me</button>
  ```
- [ ] ボタンをクリックするとアラートが表示されるようにする：
  ```js
  document.getElementById("hello-btn").addEventListener("click", function() {
    alert("Button is clicked!");
  });
  ```
- [ ] ボタンをクリックしてアラートが表示されることを確認する

### セクションの表示/非表示

- [ ] セクションの表示を切り替えるボタンを追加する：
  ```html
  <button id="toggle-btn">Show/Hide Skills</button>
  <div id="skills-section">
    <h3>My Skills</h3>
    <p>HTML, CSS, JavaScript</p>
  </div>
  ```
  ```js
  document.getElementById("toggle-btn").addEventListener("click", function() {
    const section = document.getElementById("skills-section");
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
  ```

### クラス名で要素を選択する

- [ ] HTMLの複数の要素に `highlight` クラスを追加する：
  ```html
  <p class="highlight">First item</p>
  <p class="highlight">Second item</p>
  <p class="highlight">Third item</p>
  ```
- [ ] `getElementsByClassName()` で全て選択してスタイルを変更する：
  ```js
  const items = document.getElementsByClassName("highlight");
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "yellow";
  }
  ```
- [ ] `querySelectorAll()` でも同じことを試す（モダンな方法）：
  ```js
  document.querySelectorAll(".highlight").forEach(function(item) {
    item.style.color = "blue";
  });
  ```

### 問い合わせフォーム

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
- `alert()` はポップアップメッセージを表示する — 簡単なテストに便利
- `document.getElementById()` は `id` で1つの要素を選択する
- `document.getElementsByClassName()` は `class` で複数の要素を選択する — コレクションが返されるのでループで処理する
- `document.querySelectorAll()` はCSSセレクタで要素を選択するモダンな方法
- `.textContent` は安全にテキストを設定し、`.innerHTML` はHTMLを設定する（注意して使うこと）
- `.style.property` でJavaScriptからCSSを変更する（例：`.style.display = "none"`）
- イベントリスナー（`onclick`、`addEventListener`）でユーザーの操作に応答する
- `e.preventDefault()` でフォーム送信時のページリロードを防ぐ
- `.value` で `<input>` や `<textarea>` の現在のテキストを読み取る

> 次へ：[4. Git & GitHub](4-git-github.md)
