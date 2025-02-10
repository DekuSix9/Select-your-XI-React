/* eslint-disable react/prop-types */
const MainData = ({ player }) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice } = player;
    
    return (
      <div className="mt-10 max-w-7xl mx-auto  ">
        <div className="border border-gray-100 rounded-lg shadow-white p-4 bg-white">
          <div className="w-[376px] h-[240px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">
           
              <img
                src={image}
                alt={name}
               
              />
            
          </div>
          <h3 className="text-lg font-semibold mt-2">{name}</h3>
          <p className="text-gray-600 flex items-center gap-2">
            <span role="img" aria-label="flag">🏳</span> {country}
          </p>
          <span className="inline-block bg-gray-300 text-gray-800 text-sm px-2 py-1 rounded-full mt-1">{role}</span>
          <p className="text-gray-700 mt-2">
            <strong>Batting Type:</strong> {battingType}
          </p>
          <p className="text-gray-700">
            <strong>Bowling Type:</strong> {bowlingType}
          </p>
          <p className="text-gray-800 font-semibold mt-2">
            Price: ${biddingPrice}
          </p>
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Choose Player
          </button>
        </div>
      </div>
    );
  };
  
  export default MainData;