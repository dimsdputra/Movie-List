import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="flex flex-col justify-between shadow-lg hover:bg-black hover:bg-opacity-50 group">
      <div className="div-1">
        <div
          style={{
            backgroundImage: `url(${props.img})`,
          }}
          className="bg-no-repeat bg-cover bg-center h-[200px] w-full "
        >
          {/* <BsPlusLg className="mx-auto h-full text-zinc-300 hidden group-hover:block bg-black bg-opacity-50 w-full px-40" /> */}
          <p className="mx-auto h-[200px] w-full hidden group-hover:block bg-black bg-opacity-70 text-zinc-300 text-[13px] px-3 pt-2">{props.overview}</p>
        </div>
        <p className="px-3 pt-1 font-semibold text-md mb-2 w-full text-zinc-700">
          {props.title}
        </p>
      </div>
      <div className="div-2">
        <div className="px-3 pt-1 pb-2 flex justify-between items-center mb-2">
          <span className="flex items-center bg-zinc-300 rounded-lg px-3 py-1 text-sm font-semibold text-zinc-700">
            <p className="mr-2">{props.voteAvg}</p>
            <div>
              <BsFillStarFill />
            </div>
          </span>
          <span className="text-zinc-700 text-sm font-semibold">
            {props.releaseDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
