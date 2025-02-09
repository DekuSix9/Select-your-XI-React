/* eslint-disable react/prop-types */
import BannerImg from '../../assets/image/banner-main.png';

const Banner = ({ handleCoinClaims }) => {
  return (
    <div className="relative flex items-center justify-center top-10 left-32 w-[80%] h-[545px] 
        md:h-[400px] lg:h-[450px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl 
        p-6 md:p-10 shadow-lg">
      
      <div className="absolute inset-0 bg-black opacity-80 rounded-2xl"></div>

      <div className="relative text-center text-white">
        <img src={BannerImg} alt="Cricket Logo" className="mx-auto w-24 md:w-32" />
        <h1 className="text-xl md:text-3xl font-bold mt-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-sm md:text-lg mt-2">Beyond Boundaries Beyond Limits</p>
        <button 
          onClick={handleCoinClaims} 
          className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg
          shadow-md hover:bg-yellow-500 transition-all"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
