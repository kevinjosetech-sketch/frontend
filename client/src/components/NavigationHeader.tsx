export default function NavigationHeader() {
  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50" data-testid="navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <img 
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                alt="TMDB" 
                className="h-8 w-auto" 
                data-testid="logo"
              />
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-primary-foreground hover:text-gray-200 font-medium transition-colors" data-testid="nav-movies">Movies</a>
              <a href="#" className="text-primary-foreground hover:text-gray-200 font-medium transition-colors" data-testid="nav-tv-shows">TV Shows</a>
              <a href="#" className="text-primary-foreground hover:text-gray-200 font-medium transition-colors" data-testid="nav-people">People</a>
              <a href="#" className="text-primary-foreground hover:text-gray-200 font-medium transition-colors" data-testid="nav-more">More</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-primary-foreground hover:text-gray-200 transition-colors" data-testid="button-search">
              <i className="fas fa-search text-lg"></i>
            </button>
            <button className="text-primary-foreground hover:text-gray-200 transition-colors" data-testid="button-language">
              <span className="font-medium">EN</span>
            </button>
            <button className="text-primary-foreground hover:text-gray-200 transition-colors" data-testid="button-login">
              <span className="font-medium">Login</span>
            </button>
            <button className="text-primary-foreground hover:text-gray-200 transition-colors" data-testid="button-join">
              <span className="font-medium">Join TMDB</span>
            </button>
            <button className="md:hidden text-primary-foreground" data-testid="button-mobile-menu">
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}