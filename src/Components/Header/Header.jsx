/* eslint-disable react/prop-types */
import Profile from '../../assets/image/logo.png';
import Currency from '../../assets/image/Currency.png';

const Header = ({ claimCoins }) => {
  return (
    <header className="flex justify-between max-w-7xl mx-auto mt-4">
      <div>
        <img src={Profile} alt="Profile Logo" />
      </div>

      <div>
        <ul className="flex space-x-12 mr-6 cursor-pointer">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          
          <button   className="flex items-center justify-between border border-gray-300 rounded-lg 
             p-1 w-[130px] h-8 pl-4 text-center font-semibold text-nowrap">
               {claimCoins} Coins 
  <img src={Currency} className="ml-2 w-5 h-5 flex-shrink-0" alt="Currency Icon" />
</button>

        </ul>
      </div>
    </header>
  );
};

export default Header;
