# Task 6: Self-Introduction Page

[← Back to Beginner Tasks](../index.md)

Convert the self-introduction/resume you built in `1-basic-frontend` (plain HTML/CSS) into a React page with components.

## Tasks

### Plan your page

- [ ] Look back at the resume you built in `1-basic-frontend` (lessons 1-2)
- [ ] Identify the sections: name/header, summary, education, skills, strong points, contact
- [ ] Each section will become a React component

### Build the components

- [ ] Create a `src/components/about/` folder for the about page components
- [ ] Create `ProfileHeader.jsx` — your name, title, and a short tagline:
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
- [ ] Create `SkillList.jsx` — accepts an array of skills as props:
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
- [ ] Create `StrongPoints.jsx` — a table component that accepts an array of `{ point, description }` objects and renders them in a `<table>`
- [ ] Create `ContactInfo.jsx` — your contact details (email, GitHub link, etc.)

### Assemble the About page

- [ ] In `AboutPage.jsx`, import and compose all the components:
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
- [ ] Style the About page to look professional using inline styles

### Data-driven content

- [ ] Create `src/data/profile.js` to hold all your personal data:
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
- [ ] Import this data in `AboutPage.jsx` instead of hardcoding values in the component
- [ ] This separation means you can update your info without touching component code

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Add self-introduction page with components"`

## What You Should Understand

- Rebuilding a static page as React components shows the difference in approach
- In plain HTML, content and structure are mixed; in React, components are reusable and data-driven
- Separating data from components makes your code easier to update and maintain
- Nested folders (`components/about/`) help organize components by feature
- Props let you pass different data to the same component structure

> Next: [7. Advanced Features](7-advanced-features.md)
