import { Link } from "react-router-dom";

const Newsletter = () => {
    return (
        <div className="bg-[#1e2832] bg-opacity-5 xl:px-28 px-4 py-16">
            <h2 className="title mb-8">Follow products and discounts on Instagram</h2>

            {/* instagram grid */}
            <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
                <Link to="/">
                    <img src="/images/instagram/img1.svg" alt="" />
                </Link>
                <Link to="/">
                    <img src="/images/instagram/img2.svg" alt="" />
                </Link>
                <Link to="/">
                    <img src="/images/instagram/img3.svg" alt="" />
                </Link>
                <Link to="/">
                    <img src="/images/instagram/img4.svg" alt="" />
                </Link>
                <Link to="/">
                    <img src="/images/instagram/img5.svg" alt="" />
                </Link>
                <Link to="/">
                    <img src="/images/instagram/img6.svg" alt="" />
                </Link>
            </div>

            {/* newsletter */}
            <div>
                <h2 className="title mb-8">Or subscribe to the newsletter</h2>
                <form className="md:w-1/2 mx-auto text-center">
                    <input type="email" name="email" id="email" placeholder="Email Address..." className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4" />
                    <input type="submit" value={"Submit"} className="bg-black text-white px-6 py-1 rounded-sm cursor-pointer" onClick={(e) => e.preventDefault()} />
                </form>
            </div>
        </div>
    )
}

export default Newsletter;