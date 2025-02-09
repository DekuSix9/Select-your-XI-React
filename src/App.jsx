import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import { useState } from 'react';

function App() {
  const [claimCoins, setCoins] = useState(0);

  const handleCoinClaims = () => {
    setCoins(claimCoins + 6000);
  };

  return (
    <>
      <Header claimCoins={claimCoins} />
      <Banner handleCoinClaims={handleCoinClaims} />
    </>
  );
}

export default App;
