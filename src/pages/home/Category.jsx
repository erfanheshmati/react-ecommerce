import { Link } from "react-router-dom";

const Category = () => {

    const companyLogo = [
        { id: 1, img: "/images/company/brand1.svg" },
        { id: 2, img: "/images/company/brand2.svg" },
        { id: 3, img: "/images/company/brand3.svg" },
        { id: 4, img: "/images/company/brand4.svg" },
        { id: 5, img: "/images/company/brand5.svg" },
    ]

    return (
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">

            {/* brand logo */}
            <div className="flex items-center justify-around flex-wrap gap-4 py-5">
                {
                    companyLogo.map(({ id, img }) => (
                        <div key={id}><img src={img} alt="" /></div>
                    ))
                }
            </div>

            {/* category grid */}
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                <p className="font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">Explore new and popular styles</p>
                <div>
                    <Link to="/"><img src="/images/category/img1.svg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                </div>
                <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-2">
                        <Link to="/"><img src="/images/category/img2.svg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                        <Link to="/"><img src="/images/category/img3.svg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                        <Link to="/"><img src="/images/category/img4.svg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                        <Link to="/"><img src="/images/category/img5.svg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Category;