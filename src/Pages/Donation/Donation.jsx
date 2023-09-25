import { useEffect, useState } from "react";
// import DonationCard from "../../Components/Donations/DonationCard";
import DonateCard from "./DonateCard";


const Donation = () => {

    // const { picture, description } = donation;

    const [donate, setDonate] = useState([])
    const [noData, setNoData] = useState('')

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donate'))
        if (donateItems) {
            setDonate(donateItems)
        }
        else {

            setNoData('No Data Found')
        }
    }, [])

    console.log(donate)

    return (
        <div>
            {noData ? <p>{noData}</p> :
                <div className="grid md:grid-cols-2">
                    {donate.map(donation => <DonateCard key={donation.id} donation={donation}></DonateCard>)}
                </div>
            }
        </div>
    );
};

export default Donation;