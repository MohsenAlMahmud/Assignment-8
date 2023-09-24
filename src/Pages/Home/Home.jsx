import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";


const Home = () => {

    const donations = useLoaderData();
    // console.log(donations)

    return (
        <div>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;