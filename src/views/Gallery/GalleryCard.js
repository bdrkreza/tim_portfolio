import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
export default function GalleryCard({ Items }) {
  return (
    <>
      <div className="mt-4">
        <Link to={Items.link}>
          <img alt="..." className="img-raised" src={Items.img} />
        </Link>
        <Button
          className="btn-simple btn-round"
          color="primary"
          to={Items.link}
          tag={Link}
        >
          {Items.title}
        </Button>
      </div>
    </>
  );
}
