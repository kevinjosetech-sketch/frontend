interface CircularProgressProps {
  score: number;
}

export default function CircularProgress({ score }: CircularProgressProps) {
  const circumference = 100;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getStrokeColor = () => {
    if (score >= 70) return 'hsl(142, 76%, 36%)';  // Green
    if (score >= 40) return 'hsl(45, 93%, 47%)';   // Yellow
    return 'hsl(0, 84%, 60%)';  // Red
  };

  return (
    <div className="relative w-16 h-16" data-testid="circular-progress">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        {/* Background circle */}
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="hsl(213, 19%, 18%)"
          strokeWidth="2"
        />
        {/* Progress circle */}
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={getStrokeColor()}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold count-up" data-testid="score-percentage">{score}%</span>
      </div>
    </div>
  );
}