export default function Trail() {
  return (
    <section className="px-12 pb-40 max-w-[1440px] w-full mx-auto ">
        <section className='trail border-2 border-[#999999] rounded-2xl'>
        <div className='flex items-center justify-around h-full'>
          <div>
            <h3 className='text-[48px] text-white'>Start your free trial today</h3>
            <p className='text-[#999999]'>This is a clear and concise call to action that encourages users to sign up for a free trial of MovieNest.</p>
          </div>
          <button className='bg-[#E50000] w-[251px] h-[54px] text-white text-xl rounded-md flex items-center justify-center gap-2 cursor-pointer duration-300 hover:bg-[#ff9999]'>Start a Free Trail</button>
        </div>
      </section>
    </section>
  )
}
