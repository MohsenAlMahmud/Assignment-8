import swal from "sweetalert";


const DonationDetailsCard = ({ donation }) => {
    const { id, picture, description } = donation;

    const handleAddToDonate = () =>{

        const addedDonateItems = [];

        const donateItems = JSON.parse(localStorage.getItem('donate'))

        if(!donateItems){
            addedDonateItems.push(donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateItems))
            swal("Your Donation Successfully Done!");

        }
        
        else{
            addedDonateItems.push(...donateItems, donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateItems))
            swal("Your Donation Successfully Done!");
        }
    }

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className="" src={picture} alt="" />
                    <div className="absolute">
                            <button onClick={handleAddToDonate} className="btn btn-primary">Donate $290</button>
                        </div>
                </figure>
                <div className="card-body">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetailsCard;