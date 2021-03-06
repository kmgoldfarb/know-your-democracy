import Autocomplete from 'react-google-autocomplete';
import styles from './AddressInput.module.css';

const AddressInput = props => {
  const onPlaceSelectedHandler = place => {
    props.addressHandler(place);
  };

  return (
    <Autocomplete
      apiKey={process.env.REACT_APP_ADDRESS_API_KEY}
      onPlaceSelected={onPlaceSelectedHandler}
      options={{
        types: ['address'],
        componentRestrictions: { country: ['US'] },
        fields: ['formatted_address'],
      }}
      style={{ width: '80%' }}
      className={styles.input}
    />
  );
};

export default AddressInput;
