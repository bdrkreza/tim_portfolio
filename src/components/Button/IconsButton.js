import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";
export default function IconsButton() {
  return (
    <div>
      <div className="btn-wrapper profile pt-3">
        <Button
          className="btn-icon   btn-round"
          color="twitter"
          href="https://www.linkedin.com/in/rkreza2020/"
          id="tooltip639225725"
          target="_blank"
        >
          <i className="fab fa-linkedin" />
        </Button>
        <UncontrolledTooltip delay={0} target="tooltip639225725">
          Follow us
        </UncontrolledTooltip>
        <Button
          className="btn-icon btn-round"
          color="facebook"
          href="https://www.facebook.com/bdrkreza"
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
          color="tumblr"
          href="https://github.com/bdrkreza"
          id="tooltip951161185"
          target="_blank"
        >
          <i className="fab fa-github" />
        </Button>
        <UncontrolledTooltip delay={0} target="tooltip951161185">
          Follow us
        </UncontrolledTooltip>

        <Button
          className="btn-icon btn-simple"
          color="success"
          href="https://drive.google.com/file/d/1XI_0wxhumtjt5Ske_XeHf2TC1HPWPmvW/view?usp=sharing"
          id="tooltip951161186"
          target="_blank"
        >
          <i className="fas fa-file-pdf"></i>
        </Button>
        <UncontrolledTooltip delay={0} target="tooltip951161186">
          CV
        </UncontrolledTooltip>
      </div>
    </div>
  );
}
