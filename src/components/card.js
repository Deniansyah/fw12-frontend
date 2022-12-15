import React from "react";
import { Link } from "react-router-dom";

function Card({data}) {
    return (
        <div className="group p-6 border-2 border-white rounded-lg flex-none text-center hover:bg-white">
            <img className="w-[130px]" src={"http://localhost:8888/assets/uploads/".concat(data.picture)} alt={data.title} />
            <div className="hidden group-hover:block">
                <h2 className="text-lg font-bold mt-2">{data.title}</h2>
                <p className="text-sm text-gray-400 pb-5">{data.genre}</p>
                <Link to={'/detail/' + data.id} className="bg-white text-violet-800 py-1 px-2 flex w-full justify-center rounded-md border-2 border-violet-800 w-[100%]">Details</Link>
            </div>
        </div>
    )
}

export default Card;
