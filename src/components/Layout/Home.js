import AddressInput from './AddressInput';

const REPRESENT_API_KEY = process.env.REACT_APP_REPRESENT_API_KEY;

function Home(props) {
  const addressInfoHandler = address => {
    props.getRep(address);
  };

  return (
    <>
      <h1>Know the political system around you!</h1>
      <p>
        Enter your address below to see your representatives across all levels
        of government, as well as what elections are coming up for you.
      </p>
      <AddressInput addressHandler={addressInfoHandler} />
    </>
  );
}

export default Home;

//&includeOffices=true&levels=country&levels=administrativeArea1&levels=regional&levels=locality
