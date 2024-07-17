// import { PiFireTruckLight } from "react-icons/pi";
import Container from "../Container";
import { FaFacebookF, FaGlobeAmericas, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Topbar = () => {
    return (
        <div className="bg-[#51AA1B] text-white py-2 md:flex hidden">
            <Container>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex text-sm items-center">
                        <div className="flex items-center pr-3 border-r gap-2">
                        <TbTruckDelivery className="text-xl" />
                            <span>Free Delivery</span>
                        </div>
                        <div className="flex items-center px-3 border-r gap-2">
                        <FaGlobeAmericas />
                            <span>Returns Policy</span>
                        </div>
                        <div className="flex items-center pl-3">
                            <span className="mr-3">Follow Us</span>
                            <div className="flex space-x-2.5">
                              <FaFacebookF className="cursor-pointer" />
                                <FaTwitter className="cursor-pointer" />
                                <FaInstagram className="cursor-pointer" />
                                <FaPinterestP className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="#" className="text-white text-sm">Login</a>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Topbar;
