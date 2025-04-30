import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch.js";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");

  if (loading) return (
    <div className="fp">
      {[...Array(4)].map((_, i) => (
        <div className="fpItem" key={`skeleton-${i}`}>
          <div className="fpImg skeleton"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>
      ))}
    </div>
  );

  if (error) return <div className="error">Error loading featured properties: {error.message}</div>;

  return (
    <div className="fp">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="fpItem" key={item.id}>
            <img
              src={item.photos?.[0] || "https://via.placeholder.com/300"}
              alt={item.name}
              className="fpImg"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300";
              }}
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating && (
              <div className="fpRating">
                <button>{item.rating}</button>
                <span>
                  {item.rating >= 4.5 ? "Excellent" : 
                   item.rating >= 3.5 ? "Good" : 
                   item.rating >= 2.5 ? "Average" : "Poor"}
                </span>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="no-properties">No featured properties available</div>
      )}
    </div>
  );
};

export default FeaturedProperties;