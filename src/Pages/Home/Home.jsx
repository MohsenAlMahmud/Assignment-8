import { useLoaderData } from "react-router-dom";


const Home = () => {

    const donations = useLoaderData();
    console.log(donations)

    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

export default Home;