import React from "react";
import { Col, Row } from "antd";
import data from "../../data.json";
import Images from "../../contants/Image";

function Detail({ props, match }) {
  const params = match.params;
  //   const { img, name, description } = props;
  console.log("paramm", match);
  console.log(props);
  return (
    <div className="container__news">
      <div className="title_news">Girl Detail</div>
      <Row justify="center">
        {data.map((item, key) => {
          if (item.id == match.params.slug) {
            return (
              <Col span={12}>
                <img src={Images["g" + key]} />
                <p>{item.name}</p>
                <p>{item.description}</p>
              </Col>
            );
          }
        })}
      </Row>
    </div>
  );
}

export default Detail;
