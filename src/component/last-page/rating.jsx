import { FaStar } from "react-icons/fa";

const RatingComponent = () => {
  const totalReviews = 834;
  const ratings = [
    { stars: 5, count: 600 },
    { stars: 4, count: 150 },
    { stars: 3, count: 50 },
    { stars: 2, count: 20 },
    { stars: 1, count: 14 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg flex items-start justify-between w-full max-w-3xl mx-auto">
      {/* Left Section: Overall Rating */}
      <div className="w-1/3 items-start">
        <div className="flex items-center space-x-2">
          <img src="star-badge.png" alt="Star Badge" className="w-6 h-6" />
          <h2 className="text-lg font-bold">Overall rating</h2>
        </div>
        <p className="text-gray-600 text-sm">{totalReviews} Reviews</p>

        {/* Star Display */}
        <div className="flex space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 text-lg" />
          ))}
        </div>
      </div>

      {/* Right Section: Rating Breakdown */}
      <div className="w-2/3 space-y-2">
        {ratings.map((rating, index) => (
          <div key={index} className="flex items-center space-x-2 w-full">
            <span className="text-xs w-10 text-right">{rating.stars} stars</span>
            <div className="w-full h-2 bg-gray-200 rounded-lg">
              <div
                className="h-full bg-blue-500 rounded-lg"
                style={{ width: `${(rating.count / totalReviews) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
