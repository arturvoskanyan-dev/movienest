import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#090909]">
        <section className="max-w-[1440px] w-full px-12 py-[48px] mx-auto flex justify-between gap-4 text-white [&>div>span]:text-lg [&>div>span]:text-[#999999] [&>div>h4]:text-xl max-[768px]:grid max-[768px]:grid-cols-2 [&>div>h4]:max-[1440px]:text-lg [&>div>span]:max-[1440px]:text-base [&>div>h4]:max-[768px]:text-base">
            <div className="flex flex-col">
                <h4>Home</h4>
                <span>Categories</span>
                <span>Devices</span>
                <span>Pricing</span>
                <span>FAQ</span>
            </div>
            <div className="flex flex-col">
                <h4>Movies</h4>
                <span>Games</span>
                <span>Trending</span>
                <span>New Release</span>
                <span>Popular</span>
            </div>
            <div className="flex flex-col">
                <h4>Shows</h4>
                <span>Gernes</span>
                <span>Trending</span>
                <span>New Release</span>
                <span>Popular</span>
            </div>
            <div className="flex flex-col">
                <h4>Support</h4>
                <span>Contact Us</span>
            </div>
            <div className="flex flex-col">
                <h4>Subscription</h4>
                <span>Plans</span>
                <span>Features</span>
            </div>
            <div className="flex flex-col gap-2">
                <h4>Connect With Us</h4>
                <div className="flex gap-2 [&>svg]:text-5xl [&>svg]:p-[12px] [&>svg]:bg-[#1A1A1A] [&>svg]:rounded-md [&>svg]:cursor-pointer">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
        </section>
        <div className="max-w-[1440px] mx-auto border-t-2 border-[#999999] pt-2"></div>
        <section className="max-w-[1440px] mx-auto px-12 py-4 flex justify-between text-[#999999] max-[768px]:flex-wrap">
            <h4 className="text-lg max-[1440px]:text-base">@2025 movienest, Create Artur Voskanyan</h4>
            <div className="flex gap-4 [&>span]:text-lg [&>span]:max-[1440px]:text-base">
                <span>Terms of Use</span>|
                <span>Privacy Policy</span>|
                <span>Cookie Policy</span>
            </div>
        </section>
    </footer>
  )
}
