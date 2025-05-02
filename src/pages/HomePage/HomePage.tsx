import { FaPlay } from "react-icons/fa6";

export default function HomePage() {
  return (
    <section className="max-h-[1092px] h-screen relative">
      <section className='home_page'>
        <div className="absolute bottom-0 w-full text-center flex justify-center">
          <div className="max-w-[1096px] flex flex-col gap-4 items-center">
            <h2 className="text-white text-[48px] font-bold">The Best MovieNest</h2>
            <p className="text-[#999999]">MovieNest is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With MovieNest, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <button className="bg-[#E50000] w-[251px] h-[54px] text-white text-xl rounded-md flex items-center justify-center gap-2 cursor-pointer duration-300 hover:bg-[#ff9999]">
              <FaPlay />
              Start Watching Now
            </button>
          </div>
        </div>
      </section>
    </section>
  )
}
