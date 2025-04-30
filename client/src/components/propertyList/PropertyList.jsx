import "./propertyList.css";
import useFetch from "../../hooks/useFetch.js";

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",  
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  ];



  if (loading) return <div className="pList">Loading...</div>;

  if (error) return <div className="pList">Something went wrong!</div>;

  if (!Array.isArray(data) || data.length === 0) {
    return <div className="pList">0 available</div>;
  }

  return (
    <div className="pList">
      {data.map((item, index) => (
        <div className="pListItem" key={index}>
          <img
            src={images[index % images.length]} // Cycle through images safely
            alt={item.type || "property"}
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>{item.type || "Unknown"}</h1>
            <h2>{item.count || 0} {item.type || "property"}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
