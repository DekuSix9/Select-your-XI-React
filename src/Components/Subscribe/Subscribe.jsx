const Subscribe = () => {
    return (
        <div className="flex justify-center items-center  p-4">
            <div className="relative w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-orange-100 opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-xl font-semibold text-gray-900">Subscribe to our Newsletter</h2>
                    <p className="text-gray-600 mt-2">Get the latest updates and news right in your inbox!</p>
                    <form className="mt-4 flex items-center">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button 
                            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium rounded-r-md hover:opacity-90"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
