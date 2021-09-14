import styles from './App.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Home from './components/Layout/Home';
import { Route, Switch } from 'react-router-dom';
import People from './components/Layout/People';
import Elections from './components/Layout/Elections';
import MainNav from './components/UI/MainNav';

const REPRESENT_API_KEY = process.env.REACT_APP_REPRESENT_API_KEY;

function App() {
  const [officialData, setOfficialData] = useState({
    offices: [],
    officials: [],
  });
  const [electionData, setElectionData] = useState({
    election: [],
    pollingLocations: [],
    contests: [],
  });
  const [showElections, setShowElections] = useState(false);
  const history = useHistory();
  const getRepData = async address => {
    const userAddress = address.formatted_address;
    const repResponse = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${userAddress}&key=${REPRESENT_API_KEY}`
    );
    const { offices, officials } = await repResponse.json();
    setOfficialData({ offices, officials });
    history.push('/people');
  };
  const getElectionData = async address => {
    const userAddress = address.formatted_address;
    const electionResponse = await fetch(
      `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${userAddress}&returnAllAvailableData=true&key=${REPRESENT_API_KEY}`
    );
    const { election, pollingLocations, contests } =
      await electionResponse.json();
    setElectionData({ election, pollingLocations, contests });
    setShowElections(true);
  };

  return (
    <div className={styles.app}>
      <MainNav showElections={showElections} />
      <Switch>
        <Route path="/people" exact>
          <People
            offices={officialData.offices}
            officials={officialData.officials}
          />
        </Route>
        <Route path="/elections" exact>
          <Elections data={electionData} />
        </Route>
        <Route path="/" exact>
          <Home getRep={getRepData} getElec={getElectionData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
