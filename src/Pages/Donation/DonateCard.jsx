import { Link } from "react-router-dom";


const DonateCard = ({ donation }) => {
    const { id, category, title, picture, price } = donation;
    return (
        <div className="">
            <div className="flex bg-base-100 shadow-xl">
                <div>
                    <figure><img src={picture} alt="" /></figure>
                </div>
                <div className="card-body">
                    <button className="btn btn-primary">{category}</button>
                    <p>{title}</p>
                    <p>${price}</p>
                    <Link to={`/donations/${id}`}>
                        <div className="card-actions">
                            <button className="btn btn-primary">{category}</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;