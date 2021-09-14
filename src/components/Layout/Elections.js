import styles from './Elections.module.css';
import ElectionCard from './ElectionCard';

const Elections = props => {
  const data = props.data;
  console.log(data);
  return (
    <div className={styles.elections}>
      <div className={styles.content}>
        <h1>Upcoming Elections</h1>
        {data.pollingLocations && (
          <table className={styles.table}>
            <thead className={styles.head}>
              <tr>
                <th>Election</th>
                <th>Election Date</th>
                <th>Polling Location</th>
              </tr>
            </thead>

            <tbody>
              <ElectionCard data={props.data} />
            </tbody>
          </table>
        )}
        {!data.pollingLocations && (
          <p>
            The Google Civic API has no elections for your address. Please check
            official local sources for more up to date information. Election
            information is usually available a couple of weeks before the
            election.
          </p>
        )}
      </div>
    </div>
  );
};

export default Elections;
