# タスク6：自己紹介ページ

[← 初級タスクに戻る](../index.md)

`1-basic-frontend`で作った自己紹介・履歴書（プレーンHTML/CSS）をReactのコンポーネントを使ったページに変換しましょう。

## タスク

### ページを計画する

- [ ] `1-basic-frontend`（レッスン1-2）で作った履歴書を振り返る
- [ ] セクションを特定する：名前/ヘッダー、概要、学歴、スキル、強み、連絡先
- [ ] 各セクションをReactコンポーネントにする

### コンポーネントを作成する

- [ ] aboutページ用のコンポーネントフォルダ `src/components/about/` を作成する
- [ ] `ProfileHeader.jsx` を作成する — 名前、肩書き、短いキャッチフレーズ：
  ```jsx
  function ProfileHeader({ name, title }) {
    return (
      <div style={{ textAlign: "center", padding: "32px", backgroundColor: "#2c3e50", color: "#fff" }}>
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
    );
  }
  export default ProfileHeader;
  ```
- [ ] `SkillList.jsx` を作成する — スキルの配列をpropsとして受け取る：
  ```jsx
  function SkillList({ title, skills }) {
    return (
      <section style={{ padding: "16px" }}>
        <h2>{title}</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }
  export default SkillList;
  ```
- [ ] `StrongPoints.jsx` を作成する — `{ point, description }` オブジェクトの配列を受け取り、`<table>` で表示するテーブルコンポーネント
- [ ] `ContactInfo.jsx` を作成する — 連絡先情報（メール、GitHubリンクなど）

### Aboutページを組み立てる

- [ ] `AboutPage.jsx` で、すべてのコンポーネントをインポートして組み合わせる：
  ```jsx
  import ProfileHeader from "../components/about/ProfileHeader";
  import SkillList from "../components/about/SkillList";
  import StrongPoints from "../components/about/StrongPoints";
  import ContactInfo from "../components/about/ContactInfo";

  function AboutPage() {
    return (
      <div>
        <ProfileHeader name="Your Name" title="Web Developer" />
        <SkillList title="Programming Languages" skills={["HTML", "CSS", "JavaScript", "React"]} />
        <StrongPoints points={[
          { point: "Fast Learner", description: "I pick up new skills quickly" },
          { point: "Hardworking", description: "I stay focused and deliver" },
        ]} />
        <ContactInfo />
      </div>
    );
  }
  export default AboutPage;
  ```
- [ ] インラインスタイルを使って、Aboutページをプロフェッショナルな見た目にスタイリングする

### データ駆動のコンテンツ

- [ ] `src/data/profile.js` を作成して、個人データをすべてまとめる：
  ```jsx
  export const profile = {
    name: "Your Name",
    title: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    strongPoints: [
      { point: "Fast Learner", description: "I pick up new skills quickly" },
      { point: "Hardworking", description: "I stay focused and deliver" },
    ],
    contact: {
      email: "your@email.com",
      github: "https://github.com/yourname",
    },
  };
  ```
- [ ] `AboutPage.jsx` でこのデータをインポートして、コンポーネント内にハードコーディングしていた値を置き換える
- [ ] データとコンポーネントを分離することで、コンポーネントのコードを触らずに情報を更新できるようになる

### 進捗を保存

- [ ] 変更をコミットする：`git add . && git commit -m "Add self-introduction page with components"`

## 理解すべきポイント

- 静的ページをReactコンポーネントとして再構築することで、アプローチの違いがわかる
- プレーンHTMLではコンテンツと構造が混在するが、Reactではコンポーネントが再利用可能でデータ駆動になる
- データとコンポーネントを分離することで、コードの更新・保守が容易になる
- ネストされたフォルダ（`components/about/`）は機能ごとにコンポーネントを整理するのに役立つ
- propsを使えば、同じコンポーネント構造に異なるデータを渡せる

> 次：[7. 高度な機能](7-advanced-features.md)
