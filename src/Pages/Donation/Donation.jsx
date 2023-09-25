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

            setNoData('No Data Found')
        }
    }, [])
    

    console.log(isShowAll)

    return (
        <div>
            {noData ? <p>{noData}</p> :
                <div className="grid md:grid-cols-2 gap-5 mt-10">
                    {
                        isShowAll ? donate.map(donation => <DonateCard key={donation.id} donation={donation}></DonateCard>)
                        : donate.slice(0, 4).map(donation => <DonateCard key={donation.id} donation={donation}></DonateCard>)
                    }
                </div>
                
            } 
            {donate.length > 4 && <button onClick={()=>setIsShowAll(!isShowAll)} className="px-5 bg-red-400 block mx-auto">Show All</button> }          
        </div>
    );
};

export default Donation;