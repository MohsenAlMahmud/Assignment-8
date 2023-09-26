

const HeaderBody = () => {
    return (
        <div>
            <div className="hero min-h-[50vh]" style={{ backgroundImage: 'url(https://i.ibb.co/SyS2nd1/your-image.jpg)' }}>
                <div className="hero-overlay bg-opacity-0 bg-blend-hard-light"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center">
                            <input type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs" />
                            <button className="btn border-none text-white bg-[#FF444A]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;