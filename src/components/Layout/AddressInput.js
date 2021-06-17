import Autocomplete from 'react-google-autocomplete';

const AddressInput = (props) => {
  const onPlaceSelectedHandler = (place) => {
    console.log(place);
  };

  return (
    <Autocomplete
      apiKey={props.API_KEY}
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
