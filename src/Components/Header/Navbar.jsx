import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (

        <nav className="sm:flex-none md:flex justify-between p-5">
            <div className=" mb-3">
                <img src="https://i.ibb.co/qJHgN6c/Logo.png" alt="" />
            </div>
            <ul className="flex gap-10 text-lg font-medium mt-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>

    );
};

export default Navbar;