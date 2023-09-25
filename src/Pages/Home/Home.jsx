import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";
import HeaderBody from "../../Components/Header/HeaderBody";


const Home = () => {

    const donations = useLoaderData();
    // console.log(donations)

    return (
        <div>
            <HeaderBody></HeaderBody>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;