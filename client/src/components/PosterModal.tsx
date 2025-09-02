import highResPosterUrl from '@assets/image_1756800156051.png';

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
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={handleBackdropClick}
      data-testid="poster-modal"
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden animate-modal-slide-in flex">
        {/* Left side - Poster Image */}
        <div className="flex-shrink-0 w-1/2 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 p-1">
          <div className="w-full h-full bg-black rounded-lg overflow-hidden">
            <img 
              src={highResPosterUrl}
              alt={`${movieData.Title} high resolution poster`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Right side - Info Panel */}
        <div className="flex-1 p-6 bg-white dark:bg-gray-900 overflow-y-auto">
          {/* Header with close button */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Info</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
              data-testid="close-poster-modal"
            >
              ×
            </button>
          </div>
          
          {/* Lock icon */}
          <div className="flex justify-end mb-4">
            <i className="fas fa-lock text-gray-400 text-xl"></i>
          </div>
          
          {/* Primary status */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-900 dark:text-white font-medium">Primary?</span>
              <i className="fas fa-check text-green-500"></i>
            </div>
          </div>
          
          {/* Added By */}
          <div className="mb-6">
            <h3 className="text-gray-900 dark:text-white font-medium mb-2">Added By</h3>
            <p className="text-gray-700 dark:text-gray-300">santlucas</p>
          </div>
          
          {/* Size */}
          <div className="mb-6">
            <h3 className="text-gray-900 dark:text-white font-medium mb-2">Size</h3>
            <p className="text-gray-700 dark:text-gray-300">1000x1500</p>
          </div>
          
          {/* Language */}
          <div className="mb-6">
            <h3 className="text-gray-900 dark:text-white font-medium mb-2">Language</h3>
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white appearance-none pr-10">
                <option>English</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>
          
          {/* Tagged People */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-900 dark:text-white font-medium">Tagged People</h3>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <i className="fas fa-plus text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-3">
              {taggedPeople.map((person, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                  <span className="text-gray-900 dark:text-white font-medium flex-1">{person.name}</span>
                  {person.verified && (
                    <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Button */}
          <div className="flex justify-end">
            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}