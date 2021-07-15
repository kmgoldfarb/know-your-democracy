import styles from './OfficialCard.module.css';
const OfficialCard = props => {
  const makeAddressString = location => {
    if (location) {
      return `${location[0].line1}, ${location[0].city}, ${location[0].state}, ${location[0].zip}`;
    } else {
      return;
    }
  };
  const stringAddress = makeAddressString(props.address);

  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
      </div>
      <div className={styles.details}>
        <p>{props.party}</p>
        <p>{props.phone ? props.phone : null}</p>
        <p>{props.website ? <a href={props.website}>Website</a> : null}</p>
        <p>{stringAddress}</p>
      </div>
      <div className={styles.image}>
        <img src={props.photo} />
      </div>
    </div>
  );
};

export default OfficialCard;
