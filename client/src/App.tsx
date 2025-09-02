import { useState, useEffect } from "react";
import NavigationHeader from "./components/NavigationHeader";
import SubNavigation from "./components/SubNavigation";
import HeroSection from "./components/HeroSection";
import CastSection from "./components/CastSection";
import TrailerModal from "./components/TrailerModal";

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

interface CastMember {
  name: string;
  character: string;
  imageId: string;
}

function App() {
  const [movieData, setMovieData] = useState<MovieData>({} as MovieData);
  const [activeTab, setActiveTab] = useState("overview");
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock cast data based on real actors from the movie
  const mainCast: CastMember[] = [
    { name: 'Chris Pratt', character: 'Peter Quill / Star-Lord', imageId: '1506794778648' },
    { name: 'Zoe Saldaña', character: 'Gamora', imageId: '1494790108755' },
    { name: 'Dave Bautista', character: 'Drax', imageId: '1507003211169' },
    { name: 'Bradley Cooper', character: 'Rocket (voice)', imageId: '1472099645262' },
    { name: 'Vin Diesel', character: 'Groot (voice)', imageId: '1500648767336' },
    { name: 'Michael Rooker', character: 'Yondu', imageId: '1519244703547' }
  ];

  const fetchMovieData = async () => {
    try {
      const response = await fetch('/api/movie/tt3896198');
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovieData(data);
      } else {
        throw new Error('Movie not found');
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
      // Fallback data if API fails
      setMovieData({
        Title: "Guardians of the Galaxy Vol. 2",
        Year: "2017",
        Rated: "PG-13",
        Released: "05 May 2017",
        Runtime: "136 min",
        Genre: "Action, Adventure, Comedy",
        Director: "James Gunn",
        Writer: "James Gunn, Dan Abnett, Andy Lanning",
        Actors: "Chris Pratt, Zoe Saldaña, Dave Bautista",
        Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
        imdbRating: "7.6",
        imdbVotes: "806,353",
        Poster: "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const addScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    // Observe elements for animation
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });
    }, 100);
  };

  useEffect(() => {
    fetchMovieData();
    addScrollAnimations();
    
    // Add smooth scrolling to document
    document.documentElement.classList.add('smooth-scroll');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationHeader />
      <SubNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-spinner fa-spin text-4xl text-accent mb-4"></i>
            <p className="text-muted-foreground">Loading movie data...</p>
          </div>
        </div>
      ) : (
        <div>
          <HeroSection 
            movieData={movieData} 
            onShowTrailer={() => setShowTrailerModal(true)}
            data-testid="hero-section"
          />
          
          {activeTab === 'overview' && (
            <CastSection 
              cast={mainCast}
              data-testid="cast-section"
            />
          )}
          
          {activeTab === 'media' && (
            <div className="py-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Media Content</h2>
              <p className="text-muted-foreground">Photos, videos, and other media content would be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'fandom' && (
            <div className="py-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Fandom</h2>
              <p className="text-muted-foreground">Community discussions and fan content would be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'share' && (
            <div className="py-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Share</h2>
              <p className="text-muted-foreground">Social sharing options would be displayed here.</p>
            </div>
          )}
        </div>
      )}
      
      {showTrailerModal && (
        <TrailerModal 
          movieData={movieData}
          onClose={() => setShowTrailerModal(false)}
          data-testid="trailer-modal"
        />
      )}
    </div>
  );
}

export default App;