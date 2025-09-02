interface MovieData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
  imdbVotes: string;
  Poster: string;
}

interface TrailerModalProps {
  movieData: MovieData;
  onClose: () => void;
}

export default function TrailerModal({ movieData, onClose }: TrailerModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fade-in"
      onClick={onClose}
      data-testid="trailer-modal-overlay">
      <div className="relative max-w-4xl w-full mx-4 animate-modal-slide-in" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          className="absolute -top-12 right-0 text-white hover:text-red-400 text-2xl transition-all duration-300 hover:scale-110 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
          data-testid="button-close-modal">
          <i className="fas fa-times"></i>
        </button>
        
        <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
          {/* Enhanced Video Preview Section */}
          <div className="aspect-video bg-black flex items-center justify-center relative">
            {/* Movie scene preview background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{backgroundImage: `url('https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`}}
              data-testid="trailer-background">
            </div>
            
            <div className="relative z-10 text-center">
              <button 
                className="bg-accent/20 backdrop-blur-sm border-2 border-accent rounded-full w-20 h-20 flex items-center justify-center hover:bg-accent/30 hover:scale-110 transition-all duration-300 mb-4 animate-pulse"
                data-testid="button-play-video">
                <i className="fas fa-play text-accent text-2xl ml-1"></i>
              </button>
              <div className="animate-slide-in-up">
                <p className="text-white text-lg font-semibold" data-testid="trailer-title">Official Trailer</p>
                <p className="text-gray-300 text-sm" data-testid="trailer-metadata">2:17 • Marvel Studios</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Metadata Section */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-card-foreground" data-testid="modal-movie-title">
                  {movieData.Title} - Official Trailer
                </h3>
                <p className="text-muted-foreground mt-1" data-testid="modal-movie-details">
                  Released {movieData.Released} • {movieData.Runtime}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="text-muted-foreground hover:text-accent transition-colors" data-testid="button-share-trailer">
                  <i className="fas fa-share text-lg"></i>
                </button>
                <button className="text-muted-foreground hover:text-red-500 transition-colors" data-testid="button-like-trailer">
                  <i className="fas fa-heart text-lg"></i>
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {movieData.Genre?.split(', ').map(genre => (
                <span 
                  key={genre}
                  className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                  data-testid={`modal-genre-${genre.toLowerCase().replace(' ', '-')}`}>
                  {genre}
                </span>
              ))}
            </div>
            
            <p className="text-card-foreground" data-testid="modal-plot">{movieData.Plot}</p>
            
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground text-sm font-bold" data-testid="modal-score-mini">
                    {Math.round(parseFloat(movieData.imdbRating) * 10)}%
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">User Score</span>
              </div>
              <div className="text-sm text-muted-foreground" data-testid="imdb-rating">
                <i className="fas fa-star text-yellow-500 mr-1"></i>
                {movieData.imdbRating}/10 ({movieData.imdbVotes} votes)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}