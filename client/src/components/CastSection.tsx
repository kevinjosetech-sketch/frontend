interface CastMember {
  name: string;
  character: string;
  imageId: string;
}

interface CastSectionProps {
  cast: CastMember[];
}

export default function CastSection({ cast }: CastSectionProps) {
  return (
    <section className="bg-background py-12 fade-in" data-testid="cast-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-foreground" data-testid="cast-section-title">Top Billed Cast</h2>
          <button className="text-accent hover:text-accent/80 font-medium transition-colors" data-testid="button-view-more-cast">
            View More <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cast.map((actor, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg shadow-md overflow-hidden cast-card-hover"
              data-testid={`cast-card-${index}`}>
              <div className="aspect-[3/4] bg-muted">
                <img 
                  src={actor.imageId} 
                  alt={actor.name}
                  className="w-full h-full object-cover"
                  data-testid={`cast-image-${index}`}
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-card-foreground text-sm truncate" data-testid={`cast-name-${index}`}>
                  {actor.name}
                </h3>
                <p className="text-muted-foreground text-xs mt-1 truncate" data-testid={`cast-character-${index}`}>
                  {actor.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}