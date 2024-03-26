import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const { id } = useParams()
    const [products, setProducts] = useState([])
    // console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json")
                const data = await response.json()
                const product = data.filter((p) => p.id == id)
                // console.log(product)
                setProducts(product[0])
            }
            catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData()
        // effect for page change
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [id])

    const { title, category, price, oldPrice, newPrice, image, status, star } = products


    return (
        <div className="mt-15 max-w-screen-2xl container mx-auto xl:px-28 px-4 py-6">
            <div className="p-3 max-w-7xl m-auto">

                {/* sitemap */}
                <div className="mt-2">
                    <a href="/" className="text-gray-600">Home</a>
                    <a href="/shop" className="font-bold text-black"> / Shop</a>
                </div>

                <div className="mt-6 sm:mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-max">

                        {/* product img */}
                        <div>
                            <img src={image} alt="" className="w-full" />
                        </div>

                        {/* product details */}
                        <div>
                            <h1 className="title text-left">{title}</h1>

                            <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil saepe eum deserunt debitis dignissimos, animi provident libero impedit porro nulla nobis, consequatur esse ratione. In consectetur nobis iusto ipsam!
                            </p>

                            <span className="my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                                {
                                    star === "1" ? <FaStar />
                                        : star === "2" ? <><FaStar /><FaStar /></>
                                            : star === "3" ? <><FaStar /><FaStar /><FaStar /></>
                                                : star === "4" ? <><FaStar /><FaStar /><FaStar /><FaStar /></>
                                                    : star === "5" ? <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
                                                        : ""
                                }
                            </span>

                            <p className="text-xl font-semibold sm:text-2xl">
                                {
                                    status === "Best Seller" ? <span><del className="text-red-500">${oldPrice}</del><b className="ml-3 text-gray-700">${newPrice}</b></span> : <span>${price}</span>
                                }
                            </p>

                            <div className="mt-3">
                                <div className="text-left flex flex-col gap-2 w-full">
                                    <label className="font-semibold">Quantity:</label>
                                    <input type="number" name="price" id="price" defaultValue={1} required className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500" />
                                </div>
                                <div className="w-full text-left my-4">
                                    <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"><span>Confirmed Order</span><FaArrowAltCircleRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-black/75 mt-12">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur, dolorum fugiat quae rem dolorem laboriosam quos asperiores minima ea error sapiente vel consectetur blanditiis tempora cupiditate doloremque reprehenderit praesentium.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct;