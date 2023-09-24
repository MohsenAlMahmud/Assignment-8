import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {
    const {id, category, title, picture } = donation;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <Link to={`/donations/${id}`}>
                        <div className="card-actions">
                            <button className="btn btn-primary">{category}</button>
                        </div>
                    </Link>
                    <p>{title}</p>

                </div>
            </div>
        </div>
    );
};

export default DonationCard;