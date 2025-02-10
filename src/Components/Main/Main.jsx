/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MainData from "./MainData";

const Main = ({ setCoins, claimCoins }) => {
  const [players, setPlayers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [availablePlayers, setAvailablePlayers] = useState([]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.error("Error loading players:", error));
  }, []);

  const handleAvailablePlayer = (selectedPlayer) => {
    if (availablePlayers.length >= 6) {
      alert("You can only select up to 6 players!");
      return;
    }

    if (!availablePlayers.find(player => player.playerId === selectedPlayer.playerId)) {
      if (claimCoins >= selectedPlayer.biddingPrice) {
        setCoins(claimCoins - selectedPlayer.biddingPrice);
        setAvailablePlayers([...availablePlayers, selectedPlayer]);
      } else {
        alert("Insufficient coins to select this player!");
      }
    }
  };

  const removePlayer = (playerId) => {
    setAvailablePlayers(availablePlayers.filter(player => player.playerId !== playerId));
  };

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Available Players</h1>
        <div className="space-x-10">
          <button
            onClick={toggleVisibility}
            className="px-4 py-2 rounded-lg border-2 border-gray-100 bg-[#E7FE29] text-black font-semibold hover:bg-[#d6e726]">
            {isVisible ? 'Hide Players' : 'Available'} ({availablePlayers.length}/6)
          </button>

          <button className="px-4 py-2 rounded-lg border-2 border-gray-100 bg-gray-200 text-black hover:bg-gray-400">
            Selected ({availablePlayers.length}/6)
          </button>
        </div>
      </div>

      {/* Available Players List */}
      <div className={`h-96 bg-white overflow-y-auto ${isVisible ? 'block' : 'hidden'}`}>
        {availablePlayers.map((player) => (
          <div key={player.playerId} className="flex items-center p-4 border rounded-lg shadow-md bg-white w-full">
            <div className="w-12 h-12 bg-gray-200 rounded-full">
              <img src={player.image} alt={player.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{player.name}</h3>
              <p className="text-sm text-gray-500">{player.role}</p>
            </div>
            <button onClick={() => removePlayer(player.playerId)} className="text-red-500 hover:text-red-700">
              🗑️
            </button>
          </div>
        ))}
      </div>

      {/* Players List */}
      <div className="grid grid-cols-3 gap-10">
        {players.length > 0 ? (
          players.map((player) => (
            <MainData key={player.playerId} handleAvailablePlayer={handleAvailablePlayer} player={player} />
          ))
        ) : (
          <p>Loading players...</p>
        )}
      </div>
    </div>
  );
};


export default Main;
