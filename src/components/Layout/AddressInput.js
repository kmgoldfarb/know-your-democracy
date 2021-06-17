import Autocomplete from 'react-google-autocomplete';
import styles from './AddressInput.module.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const AddressInput = (props) => {
  const onPlaceSelectedHandler = (place) => {
    props.addressHandler(place);
  };

  return (
    <Autocomplete
      apiKey={API_KEY}
      onPlaceSelected={onPlaceSelectedHandler}
      options={{
        types: ['address'],
        componentRestrictions: { country: ['US'] },
        fields: ['formatted_address'],
      }}
      style={{ width: '50%' }}
      className={styles.input}
    />
  );
};

export default AddressInput;
