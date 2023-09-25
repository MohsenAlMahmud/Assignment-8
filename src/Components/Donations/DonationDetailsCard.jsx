import swal from "sweetalert";


const DonationDetailsCard = ({ donation }) => {
    const { id, picture, description, category_bg_color, button_bg_color, text_color } = donation;

    const handleAddToDonate = () => {

        const addedDonateItems = [];

        const donateItems = JSON.parse(localStorage.getItem('donate'))

        if (!donateItems) {
            addedDonateItems.push(donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateItems))
            swal("Your Donation Successfully Done!");

        }

        else {
            addedDonateItems.push(...donateItems, donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateItems))
            swal("Your Donation Successfully Done!");
        }
    }

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className="w-screen h-auto" src={picture} alt="" />
                    <div className="flex absolute hero-overlay h-1/6 items-center px-9">
                        <div className=" ">
                            <button onClick={handleAddToDonate} style={{ backgroundColor: text_color }} className="p-4 rounded-md text-white text-lg font-semibold">Donate $290</button>
                        </div>
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