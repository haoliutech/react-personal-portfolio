import React from "react";
import { FaGithub } from "react-icons/fa6";

interface CardProps {
  imgURL: string;
  title: string;
  description: string;
  githubURL: string;
}

const Card: React.FC<CardProps> = ({
  imgURL,
  title,
  description,
  githubURL,
}) => {
  return (
    <div className="m-8 card bg-white w-96 h-96 shadow-md sm:w-11/12 grid gir">
      <figure className="">
        <img className="object-contain w-48 h-48" src={imgURL} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent">
            <a href={githubURL}>
              <FaGithub className="m-2 w-6 h-6" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
