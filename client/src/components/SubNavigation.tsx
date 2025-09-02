interface SubNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function SubNavigation({ activeTab, onTabChange }: SubNavigationProps) {
  return (
    <div className="bg-background border-b border-border" data-testid="sub-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          <button 
            onClick={() => onTabChange('overview')}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap hover:text-foreground transition-colors ${
              activeTab === 'overview' ? 'border-accent text-accent' : 'border-transparent text-muted-foreground'
            }`}
            data-testid="tab-overview">
            Overview
          </button>
          <button 
            onClick={() => onTabChange('media')}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap hover:text-foreground transition-colors ${
              activeTab === 'media' ? 'border-accent text-accent' : 'border-transparent text-muted-foreground'
            }`}
            data-testid="tab-media">
            Media
          </button>
          <button 
            onClick={() => onTabChange('fandom')}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap hover:text-foreground transition-colors ${
              activeTab === 'fandom' ? 'border-accent text-accent' : 'border-transparent text-muted-foreground'
            }`}
            data-testid="tab-fandom">
            Fandom
          </button>
          <button 
            onClick={() => onTabChange('share')}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap hover:text-foreground transition-colors ${
              activeTab === 'share' ? 'border-accent text-accent' : 'border-transparent text-muted-foreground'
            }`}
            data-testid="tab-share">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}