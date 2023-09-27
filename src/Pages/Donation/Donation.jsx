import { useEffect, useState } from "react";

import DonateCard from "./DonateCard";


const Donation = () => {

    

    const [donate, setDonate] = useState([])
    const [noData, setNoData] = useState('')
    const [isShowAll, setIsShowAll] = useState(false)

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donate'))
        if (donateItems) {
            setDonate(donateItems)
        }
        else {

            setNoData('Please Donate')
        }
    }, []);

    const handleSeeAll = () =>{
        setIsShowAll(true);
    };

    return (
        <div>
            {noData ? <p className="flex min-h-screen text-5xl font-bold justify-center items-center">{noData}</p> :
                <div className="grid md:grid-cols-2 gap-5 mt-10">
                    {
                        isShowAll ? donate.map(donation => <DonateCard key={donation.id} donation={donation}></DonateCard>)
                        : donate.slice(0, 4).map(donation => <DonateCard key={donation.id} donation={donation}></DonateCard>)
                    }
                </div>
                
            } 
            {donate.length > 4 && !isShowAll && <button onClick={()=>setIsShowAll(!isShowAll)} className="px-5 py-2 bg-[#009444] block mx-auto mt-4 rounded-md font-semibold text-white">See All</button> }          
        </div>
    );
};

export default Donation;