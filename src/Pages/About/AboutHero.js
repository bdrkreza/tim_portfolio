import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  FormText,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
  UncontrolledTooltip,
} from "reactstrap";

export default function AboutHero() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <Container className="align-items-center">
        <Row>
          <Col lg="6" md="6">
            <h1 className="profile-title text-left">Mike Scheinder</h1>
            <h5 className="text-on-back">01</h5>
            <p className="profile-description">
              Offices parties lasting outward nothing age few resolve.
              Impression to discretion understood to we interested he
              excellence. Him remarkably use projection collecting. Going about
              eat forty world has round miles.
            </p>
            <div className="btn-wrapper profile pt-3">
              <Button
                className="btn-icon btn-round"
                color="twitter"
                href="https://twitter.com/creativetim"
                id="tooltip639225725"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip639225725">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/creativetim"
                id="tooltip982846143"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip982846143">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="dribbble"
                href="https://dribbble.com/creativetim"
                id="tooltip951161185"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip951161185">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Card className="card-coin card-plain">
              <CardHeader>
                <img
                  alt="..."
                  className="img-center img-fluid rounded-circle"
                  src={require("assets/img/mike.jpg").default}
                />
                <h4 className="title">Transactions</h4>
              </CardHeader>

              <CardBody>
                <Nav className="nav-tabs-primary justify-content-center" tabs>
                  <NavItem
                    className={
                      "text-xs font-bold uppercase " +
                      (openTab === 1 ? "text-white bg-yellow-900" : null)
                    }
                  >
                    <NavLink
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      href="#pablo"
                    >
                      Wallet
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={
                      "text-xs font-bold uppercase " +
                      (openTab === 2 ? "text-white bg-yellow-900" : null)
                    }
                  >
                    <NavLink
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      href="#pablo"
                    >
                      Send
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={
                      "text-xs font-bold uppercase " +
                      (openTab === 3 ? "text-white bg-yellow-900" : null)
                    }
                  >
                    <NavLink
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      href="#pablo"
                    >
                      News
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent>
                  <TabPane
                    tabId="tab1"
                    className={openTab === 1 ? "block" : "hidden"}
                  >
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">COIN</th>
                          <th className="header">AMOUNT</th>
                          <th className="header">VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>BTC</td>
                          <td>7.342</td>
                          <td>48,870.75 USD</td>
                        </tr>
                        <tr>
                          <td>ETH</td>
                          <td>30.737</td>
                          <td>64,53.30 USD</td>
                        </tr>
                        <tr>
                          <td>XRP</td>
                          <td>19.242</td>
                          <td>18,354.96 USD</td>
                        </tr>
                      </tbody>
                    </Table>
                  </TabPane>
                  <TabPane
                    tabId="tab2"
                    className={openTab === 2 ? "block" : "hidden"}
                  >
                    <Row>
                      <Label sm="3">Pay to</Label>
                      <Col sm="9">
                        <FormGroup>
                          <Input
                            placeholder="e.g. 1Nasd92348hU984353hfid"
                            type="text"
                          />
                          <FormText color="default" tag="span">
                            Please enter a valid address.
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="3">Amount</Label>
                      <Col sm="9">
                        <FormGroup>
                          <Input placeholder="1.587" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      className="btn-simple btn-icon btn-round float-right"
                      color="primary"
                      type="submit"
                    >
                      <i className="tim-icons icon-send" />
                    </Button>
                  </TabPane>
                  <TabPane
                    tabId="tab3"
                    className={openTab === 3 ? "block" : "hidden"}
                  >
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">Latest Crypto News</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Daily: Nexo to Pay on Stable...</td>
                        </tr>
                        <tr>
                          <td>Venezuela Begins Public of Nation...</td>
                        </tr>
                        <tr>
                          <td>PR: BitCanna – Dutch Blockchain...</td>
                        </tr>
                      </tbody>
                    </Table>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
