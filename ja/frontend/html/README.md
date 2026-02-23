# HTML

[← フロントエンドに戻る](../README.md)

HTML（HyperText Markup Language）はWebページを作成するための標準マークアップ言語です。

## 学習内容

- 基本的なドキュメント構造
- よく使うHTML要素とタグ
- ブラウザでHTMLを表示する方法
- フォームと入力要素
- セマンティックHTML

## 基本構造

すべてのHTMLファイルには基本構造が必要です。C言語の `#include <stdio.h>` のような「おまじない」と思ってください。まずは書いて覚えましょう。意味の理解は後からで大丈夫です。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ページタイトル</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- ここにコンテンツを書く -->
</body>
</html>
```

- `<!DOCTYPE html>` — HTML5ドキュメントであることをブラウザに伝える
- `<html lang="en">` — ルート要素、`lang`で言語を設定
- `<head>` — メタデータ（ページには表示されない）。文字コード、ビューポート、タイトル、CSSリンクなど
- `<body>` — **メインの部分。** ページに表示されるものはすべてここに書く

## よく使うタグ

HTMLは**タグ**を使います。ペアで使うもの `<tag>内容</tag>` と、自己閉じタグ `<img />` や `<link />` があります。

| タグ | 用途 |
|------|------|
| `<h1>` ~ `<h6>` | 見出し（h1が最大） |
| `<p>` | 段落 |
| `<strong>` | 太字・重要テキスト |
| `<a href="...">` | リンク |
| `<ul>`, `<li>` | 箇条書きリスト |
| `<div>` | ブロック・グループ化 — レイアウトの構造に使う |
| `<img src="..." />` | 画像（自己閉じ） |
| `<br>` | 改行 |

## 例：シンプルな履歴書ページ

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Resume</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="resume">
    <header>
      <h1>名前</h1>
    </header>

    <section>
      <h2>連絡先</h2>
      <p><strong>電話</strong><br>0123456789</p>
      <p><strong>メール</strong><br>your@email.com</p>

      <h2>概要</h2>
      <p>自己紹介文をここに書きます。</p>

      <h2>学歴</h2>
      <p>
        <strong>2025 – 2026</strong><br>
        大学名<br>
        学科名
      </p>
    </section>

    <section>
      <h2>スキル</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </section>
  </div>
</body>
</html>
```

### この例のポイント

- `<header>` はページの見出し部分を囲む
- `<section>` は関連するコンテンツをグループ化する
- `<h2>` はセクションタイトルに使う
- `<strong>` はテキストを太字にする
- `<br>` は段落内で改行する
- `<ul>` + `<li>` は箇条書きリストを作る
- `<div class="resume">` は履歴書全体をグループ化 — `class`は後でCSSのスタイリングに使う

## ブラウザでHTMLを表示する方法

サーバーは不要です。以下の手順で表示できます：

1. ファイルを `something.html` として保存する
2. そのファイルをブラウザ（Chrome、Edgeなど）に**ドラッグ＆ドロップ**する
3. ブラウザがHTMLをWebページとして表示する
4. URLバーに `file:///C:/Users/.../something.html` のようなローカルパスが表示される

## HTMLとCSS

- **HTML** は構造とコンテンツを定義する（ページに何があるか）
- **CSS** はスタイルを定義する（見た目 — 色、フォント、余白など）
- この2つは `<link rel="stylesheet" href="style.css" />` でリンクする
- `<h1>` や `<strong>` などのタグも少し見た目に影響する（大きい文字、太字など）が、詳細なスタイリングはCSSで行う

> 次へ：[CSS](../css/) — HTMLページのスタイリングを学ぶ
