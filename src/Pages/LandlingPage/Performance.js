import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import bigChartData from "variables/charts.js";
export default function Performance() {
  return (
    <div>
      <section className="section section-lg">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path4.png").default}
        />
        <img
          alt="..."
          className="path2"
          src={require("assets/img/path2.png").default}
        />
      </section>
      <Col md="12">
        <Card className="card-chart card-plain">
          <CardHeader>
            <Row>
              <Col className="text-left" sm="6">
                <hr className="line-info" />
                <h5 className="card-category">Total Investments</h5>
                <CardTitle tag="h2">Performance</CardTitle>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <Line data={bigChartData.data} options={bigChartData.options} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}
