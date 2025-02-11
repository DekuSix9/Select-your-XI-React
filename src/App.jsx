import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import { useState } from 'react';
import Main from './Components/Main/Main';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {
  const [claimCoins, setCoins] = useState(0);

  const handleCoinClaims = () => {
    setCoins(claimCoins + 6000);
  };

  return (
    <>
      <Header claimCoins={claimCoins} />
      <Banner handleCoinClaims={handleCoinClaims} />
      <Main setCoins={setCoins} claimCoins={claimCoins} />
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}


export default App;
