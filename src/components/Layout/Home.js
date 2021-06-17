import AddressInput from './AddressInput';
import Card from '../UI/Card';

function Home(props) {
  return (
    <Card>
      <h1>Know who represents you!</h1>
      <p>Enter your address below:</p>
      <AddressInput />
    </Card>
  );
}

export default Home;
