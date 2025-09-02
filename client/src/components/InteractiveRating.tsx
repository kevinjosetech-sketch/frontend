import { useState } from 'react';

interface InteractiveRatingProps {
  initialScore: number;
  onRate?: (rating: number) => void;
}

export default function InteractiveRating({ initialScore, onRate }: InteractiveRatingProps) {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [isRating, setIsRating] = useState(false);

  const handleStarClick = (rating: number) => {
    setUserRating(rating);
    setIsRating(false);
    if (onRate) {
      onRate(rating);
    }
  };

  const handleStarHover = (rating: number) => {
    if (isRating) {
      setHoveredRating(rating);
    }
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const displayRating = hoveredRating || userRating || 0;
  const maxStars = 10;

  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border/50">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-sm font-medium text-card-foreground">
          {userRating ? 'Your Rating' : 'Rate this movie'}
        </div>
        {userRating && (
          <div className="text-xs text-muted-foreground">
            Thanks for rating!
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <div 
          className="flex gap-1"
          onMouseLeave={handleMouseLeave}
        >
          {Array.from({ length: maxStars }, (_, i) => {
            const starValue = i + 1;
            const isFilled = starValue <= displayRating;
            const isHovered = hoveredRating !== null && starValue <= hoveredRating;
            
            return (
              <button
                key={i}
                onClick={() => {
                  if (!isRating) {
                    setIsRating(true);
                  } else {
                    handleStarClick(starValue);
                  }
                }}
                onMouseEnter={() => handleStarHover(starValue)}
                className={`text-lg transition-all duration-200 transform hover:scale-110 ${
                  isFilled || isHovered 
                    ? 'text-yellow-400 hover:text-yellow-300' 
                    : 'text-muted-foreground hover:text-yellow-500'
                } ${isRating ? 'cursor-pointer' : ''}`}
                data-testid={`star-${starValue}`}
              >
                <i className={`fas fa-star`}></i>
              </button>
            );
          })}
        </div>
        
        <div className="ml-2 text-sm">
          {isRating && hoveredRating ? (
            <span className="text-accent font-medium">{hoveredRating}/10</span>
          ) : userRating ? (
            <span className="text-yellow-400 font-medium">{userRating}/10</span>
          ) : (
            <button 
              onClick={() => setIsRating(true)}
              className="text-accent hover:text-accent/80 font-medium transition-colors"
              data-testid="button-start-rating"
            >
              Click to rate
            </button>
          )}
        </div>
      </div>
      
      {isRating && (
        <div className="mt-2 text-xs text-muted-foreground">
          Click a star to submit your rating
        </div>
      )}
    </div>
  );
}