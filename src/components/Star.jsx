
function Star({ star = 0, max = 5 }) {
    
  const filledStars = Math.min(star, max); // ensure max stars
  const emptyStars = max - filledStars;

  return (
    <div className="flex items-center gap-1">
      {/* Filled Stars */}
      {[...Array(filledStars)].map((_, i) => (
        <svg
          key={`filled-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FACC15" // yellow color
          className="w-5 h-5"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896l-7.336 3.874 1.402-8.173L.132 9.21l8.2-1.192z" />
        </svg>
      ))}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FACC15"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896l-7.336 3.874 1.402-8.173L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
}

export default Star;
