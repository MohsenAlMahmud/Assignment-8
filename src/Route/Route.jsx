import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Components/Donations/DonationDetails";
import Page404 from "../Components/Header/Page404";


const myRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,

        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/donetions.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>
                
            },
            {
                path: '/donations/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donetions.json')
            },
            {
                path: '/*',
                element: <Page404></Page404>
                
            }
        ]
    }
])
    

export default myRoute;