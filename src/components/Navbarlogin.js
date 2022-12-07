import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const Navbarlogin = () => {
    return(
        <div className="mx-[130px]">
            <div className="flex items-center my-3">
                <div className="flex items-center grow gap-5">
                    <div className="mr-12">
                        <img src={require('../assets/images/tickitz-small-purple.png')} alt="logo" />
                    </div>
                    <Link to='/home'>Home</Link>
                    <Link to='/list-movie'>List Movie</Link>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <Icon.Search />
                    <img className="w-[46px]" src={require('../assets/images/home-profil.png')} alt="profil foto" />
                </div>
            </div>
        </div>
    )
}

export default Navbarlogin