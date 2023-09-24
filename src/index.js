import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name="Ayan Liaqat" bio="An Experienced Javascript Developer, Acing Frontend Dveelopment, and learning React" />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="avatar.jpg" alt="Jonas Schmedtmann" class="avatar" /> 
}

function Intro(props) {
  return (
    <div>
    <h1>{props.name}</h1>
    <p>{props.bio}</p>
    <p>I was just wondering if this would work correctly</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML 💪" bgColor="#ff4d4d" />
      <Skill skill="CSS 💪" bgColor="#4d4dff" />
      <Skill skill="JAVASCRIPT 💪" bgColor="#ffff4d" />
      <Skill skill="GIT and GITHUB 💪" bgColor="#4d4d4d" />
    </div>
  )
}

function Skill(props) {
  return <div className="skill" style={{backgroundColor: props.bgColor}}>
    {props.skill}
  </div>
}





const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
