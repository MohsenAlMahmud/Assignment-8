import { Link } from "react-router-dom";


const DonateCard = ({ donation }) => {
    const { id, category, title, picture, price, text_color, button_bg_color, category_bg_color } = donation;
    return (
        <div className="">
            <div className="flex">
                <div>
                    <figure><img src={picture} alt="" /></figure>
                </div>
                <div className="w-full">
                    <div style={{ backgroundColor: category_bg_color }} className="h-full px-3">
                        <button style={{ color: text_color, backgroundColor: button_bg_color }} className="rounded-md px-4 font-medium mt-2">{category}</button>
                        <p className="text-2xl font-semibold">{title}</p>
                        <p className="font-semibold">${price}</p>
                        <Link to={`/donations/${id}`}>
                            <div className="">
                                <button className="px-4 py-1 rounded-md btn-primary font-semibold">View Details</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;