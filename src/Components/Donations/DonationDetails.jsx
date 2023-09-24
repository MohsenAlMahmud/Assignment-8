import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";


const DonationDetails = () => {

    const [donation, setDonation] = useState({});

    const { id } = useParams();
    

    const donations = useLoaderData();
    

    useEffect(() =>{

        const finddonation = donations?.find(donation => donation.id == id)
        setDonation(finddonation)

    },[id, donations])

    // console.log(donation)

    return (
        <div>
            <DonationDetailsCard donation={donation}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;