import React from "react";
import { Categories } from "../assets/mockData";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            {" "}
            <div>SHOP BY CATEGORIES</div>
          </div>
          <ul>
            {Categories.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
          <div> </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
