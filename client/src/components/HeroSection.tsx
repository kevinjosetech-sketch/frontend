import { useState } from 'react';
import CircularProgress from './CircularProgress';
import InteractiveRating from './InteractiveRating';

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

interface HeroSectionProps {
  movieData: MovieData;
  onShowTrailer: () => void;
}

export default function HeroSection({ movieData, onShowTrailer }: HeroSectionProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [starred, setStarred] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);
  
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(13, 37, 63, 0.7), rgba(13, 37, 63, 0.8)), url('${movieData.Poster}')`
  };

  const handleLike = () => {
    setLiked(!liked);
    // Add visual feedback
    const button = document.querySelector('[data-testid="button-favorite"]');
    button?.classList.add('animate-pulse');
    setTimeout(() => button?.classList.remove('animate-pulse'), 600);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    const button = document.querySelector('[data-testid="button-bookmark"]');
    button?.classList.add('animate-bounce');
    setTimeout(() => button?.classList.remove('animate-bounce'), 600);
  };

  const handleStar = () => {
    setStarred(!starred);
    const button = document.querySelector('[data-testid="button-rate"]');
    button?.classList.add('animate-spin');
    setTimeout(() => button?.classList.remove('animate-spin'), 600);
  };

  return (
    <section 
      className="hero-bg min-h-screen flex items-center relative overflow-hidden bg-cover bg-center" 
      style={backgroundStyle}
      data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Movie Poster */}
          <div className="lg:col-span-1 fade-in">
            <div className="relative cursor-pointer group" onClick={() => setShowPosterModal(true)}>
              <img 
                src={movieData.Poster} 
                alt={movieData.Title + ' poster'}
                className="w-full max-w-sm mx-auto lg:mx-0 rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
                data-testid="movie-poster"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <i className="fas fa-expand text-3xl mb-2"></i>
                  <p className="text-sm font-medium">View Full Size</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 hidden lg:block">
                <button 
                  onClick={onShowTrailer} 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                  data-testid="button-play-trailer-desktop">
                  <i className="fas fa-play mr-2"></i>
                  Play Trailer
                </button>
              </div>
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-2 space-y-6 fade-in">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2" data-testid="movie-title">
                {movieData.Title}
                <span className="text-3xl lg:text-4xl text-muted-foreground font-normal">({movieData.Year})</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6" data-testid="movie-metadata">
                <span className="bg-muted px-2 py-1 rounded text-sm font-medium" data-testid="movie-rating">{movieData.Rated}</span>
                <span data-testid="movie-release-date">{movieData.Released}</span>
                <span data-testid="movie-runtime">{movieData.Runtime}</span>
                <div className="flex flex-wrap gap-2">
                  {movieData.Genre?.split(', ').map(genre => (
                    <span 
                      key={genre} 
                      className="text-accent hover:underline cursor-pointer"
                      data-testid={`genre-${genre.toLowerCase().replace(' ', '-')}`}>
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* User Score and Actions */}
              <div className="flex flex-wrap items-start gap-6 mb-6">
                {/* User Score Circle */}
                <div className="flex items-center gap-3">
                  <CircularProgress 
                    score={Math.round(parseFloat(movieData.imdbRating) * 10)} 
                  />
                  <div className="text-sm">
                    <div className="font-semibold" data-testid="text-user">User</div>
                    <div className="text-muted-foreground" data-testid="text-score">Score</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors" data-testid="button-list">
                    <i className="fas fa-list text-lg"></i>
                  </button>
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 transition-all duration-300 ${liked ? 'text-red-500 scale-110' : 'text-muted-foreground hover:text-red-500'}`} 
                    data-testid="button-favorite"
                  >
                    <i className={`${liked ? 'fas' : 'far'} fa-heart text-lg`}></i>
                    {liked && <span className="text-sm font-medium">Liked!</span>}
                  </button>
                  <button 
                    onClick={handleBookmark}
                    className={`flex items-center gap-2 transition-all duration-300 ${bookmarked ? 'text-yellow-500 scale-110' : 'text-muted-foreground hover:text-yellow-500'}`} 
                    data-testid="button-bookmark"
                  >
                    <i className={`${bookmarked ? 'fas' : 'far'} fa-bookmark text-lg`}></i>
                    {bookmarked && <span className="text-sm font-medium">Saved!</span>}
                  </button>
                  <button 
                    onClick={handleStar}
                    className={`flex items-center gap-2 transition-all duration-300 ${starred ? 'text-yellow-400 scale-110' : 'text-muted-foreground hover:text-yellow-400'}`} 
                    data-testid="button-rate"
                  >
                    <i className={`${starred ? 'fas' : 'far'} fa-star text-lg`}></i>
                    {starred && <span className="text-sm font-medium">Rated!</span>}
                  </button>
                </div>

                {/* Play Trailer Button (Mobile) */}
                <button 
                  onClick={onShowTrailer} 
                  className="lg:hidden bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300"
                  data-testid="button-play-trailer-mobile">
                  <i className="fas fa-play mr-2"></i>
                  Play Trailer
                </button>

                {/* Interactive Rating Component */}
                <div className="flex-shrink-0">
                  <InteractiveRating 
                    initialScore={Math.round(parseFloat(movieData.imdbRating) * 10) / 10}
                    onRate={(rating) => console.log(`User rated: ${rating}/10`)}
                  />
                </div>
              </div>

              {/* Tagline/Plot */}
              <div className="space-y-4">
                <p className="text-lg italic text-muted-foreground" data-testid="movie-tagline">
                  Obviously.
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Overview</h3>
                  <p className="text-foreground leading-relaxed" data-testid="movie-plot">
                    {movieData.Plot}
                  </p>
                </div>
              </div>
            </div>

            {/* Crew Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6" data-testid="crew-info">
              <div>
                <h4 className="font-semibold text-foreground" data-testid="director-name">{movieData.Director}</h4>
                <p className="text-sm text-muted-foreground">Director, Writer</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground" data-testid="writer-name">{movieData.Writer?.split(',')[0]}</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Marvel Studios</h4>
                <p className="text-sm text-muted-foreground">Production</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Poster Modal */}
      {showPosterModal && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setShowPosterModal(false)}
          data-testid="poster-modal"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={movieData.Poster}
              alt={movieData.Title + ' poster'}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button 
              onClick={() => setShowPosterModal(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              data-testid="close-poster-modal"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
            <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded-lg p-3">
              <h3 className="font-bold text-lg">{movieData.Title}</h3>
              <p className="text-sm text-gray-300">Click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}