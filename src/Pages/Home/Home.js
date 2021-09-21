import PageHeader from "components/PageHeader/PageHeader";
import React from "react";
import Gallery from "views/Gallery/Gallery";

export default function Home() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <div>
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
