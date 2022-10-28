import useFetch from "../../hook/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=danang, hanoi,hcm"
  );
  console.log(data);
  return (

    <div className="featured">
      {loading ? (
        "loading please wait"
      ) : (
        <>
      <div className="featuredItem">
        <img
          src={require('./img/hcm.jpg')}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hồ Chí Minh</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={require('./img/hn.jpg')}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>
              Hà Nội
          </h1>

        </div>
      </div>
      <div className="featuredItem">
        <img
          src={require('./img/dn.jpg')}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Đà Nẵng</h1>
        </div>
      </div>
      </>)}
    </div>
  );
}


export default Featured;
