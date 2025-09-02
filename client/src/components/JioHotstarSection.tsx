interface JioHotstarSectionProps {
  movieTitle: string;
}

export default function JioHotstarSection({ movieTitle }: JioHotstarSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Watch Now on JioHotstar
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Stream {movieTitle} and thousands of other movies & shows
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <i className="fas fa-play text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Watch in 4K Ultra HD</h3>
                <p className="text-gray-300">Experience stunning picture quality</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <i className="fas fa-mobile-alt text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Watch Anywhere</h3>
                <p className="text-gray-300">On TV, mobile, tablet, or computer</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <i className="fas fa-download text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Download & Watch Offline</h3>
                <p className="text-gray-300">Perfect for travel and commutes</p>
              </div>
            </div>
          </div>
          
          {/* Right side - CTA */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="mb-6">
                <img 
                  src="https://logos-world.net/wp-content/uploads/2023/01/JioCinema-Logo.png" 
                  alt="JioHotstar"
                  className="h-12 mx-auto lg:mx-0 mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Start Watching Now</h3>
                <p className="text-gray-200">Join millions of viewers streaming the best content</p>
              </div>
              
              <div className="space-y-4">
                <button 
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  data-testid="button-watch-now"
                >
                  <i className="fas fa-play mr-2"></i>
                  Watch Now - Free Trial
                </button>
                
                <button 
                  className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 border border-white/30"
                  data-testid="button-learn-more"
                >
                  Learn More
                </button>
              </div>
              
              <p className="text-sm text-gray-300 mt-4">
                ₹99/month after free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}