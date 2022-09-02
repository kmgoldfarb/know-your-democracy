const ElectionCard = props => {
  console.log(props.data);
  const { election, pollingLocations } = props.data;
  if (pollingLocations.length > 0) {
    function makeStringAddress(location) {
      return `${location['address'].locationName} ${location['address'].line1} ${location['address'].city} ${location['address'].state} ${location['address'].zip}`;
    }
    return (
      <tr>
        <td>
          <p>{election.name}</p>
        </td>
        <td>
          <p>{election.electionDay}</p>
        </td>
        <td>
          <p>{makeStringAddress(pollingLocations[0])}</p>
        </td>
      </tr>
    );
  } else {
    return null;
  }
};

export default ElectionCard;
