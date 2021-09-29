import React from "react";
import "./SkillBar.scss";
export default function SkillBar() {
  return (
    <div>
      <div class="skill-wrapper">
        <div class="progress-container progress-danger">
          <div class="circle text-center">
            <div class="mask"></div>
            <div class="mask text-blue"></div>
          </div>

          <div class="inset">
            <div class="numbers"></div>
          </div>
        </div>

        <div class="skill-progress">
          <div class="circle">
            <div class="mask"></div>
            <div class="mask"></div>
          </div>
          <div class="inset">
            <div class="numbers"></div>
          </div>
        </div>

        <div class="skill-progress">
          <div class="circle">
            <div class="mask"></div>
            <div class="mask"></div>
          </div>
          <div class="inset">
            <div class="numbers"></div>
          </div>
        </div>

        <div class="skill-progress">
          <div class="circle">
            <div class="mask"></div>
            <div class="mask"></div>
          </div>
          <div class="inset">
            <div class="numbers"></div>
          </div>
        </div>

        <div class="skill-progress">
          <div class="circle">
            <div class="mask"></div>
            <div class="mask"></div>
          </div>
          <div class="inset">
            <div class="numbers"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
