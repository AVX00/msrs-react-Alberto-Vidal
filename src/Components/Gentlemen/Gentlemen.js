import Gentleman from "../Gentleman/Gentleman";

const Gentlemen = (gentlemen) => {
  return (
    <ul className="gentlemen">
      {gentlemen.forEach((gentleman) => `<Gentleman getnleman=${gentleman}>`)}
    </ul>
  );
};
export default Gentlemen;
