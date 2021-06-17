import Autocomplete from 'react-google-autocomplete';

const API_KEY = process.env.REACT_APP_API_KEY;

const AddressInput = (props) => {
  const onPlaceSelectedHandler = (place) => {
    console.log(place);
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
    />
  );
};

export default AddressInput;
