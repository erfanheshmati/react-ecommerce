import { Link } from "react-router-dom";

const Cards = ({ filteredItems }) => {
    return (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12">
            {
                filteredItems.slice(0, 8).map((item) => (
                    <div key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            <div className="relative">
                                <img src={item.image} alt="" className="mx-auto w-full hover:shadow-2xl transition-all duration-300" />
                                {
                                    item.status === "Best Seller" ? <span><img src="/images/products/sale.svg" alt="" className="absolute left-0 top-5" /></span>
                                        : item.status === "New Arrival" ? <span><img src="/images/products/hot.svg" alt="" className="absolute left-0 top-5" /></span>
                                            : ""
                                }
                            </div>
                        </Link>
                        <div className="mt-4 px-4">
                            <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                            <div className="flex justify-between">
                                <p className="text-black/50">{item.category}</p>
                                <p className="font-semibold">
                                    {
                                        item.status === "Best Seller" ? <span><del className="pr-2 text-gray-500">${item.oldPrice}</del><b>${item.newPrice}</b></span> : <span>${item.price}</span>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Cards;