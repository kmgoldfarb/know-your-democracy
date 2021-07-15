import styles from './App.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Home from './components/Layout/Home';
import { Route, Switch } from 'react-router-dom';
import People from './components/Layout/People';
import MainNav from './components/Layout/MainNav';

const REPRESENT_API_KEY = process.env.REACT_APP_REPRESENT_API_KEY;

function App() {
  const [officialData, setOfficialData] = useState({
    offices: [],
    officials: [],
  });
  const history = useHistory();
  const getRepresentation = async address => {
    const userAddress = address.formatted_address;
    const response = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${userAddress}&key=${REPRESENT_API_KEY}`
    );
    const { offices, officials } = await response.json();
    setOfficialData({ offices, officials });
    history.push('/people');
  };

  return (
    <div className={styles.app}>
      <MainNav />
      <Switch>
        <Route path="/people" exact>
          <People
            offices={officialData.offices}
            officials={officialData.officials}
          />
        </Route>
        <Route path="/">
          <Home getRep={getRepresentation} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
