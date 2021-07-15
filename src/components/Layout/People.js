import OfficialCard from './OfficialCard';
import styles from './People.module.css';

/**
 * @typedef {Object} Office
 * @property {string} name
 * @property {string} divisionId
 * @property {string[]} levels
 * @property {number[]} officialIndices
 * @property {string[]} roles
 *
 */

/**
 * @typedef {Object} Official
 * @property {Address[]} address
 * @property {Channel[]} channels
 * @property {string[]} emails
 * @property {string} name
 * @property {string} party
 * @property {string[]} phones
 * @property {string} photoUrl
 * @property {string[]} urls
 *
 */

/**
 * @typedef {Object} Address
 * @property {string} city
 * @property {string} line1
 * @property {string} state
 * @property {string} zip
 *
 */

/**
 * @typedef {Object} Channel
 * @property {string} type
 * @property {string} id
 */

/**
 * @param {Official[]} officials
 * @param {Office[]} offices
 */

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
  return (
    <div className={styles.people}>
      <h1>Get to know them</h1>
      <div className={styles.cardgrid}>
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
      </div>
    </div>
  );
}

export default People;
