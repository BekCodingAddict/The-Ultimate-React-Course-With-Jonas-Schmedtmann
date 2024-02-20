import { useState } from "react";

const dataOfPicture = [
  {
    title: "Nature's Beauty",
    imageUrl:
      "https://www.insidewink.com/wp-content/uploads/2020/04/Jean_Trebek_Beauty_in_Nature.jpg",
    caption: "Explore the beauty of nature with breathtaking landscapes.",
  },
  {
    title: "Cityscape",
    imageUrl:
      "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2020/09/d41d350481733e8c9182a6ab5fa7fe7c.jpg",
    caption: "Experience the vibrant energy of city life.",
  },
  {
    title: "Wildlife Encounter",
    imageUrl:
      "https://thumbs.dreamstime.com/b/large-group-african-safari-animals-wildlife-conservation-concept-174172993.jpg",
    caption: "Encounter majestic creatures in their natural habitat.",
  },
];

export default function SlideShow() {
  const [step, setStep] = useState(1);
  return (
    <div className="card">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="imgCard">
        <img
          style={{
            width: "500px",
            height: "320px",
            borderRadius: "7px",
          }}
          src={dataOfPicture[step - 1].imageUrl}
          alt={dataOfPicture[step - 1].title}
        />
      </div>
      <p className="message">{dataOfPicture[step - 1].caption}</p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => {
            step > 1 && setStep(step - 1);
          }}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => {
            step < 3 && setStep(step + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
