import DonationCard from "./DonationCard";


const Donations = ({donations}) => {
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {
                donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Donations;