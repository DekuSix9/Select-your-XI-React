import { useEffect, useState } from "react";
import MainData from "./MainData";

const Main = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.error("Error loading players:", error));
  }, []);

  return (
    <div className="mt-28 max-w-7xl mx-auto">
     
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Available Players</h1>
        <div className="space-x-10">
          <button className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-[#E7FE29] 
                     text-black font-semibold shadow-md hover:bg-[#d6e726] transition">
            Available
          </button>

          <button className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-gray-300 text-black 
                     font-semibold shadow-md hover:bg-gray-400 transition">
            Selected
          </button>
        </div>
      </div>

      {/* Players List */}
      <div className=" grid grid-cols-3 gap-10">    
        {players.length > 0 ? (
          players.map(player => <MainData key={player.playerId} player={player} />)
        ) : (
          <p>Loading players...</p>
        )}
      </div>
    </div>
  );
};

export default Main;
