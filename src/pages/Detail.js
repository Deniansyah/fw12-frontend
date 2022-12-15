import { useParams } from "react-router-dom";
// import axios from "axios";

function Detail() {
    const {id} = useParams()
    // const getDetailMovie = async () => {
    //     const {data} = await axios.get('')
    // }

    return (
        <>
            {id}
        </>
    )
}

export default Detail