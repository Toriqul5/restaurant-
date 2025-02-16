function Footer() {
    return (
      <footer className="bg-white text-black py-6 border-t">
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center md:text-left">
            {/* About Section */}
            <div>
              <h3 className="font-bold">About</h3>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:underline">About MyFeedback</a></li>
                <li><a href="#" className="hover:underline">Investor Relations</a></li>
              </ul>
            </div>
  
            {/* MyFeedback Links */}
            <div>
              <h3 className="font-bold">MyFeedback</h3>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:underline">MyFeedback for Business</a></li>
                <li><a href="#" className="hover:underline">Collections</a></li>
                <li><a href="#" className="hover:underline">Talk</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">MyFeedback Blog</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
                <li><a href="#" className="hover:underline">Developers</a></li>
              </ul>
            </div>
  
            {/* Language & Country Dropdowns */}
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Languages</h3>
                <button className="mt-2 flex items-center space-x-1">
                  <span>English</span>
                  <span>▼</span>
                </button>
              </div>
              <div>
                <h3 className="font-bold">Countries</h3>
                <button className="mt-2 flex items-center space-x-1">
                  <span>Singapore</span>
                  <span>▼</span>
                </button>
              </div>
            </div>
          </div>
  
          {/* Footer Copyright */}
          <div className="mt-6 text-center text-xs text-gray-600">
            Copyright © Septembre 2023 MyFeedback, designed by Scott
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
  