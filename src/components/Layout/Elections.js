import styles from './Elections.module.css';

const Elections = ({ pollingLocations, contests }) => {
  console.log(pollingLocations, contests);

  return (
    <div className={styles.elections}>
      <div className={styles.content}>
        <h1>Upcoming Elections</h1>
        {(!pollingLocations || !contests) && (
          <p>
            The Google Civic API has no upcoming election data for your address.
            Check with local sources to find more information. Election data is
            usually available 4 to 6 weeks before an election.
          </p>
        )}
      </div>
    </div>
  );
};

export default Elections;
