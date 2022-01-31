const Info = ({ gentlemen }) => {
  const [gentlemenArray, setGentlemenArray] = gentlemen;
  const getSelected = (gentlemenArray) => {
    return gentlemen.reduce((accumulator, gentleman) => {
      return gentleman.selected ? accumulator + 1 : accumulator;
    }, 0);
  };

  const selectAll = () => {
    console.log(gentlemenArray);
    let mock = gentlemenArray.map((gentleman) => gentleman);
    for (const gentleman of mock) {
      if (!gentleman.selected) {
        gentleman.selected = true;
      }
    }
    setGentlemenArray(mock);
  };
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">
          {`${getSelected(gentlemenArray)}`} gentlemen pointing at you
        </p>
        <button className="button button--select" onClick={selectAll}>
          Select all
        </button>
      </section>
    </>
  );
};
export default Info;
