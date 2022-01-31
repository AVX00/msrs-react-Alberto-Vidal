const Info = ({ gentlemen }) => {
  console.log(gentlemen);
  const getSelected = (gentelmen) => {
    return gentlemen.reduce((accumulator, gentleman) => {
      return gentleman.selected ? accumulator + 1 : accumulator;
    }, 0);
  };
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">
          {`${getSelected(gentlemen)}`} gentlemen pointing at you
        </p>
        <button className="button button--select">Select all</button>
      </section>
    </>
  );
};
export default Info;
