import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} từ trung tâm</span>
        <span className="siTaxiOp">Miễn phí đưa đón sân bay</span>
        <span className="siSubtitle">
          Căn hộ với tiện nghi đầy đủ
        </span>
        <span className="siFeatures">
        {item.desc}
        </span>
        <span className="siCancelOp">Hủy phòng miễn phí </span>
        <span className="siCancelOpSubtitle">
        Bạn có thể hủy sau, vì vậy hãy chốt giá ưu đãi này ngay hôm nay!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Rất tốt</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
        <span className="fpPriceDiscount">{item.discountPrice} VNĐ</span>
          <span className="siPrice">{item.cheapestPrice} VNĐ</span>
          <span className="siTaxOp">Bao gồm thuế và phí</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Đặt ngay!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
