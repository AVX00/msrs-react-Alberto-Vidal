const Gentleman = ({
  gentleman: {
    id,
    name,
    status,
    profession,
    tweeter,
    picture,
    alternative,
    text,
    selected,
  },
}) => {
  return (
    <li className={`gentleman ${selected ? "selected" : ""}`}>
      <div className="gentleman__avatar-container">
        <img className="gentleman__avatar" src={picture} alt={alternative} />
        <span className="gentleman__initial">F</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {tweeter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentleman;
