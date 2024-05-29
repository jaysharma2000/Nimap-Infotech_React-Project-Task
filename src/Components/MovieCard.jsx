import React from "react";
import { Link } from "react-router-dom";
import { img_300, img_not_available } from "../Config";

//Movie Card
const CardMoviesComponents = ({ data }) => {

  //Extracting Data 
  const title = data.original_title || data.name;
  const id = data.id;
  const ImageURL = data.poster_path
    ? img_300 + data.poster_path
    : img_not_available;
  const release_date = data.release_date || data.first_air_date;
  const vote_average = parseInt(data.vote_average);
  //JSX for Card 
  return (
    <>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
        <Link to={`/details/${id}`} className="video-thumb">
          <figure className="video-image">
            <span>
              <img src={ImageURL} alt={title} />
            </span>
          </figure>
          <div className="video-content">
            <ul className="tags">
              <li>Release Date</li>
            </ul>
            <small className="range">{release_date}</small>
            <h3 className="name">{title}</h3>
            <h3 className="name" style={{ fontSize: "12px" }}>
              Rating: {vote_average}
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardMoviesComponents;
