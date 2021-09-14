import styles from './Elections.module.css';
import ElectionCard from './ElectionCard';

const Elections = props => {
  const data = props.data;
  return (
    <div className={styles.elections}>
      <div className={styles.content}>
        <h1>Upcoming Elections</h1>
        {!data && (
          <p>
            The Google Civic API has no upcoming election data for your address.
            Check with local sources to find more information. Election data is
            usually available around 4 weeks before an election.
          </p>
        )}
        <table className={styles.table}>
          <thead className={styles.head}>
            <tr>
              <th>Election</th>
              <th>Election Date</th>
              <th>Polling Location</th>
              <th>Contests</th>
            </tr>
          </thead>
          <tbody>
            <ElectionCard data={props.data} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Elections;
