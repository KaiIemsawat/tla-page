const MobileRgister = () => {
    return (
        <div className="md:max-w-[860px] lg:max-w-[1020px] w-full lg:grid lg:grid-cols-5 gap-4">
            <form className="flex flex-col col-span-3" action="">
                <div className="text-end lg:text-start">
                    <h2 className="text-4xl sm:text-6xl font-semibold text-c-blue underline decoration-c-orange py-2">
                        Register
                    </h2>
                    <p className="text-c-blue font-light">
                        Tech Lead Academy is opening new doors for people with
                        no IT or coding background.
                    </p>
                </div>
                <div className="border p-3 border-c-orange rounded-md bg-c-white mt-4">
                    <div className="flex flex-col gap-3">
                        <label className=" mt-2 font-semibold text-c-blue text-xl">
                            Info Session - SDET
                        </label>
                        <select
                            className="border border-c-orange rounded-md p-3  bg-c-white-2 bg-opacity-30 mb-4"
                            name=""
                            id=""
                        >
                            <option value="tbd">TBD</option>
                        </select>
                        <label className=" mt-2 font-semibold text-c-blue text-xl max-w-[64px]">
                            Name&nbsp;
                            <span className="font-bold text-c-orange">:</span>
                        </label>
                        <input
                            className="border border-c-orange rounded-md p-3 text-c-orange bg-c-white-2 bg-opacity-30 mb-4"
                            type="text"
                            name="name"
                            id=""
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className=" mt-2 font-semibold text-c-blue text-xl max-w-[64px]">
                            Email&nbsp;
                            <span className="font-bold text-c-orange">:</span>
                        </label>
                        <input
                            className="border border-c-orange rounded-md p-3 text-c-orange bg-c-white-2 bg-opacity-30 mb-4"
                            type="email"
                            name="email"
                            id=""
                        />
                    </div>
                    <button className="w-full my-6 p-3 bg-c-orange rounded-md duration-500  text-c-white hover:text-c-blue hover:opacity-80">
                        Register
                    </button>
                </div>
            </form>
            <div className="col-span-2 items-end justify-end flex pt-4">
                <h3 className="text-3xl font-semibold text-c-white">
                    Join an Info Session
                </h3>
            </div>
        </div>
    );
};
export default MobileRgister;
