import { useState } from 'react';
import { useHistory } from 'react-router';
import AddressInput from './AddressInput';
import Official from '../Official';

const REPRESENT_API_KEY = process.env.REACT_APP_REPRESENT_API_KEY;

function Home(props) {
  const [officials, setOfficials] = useState([]);
  async function getRepresentation(address) {
    const userAddress = address.formatted_address;
    const response = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${userAddress}&key=${REPRESENT_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
  }
  const history = useHistory();
  const addressInfoHandler = (address) => {
    //console.log(address);
    getRepresentation(address);
  };

  return (
    <>
      <h1>Know the political system around you!</h1>
      <p>
        Enter your address below to see your representatives across all levels
        of government, as well as what elections are coming up for you.
      </p>
      <AddressInput addressHandler={addressInfoHandler} />
      {officials}
    </>
  );
}

export default Home;
