import OfficialCard from './Layout/OfficialCard';

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

function Result({ offices, officials }) {
  const data = getIndivOfficials(officials, offices);
  console.log(data[4]);
  return (
    <>
      <h1>Results here</h1>
      {data.map(x => {
        <img src={x.photoUrl}></img>;
      })}
    </>
  );
}

export default Result;
