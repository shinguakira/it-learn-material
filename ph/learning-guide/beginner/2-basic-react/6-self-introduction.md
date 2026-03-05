# Task 6: Self-Introduction Page

[← Bumalik sa Beginner Tasks](../index.md)

I-convert ang self-introduction/resume na ginawa mo sa `1-basic-frontend` (plain HTML/CSS) sa isang React page na may components.

## Mga Task

### Planuhin ang page mo

- [ ] Balikan ang resume na ginawa mo sa `1-basic-frontend` (lessons 1-2)
- [ ] Tukuyin ang mga section: name/header, summary, education, skills, strong points, contact
- [ ] Ang bawat section ay magiging isang React component

### Buuin ang mga component

- [ ] Gumawa ng `src/components/about/` folder para sa about page components
- [ ] Gumawa ng `ProfileHeader.jsx` — ang pangalan mo, title, at maikling tagline:
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
- [ ] Gumawa ng `SkillList.jsx` — tumatanggap ng array ng skills bilang props:
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
- [ ] Gumawa ng `StrongPoints.jsx` — isang table component na tumatanggap ng array ng `{ point, description }` objects at nire-render sa isang `<table>`
- [ ] Gumawa ng `ContactInfo.jsx` — ang contact details mo (email, GitHub link, atbp.)

### I-assemble ang About page

- [ ] Sa `AboutPage.jsx`, i-import at pagsamahin ang lahat ng components:
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
- [ ] I-style ang About page para magmukhang professional gamit ang inline styles

### Data-driven na content

- [ ] Gumawa ng `src/data/profile.js` para i-store ang lahat ng personal data mo:
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
- [ ] I-import ang data na ito sa `AboutPage.jsx` sa halip na i-hardcode ang mga value sa component
- [ ] Ang paghihiwalay na ito ay ibig sabihin na ma-update mo ang info mo nang hindi ginagalaw ang component code

### I-save ang progress mo

- [ ] I-commit ang changes mo: `git add . && git commit -m "Add self-introduction page with components"`

## Dapat Mong Maintindihan

- Ang pag-rebuild ng static page bilang React components ay nagpapakita ng pagkakaiba sa approach
- Sa plain HTML, magkahalo ang content at structure; sa React, ang mga component ay reusable at data-driven
- Ang paghihiwalay ng data mula sa components ay nagpapadali sa pag-update at pag-maintain ng code mo
- Ang nested folders (`components/about/`) ay tumutulong sa pag-organize ng components ayon sa feature
- Ang props ay nagbibigay-daan sa pagpasa ng iba't ibang data sa parehong component structure

> Susunod: [7. Advanced Features](7-advanced-features.md)
