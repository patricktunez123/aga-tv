import React from "react";
import Search from "../../components/Search";
import "./_home.scss";

const index = () => {
  return (
    <div className="agatv__hero">
      <div className="hero--content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h6>Watch anywhere. For free!.</h6>
        <Search />
      </div>
    </div>
  );
};

export default index;
