
import footerimg from '../../assets/image/logo-footer.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6 mt-12  ">
            <div className=' flex items-center justify-center mt-8'>
               <img src={footerimg}></img>
                </div> 
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start mt-18">
               
               
                
                <div className="mb-6 md:mb-0 max-w-sm">
                    <h3 className="text-lg font-semibold">About Us</h3>
                    <p className="text-gray-400 mt-2">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>

              
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="text-gray-400 mt-2 space-y-1">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                
                <div className="max-w-sm">
                    <h3 className="text-lg font-semibold">Subscribe</h3>
                    <p className="text-gray-400 mt-2">Subscribe to our newsletter for the latest updates.</p>
                    <div className="mt-4 flex">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium rounded-r-md hover:opacity-90">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            
           
            <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
                &copy; 2024 Your Company. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
