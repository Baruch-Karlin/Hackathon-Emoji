import pic from "./crying-tears-of-joy-emoji.jpeg";
let lst = [
  { emoji: "url1", title: "angry" },
  { emoji: "url1", title: "angry" },
  { emoji: "url1", title: "angry" },
  { emoji: "url1", title: "angry" },
];
const Result = () => {
  const mocResult = {
    emoji: pic,
    feelings: [],
  };

  return (
    <div>
      <h1>Result</h1>
      <img src={mocResult.emoji} alt="emoji" style={{ width: "200px" }} />
    </div>
  );
};

export default Result;
