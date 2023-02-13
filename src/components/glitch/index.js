import "./glitch.scss";

const Glitch = ({ text }) => {
  return (
    <div className={"glitch"} data-text={text}>
      {text}
    </div>
  );
};

export default Glitch;
