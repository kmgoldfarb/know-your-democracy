import OfficialCard from './OfficialCard';
import styles from './People.module.css';

// Adds the office name to every official
const getIndivOfficials = (officials, offices) => {
  return offices.reduce((acc, office) => {
    const newOfficials = office.officialIndices.map(i => ({
      ...officials[i],
      officeName: office.name,
    }));

    return [...acc, ...newOfficials];
  }, []);
};

function People({ offices, officials }) {
  const data = getIndivOfficials(officials, offices);
  console.log(data);
  return (
    <div className={styles.people}>
      <h1>Know who represents you</h1>
      {data.length === 0 && (
        <p>Please enter your address on the home page to see results.</p>
      )}
      <table className={styles.table}>
        {data.length > 0 && (
          <thead className={styles.head}>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Party</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Address</th>
            </tr>
          </thead>
        )}
        <tbody>
          {data.map(x => (
            <OfficialCard
              name={x.name}
              title={x.officeName}
              party={x.party}
              address={x.address}
              phone={x.phones}
              photo={x.photoUrl}
              website={x.urls}
              key={x.name}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default People;
