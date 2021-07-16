import styles from './OfficialCard.module.css';
const OfficialCard = props => {
  const makeAddressString = location => {
    if (location) {
      return `${location[0].line1}, ${location[0].city}, ${location[0].state} ${location[0].zip}`;
    }
  };
  const makePhoneClickable = num => {
    const linkNum = `tel:${num}`;
    return <a href={linkNum}>{num}</a>;
  };
  const stringAddress = makeAddressString(props.address);
  const phoneNum = makePhoneClickable(props.phone);

  return (
    <tr className={styles.tablerow}>
      <td>
        <h3>{props.name}</h3>
      </td>
      <td>
        <h4>{props.title}</h4>
      </td>
      <td>
        <p>{props.party}</p>
      </td>
      <td>
        <p>{props.phone ? phoneNum : null}</p>
      </td>
      <td>
        <p>
          {props.website ? (
            <a href={props.website} target="_blank">
              Website
            </a>
          ) : null}
        </p>
      </td>
      <td>
        <p className={styles.address}>{props.address ? stringAddress : null}</p>
      </td>
    </tr>
  );
  {
    /* <div className={styles.card}>
      <div className={styles.name}>
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
      </div>
      <p>{props.party}</p>
      <p>{props.phone ? phoneNum : null}</p>
      <p>{props.website ? <a href={props.website}>Website</a> : null}</p>
      <p className={styles.address}>{props.address ? stringAddress : null}</p>
      {/* <div className={styles.image}>
        <img src={props.photo} />
      </div> 
    </div> */
  }
};

export default OfficialCard;
