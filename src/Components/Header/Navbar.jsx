import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (

        <nav className="flex justify-between p-5">
            <div>
                <img src="/Resources/Logo.png" alt="" />
            </div>
            <ul className="flex gap-10">
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

        // <div className="flex justify-between max-w-7xl mx-auto p-5">
        //     <div>
        //         <img src="/Resources/Logo.png" alt="" />
        //     </div>
        //     <div className="flex gap-10">
        //         <Home></Home>
        //         <Donation></Donation>
        //         <Statistics></Statistics>
        //     </div>
        // </div>
    );
};

export default Navbar;