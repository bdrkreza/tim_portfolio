import React from "react";
// reactstrap components
import { Progress } from "reactstrap";
export default function SkillProgress() {
  return (
    <>
      <div className="progress-container">
        <span className="progress-badge">HTML</span>
        <Progress max="100" value="60">
          <span className="progress-value">50%</span>
        </Progress>
      </div>
      <div className="progress-container progress-primary">
        <span className="progress-badge">CSS</span>
        <Progress max="100" value="40">
          <span className="progress-value">40%</span>
        </Progress>
      </div>
      <div className="progress-container progress-danger">
        <span className="progress-badge">Javascript</span>
        <Progress max="100" value="35">
          <span className="progress-value">35%</span>
        </Progress>
      </div>
      <div className="progress-container progress-success">
        <span className="progress-badge">React js</span>
        <Progress max="100" value="35">
          <span className="progress-value">55%</span>
        </Progress>
      </div>
      <div className="progress-container progress-warning">
        <span className="progress-badge">Redux</span>
        <Progress max="100" value="45">
          <span className="progress-value">45%</span>
        </Progress>
      </div>
      <div className="progress-container progress-success">
        <span className="progress-badge">node js</span>
        <Progress max="100" value="35">
          <span className="progress-value">30%</span>
        </Progress>
      </div>
      <div className="progress-container progress-danger">
        <span className="progress-badge">Express js</span>
        <Progress max="100" value="45">
          <span className="progress-value">45%</span>
        </Progress>
      </div>
      <div className="progress-container  progress-primary">
        <span className="progress-badge">Mongodb</span>
        <Progress max="100" value="45">
          <span className="progress-value">45%</span>
        </Progress>
      </div>
      <div className="progress-container progress-danger">
        <span className="progress-badge">Mongoose</span>
        <Progress max="100" value="45">
          <span className="progress-value">45%</span>
        </Progress>
      </div>
    </>
  );
}
