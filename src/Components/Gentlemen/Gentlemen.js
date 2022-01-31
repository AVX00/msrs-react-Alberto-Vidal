import Gentleman from "../Gentleman/Gentleman";

const Gentlemen = ({ gentlemen }) => {
  return (
    <ul className="gentlemen">
      {gentlemen.map((gentleman) => {
        return <Gentleman key={gentleman.id} gentleman={gentleman} />;
      })}
    </ul>
  );
};
export default Gentlemen;
