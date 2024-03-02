import { useState } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet. Aut quidem omnis est consequatur corporis vel repellendus officia? Qui mollitia cumque cum eveniet itaque sed laudantium laboriosam ut praesentium commodi.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Id magni dolorem est error aperiam ut doloremque dolor vel quod dolore eum quidem minus est illo amet et eaque accusamus!",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Et assumenda iste aut vero quidem et enim rerum et adipisci dolores est quasi numquam. Et minus labore sit quidem recusandae vel dolor quisquam rem itaque fugit.",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default App;
