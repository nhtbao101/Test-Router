import React from "react";
import { Row, Col } from "antd";
// import "./index.css";
import Images from "../../contants/Image";
import data from "../../data.json";
import Item from "antd/lib/list/Item";
import { Link } from "react-router-dom";

function Items(props) {
  // console.log("data", data, data[0].description);
  const { img, name, description, index } = props;

  return (
    <>
      {/* // <div className="container__news"> */}
      {/* <div className="title_news">News</div> */}
      {/* <Row justify="center"> */}
      <div className="img_g">
        <Link to={"/detail/" + index}>
          <img src={Images["g" + index]} />
          <div className="name">{name}</div>
          <p>{description}</p>
        </Link>
      </div>
      {/* </Row> */}
      {/* </div> */}
    </>
  );
}

export default Items;
