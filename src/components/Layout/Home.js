import AddressInput from './AddressInput';
import styles from './Home.module.css';

function Home(props) {
  const addressInfoHandler = address => {
    props.getRep(address);
    props.getElec(address);
  };

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>Know the people in the political system around you!</h1>
        <p>
          If you live in the United States, enter your address below to see your
          representatives across all levels of government, as well as what
          elections might be coming up for you.
        </p>
        <AddressInput addressHandler={addressInfoHandler} />
      </div>
    </div>
  );
}

export default Home;

//&includeOffices=true&levels=country&levels=administrativeArea1&levels=regional&levels=locality
