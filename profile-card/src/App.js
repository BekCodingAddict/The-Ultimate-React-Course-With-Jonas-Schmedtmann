import logo from "./logo.svg";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="card">
          <Avatar />
          <Data />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="profile">
      <img
        className="profile-img"
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
        alt="ProfilePicture"
      />
    </div>
  );
}

function Data() {
  return (
    <div>
      <h1 className="montserrat">Otabek Sotvoldiev</h1>
      <p className="montserrat">
        Hi there I'm Otabek live in South Korea. I'm a software engeener student
        at the University. I'm currently learing Full Stack development.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "😎"}
        {level === "intermediate" && "😏"}
        {level === "beginner" && "🥹"}
      </span>
    </div>
  );
}
export default App;
