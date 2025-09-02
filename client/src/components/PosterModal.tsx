interface PosterModalProps {
  movieData: {
    Title: string;
    Year: string;
    Poster: string;
  };
  onClose: () => void;
}

export default function PosterModal({ movieData, onClose }: PosterModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const taggedPeople = [
    { name: 'Zoe Saldaña', verified: true },
    { name: 'Chris Pratt', verified: true }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fade-in"
      onClick={handleBackdropClick}
      data-testid="poster-modal"
    >
      <div className="relative max-w-4xl w-full mx-4 animate-modal-slide-in" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-red-400 text-2xl transition-all duration-300 hover:scale-110 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
          data-testid="close-poster-modal"
        >
          <i className="fas fa-times"></i>
        </button>
        
        <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
          {/* Poster Image Display */}
          <div className="aspect-video bg-black flex items-center justify-center relative">
            <img 
              src={movieData.Poster}
              alt={`${movieData.Title} poster`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Movie Info Section */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-card-foreground">
                  {movieData.Title} - High Resolution Poster
                </h3>
                <p className="text-muted-foreground mt-1">
                  1000x1500 • Added by santlucas
                </p>
              </div>
              <div className="flex gap-2">
                <button className="text-muted-foreground hover:text-accent transition-colors">
                  <i className="fas fa-share text-lg"></i>
                </button>
                <button className="text-muted-foreground hover:text-red-500 transition-colors">
                  <i className="fas fa-heart text-lg"></i>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Status:</span>
                <p className="text-card-foreground font-medium">Primary ✓</p>
              </div>
              <div>
                <span className="text-muted-foreground">Language:</span>
                <p className="text-card-foreground font-medium">English</p>
              </div>
              <div>
                <span className="text-muted-foreground">Tagged:</span>
                <p className="text-card-foreground font-medium">Zoe Saldaña, Chris Pratt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}