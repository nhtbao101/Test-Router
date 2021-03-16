import React from "react";
import { Row, Col } from "antd";
import "./index.css";

import data from "../../data.json";

import Items from "../detailNew";

function News(props) {
  // console.log("data", data, data[0].description);

  return (
    <div className="container__news">
      <div className="title_news">News</div>
      <Row justify="center">
        {data.map((item, key) => (
          <Col span={6} key={key}>
            {/* <div className="img_g">
                <img src={Images["g" + key]} />
                <div className="name">{item.name}</div>
                <p>{item.description}</p>
              </div> */}
            <Items
              key={key}
              index={item.id}
              img={item.img}
              name={item.name}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;
