import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {
    const {id, category, title, picture, button_bg_color, category_bg_color, text_color } = donation;
    return (
        <div className="">
            <div className="card">
                <figure><img src={picture} alt="" /></figure>
                <div style={{backgroundColor:category_bg_color}} className="p-6">
                    <Link to={`/donations/${id}`}>
                        <div className="card-actions">
                            <button style={{color:text_color, backgroundColor:button_bg_color}}  className="rounded-md px-4 font-medium">{category}</button>
                        </div>
                    </Link>
                    <p>{title}</p>

                </div>
            </div>
        </div>
    );
};

export default DonationCard;