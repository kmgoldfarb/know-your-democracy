const OfficialCard = props => {
  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <p>{props.party}</p>
      <p>{props.address}</p>
      <p>{props.phone}</p>
      <p>{props.website}</p>
      <p>{props.photo}</p>
    </>
  );
};

export default OfficialCard;
