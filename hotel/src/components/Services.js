import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title.js";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Enjoy complimentary cocktails, a delightful perk adding zest to social gatherings, fostering conviviality and relaxation.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Embark on boundless trails, embracing nature's beauty without constraints, a journey of exploration and rejuvenation.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Hop aboard the complimentary shuttle, whisking you to destinations hassle-free, enhancing convenience and travel enjoyment.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Savor the mightiest brew, an elixir of bold flavors, delivering an unparalleled beer-drinking experience.",
      },
    ],
  };
  render() {
    return (
      <section className="servces">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
