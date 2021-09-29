import React from "react";

export default function LoadMoreButton({ showMoreItems }) {
  return (
    <div className="mt-5">
      <a
        href
        onClick={showMoreItems}
        class="btn Blog_btn  btn--with-icon bg-gradient-teal"
      >
        <i class="btn-icon fa fa-long-arrow-right bg-gradient-indigo"></i>
        Load Mores Items
      </a>
    </div>
  );
}
