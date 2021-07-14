import './App.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Home from './components/Layout/Home';
import { Route, Switch } from 'react-router-dom';
import Result from './components/Result';
import MainNav from './components/Layout/MainNav';

const REPRESENT_API_KEY = process.env.REACT_APP_REPRESENT_API_KEY;

function App() {
  const [officialData, setOfficialData] = useState({ data: null });
  const history = useHistory();
  const getRepresentation = async address => {
    const userAddress = address.formatted_address;
    const response = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${userAddress}&key=${REPRESENT_API_KEY}`
    );
    const results = await response.json();
    console.log(results);
    setOfficialData({ data: results });
    history.push('/result');
  };

  useEffect(() => {
    console.log(officialData);
  }, [officialData]);

  return (
    <>
      <MainNav />
      <Switch>
        <Route path="/result" exact>
          <Result officials={officialData} />
        </Route>
        <Route path="/">
          <Home getRep={getRepresentation} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
