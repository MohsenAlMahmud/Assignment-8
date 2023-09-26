import swal from "sweetalert";


const DonationDetailsCard = ({ donation }) => {
    const { id, picture, description, category_bg_color, button_bg_color, text_color, title } = donation;

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
            <div className="card  card-compact bg-base-100 shadow-xl">
                <figure className="relative">
                    <img className="w-screen h-auto" src={picture} alt="" />
                    <div className="flex absolute top-32 md:top-80 lg:top-[670px] hero-overlay h-2/6 md:h-1/6 items-center px-9 ">
                        <div className=" ">
                            <button onClick={handleAddToDonate} style={{ backgroundColor: text_color }} className="p-4 rounded-md text-white text-lg font-semibold">Donate $290</button>
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                <p className="text-4xl font-bold py-2">{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetailsCard;