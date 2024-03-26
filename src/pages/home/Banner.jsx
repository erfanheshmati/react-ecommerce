import bannerImg from "/images/banner.svg"
import { FaShoppingBag } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="bg-primaryBG py-5 xl:px-28 sm:py-1 px-4">
            <div className="md:py-10 2xl:py-20 flex flex-col md:flex-row-reverse justify-between items-center gap-14">

                {/* banner img */}
                <div>
                    <img src={bannerImg} alt="" width="600" />
                </div>

                {/* banner txt */}
                <div>
                    <h1 className="text-5xl font-light mb-5">Collections</h1>
                    <p className="text-xl mb-7">You can explore ans shop many differnt collection from various barands here.</p>
                    <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
                        <FaShoppingBag className="inline-flex" />Shop Now
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Banner;