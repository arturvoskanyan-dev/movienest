import trail from "../../assets/trail.png";

export default function Trail() {
  return (
    <section className="px-12 pb-40 max-w-[1440px] w-full mx-auto ">
        <section className='trail border-2 border-[#999999] rounded-2xl max-[768px]:bg-center '>
        <div className='flex items-center justify-around h-full max-[768px]:flex-wrap'>
          <div className="[&>h3,p]:max-[768px]:text-center">
            <h3 className='text-5xl text-white font-bold max-[1440px]:text-3xl max-[768px]:text-2xl max-[768px]:text-center'>Start your free trial today</h3>
            <p className='text-lg text-[#999999] max-[1440px]:text-base max-[768px]:px-12'>This is a clear and concise call to action that encourages users to sign up for a free trial of MovieNest.</p>
          </div>
          <button className='bg-[#E50000] w-[188px] h-[63px] text-white text-lg rounded-md cursor-pointer duration-300 hover:bg-[#ff9999] max-[1440px]:w-[149px] max-[1440p]:h-[49px] max-[1440px]:text-sm'>Start a Free Trail</button>
        </div>
      </section>
    </section>
  )
}
