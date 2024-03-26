import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaArrowAltCircleUp, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer>

            {/* footer top */}
            <div className="min-w-full container mx-auto 2xl:px-36 xl:px-28 px-4">
                <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">

                    {/* company info */}
                    <div className="md:w-[400px]">
                        <Link to="/">
                            <img src="/logo.svg" alt="" />
                        </Link>
                        <p className="my-8 text-Black/75">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div className="flex items-center gap-6">
                            <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-[#1773EA]" />
                            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-[#2FC7F6]" />
                            <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-[#0077AF]" />
                            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#8A0634]" />
                        </div>
                    </div>

                    {/* catalog */}
                    <div className="text-Black">
                        <h4 className="font-semibold mb-3">CATALOG</h4>
                        <div className="space-y-2">
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Necklaces
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Hoodies
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Jewelry Box
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                T-shirt
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Jacket
                            </Link>
                        </div>
                    </div>

                    {/* customer services */}
                    <div className="text-Black">
                        <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
                        <div className="space-y-2">
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Contact Us
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Track Your Order
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Product Care & Repair
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Book an Appointment
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Shipping & Returns
                            </Link>
                        </div>
                    </div>

                    {/* about us */}
                    <div className="text-Black">
                        <h4 className="font-semibold mb-3">ABOUT US</h4>
                        <div className="space-y-2">
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Our Producers
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Sitemap
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                FAQ
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                About Us
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* footer bottom */}
            <div className="bg-Black text-white min-w-full container mx-auto 2xl:px-36 xl:px-28 px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-x-8">
                    <div className="py-3">
                        <p>© {currentYear} Coral, Inc.</p>
                    </div>
                    <div className="py-3">
                        <p>Designed By <Link to="/" className="hover:opacity-70">Erfan Heshmati</Link></p>
                    </div>
                    <div className="py-3">
                        <span className="flex items-center gap-2 justify-center cursor-pointer hover:opacity-70" onClick={backToTop}>Scroll To Top <FaArrowAltCircleUp /></span>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;