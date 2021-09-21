import React from "react";
import { Button } from "reactstrap";
export default function ProjectTopBar() {
  return (
    <>
      <div class="card mt-3">
        <div class="card-body m-auto">
          <div class="card project_top_header">
            <div className="d-flex align-items-center justify-content-center">
              <Button className=" btn-round" type="button">
                All
              </Button>
              <Button className="btn-round" type="button">
                webs
              </Button>
              <Button className=" btn-round" type="button">
                apps
              </Button>
              <Button className=" btn-round" type="button">
                mini
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
