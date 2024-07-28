const SlidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className="flex items-center justify-between">
            <p className="text_para leading-7 mt-0 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                Ticket Price
            </p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                Rs. 1500.00
            </span>
        </div>

        <div className="mt-[30px]">
            <p className="text_para mt-0 font-semibold text-headingColor">Available Time Slots:</p>
            <ul className="mt-3">
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 font-semibold text-textColor">
                        Sunday
                    </p>
                    <p className="text-[15px] leading-6 font-semibold text-textColor">
                        9:00 AM - 5:00 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 font-semibold text-textColor">
                        Tuesday
                    </p>
                    <p className="text-[15px] leading-6 font-semibold text-textColor">
                        1:00 PM - 5:00 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 font-semibold text-textColor">
                        Wednesday
                    </p>
                    <p className="text-[15px] leading-6 font-semibold text-textColor">
                        8:00 AM - 11:00 AM
                    </p>
                </li>
            </ul>
        </div>
        <button className="btn px-2 w-full rounded-md">Booking Appointment</button>
    </div>
  )
}

export default SlidePanel