import React from "react";
import { Link } from "react-router-dom";

function Card2({data}) {
    return (
        <div className="p-7 border-2 border-gray rounded-lg flex-none">
            <img className="w-[140px] pb-5" src={"http://localhost:8888/assets/uploads/".concat(data.picture)} alt={data.title} />
            <div className="text-center">
                <h2 className="text-lg font-bold">{data.title}</h2>
                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex w-full justify-center rounded-md border-2 border-violet-800 w-[100%]">Details</Link>
            </div>
        </div>
    )
}

export default Card2