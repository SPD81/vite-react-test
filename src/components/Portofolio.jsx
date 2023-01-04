import React from "react";
import portofolio from "../data/portofolio";
import porofolio from "../data/portofolio";
import PortofolioItem from "./PortofolioItem";

function Portofolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portofolio.map((project) => (
          <PortofolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portofolio;
