import convertTime from "../../utils/convertTime"
import { BASE_URL, token } from "./../../config";
import { toast } from "react-toastify";

const SlidePanel = ({ doctorId, ticketPrice, timeSlots }) => {

    const bookingHandler = async () => {

        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message + 'please try again')
            }

            if (data.session.url) {
                window.location.href = data.session.url
            }

        } catch (err) {
            toast.error(err.message)
        }



    }

    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className="flex items-center justify-between">
                <p className="text_para leading-7 mt-0 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    Ticket Price
                </p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                    Rs. {ticketPrice}
                </span>
            </div>

            <div className="mt-[30px]">
                <p className="text_para mt-0 font-semibold text-headingColor">Available Time Slots:</p>
                <ul className="mt-3">

                    {timeSlots?.map((item, index) => (
                        <li key={index} className="flex items-center justify-between mb-2">
                            <p className="text-[15px] leading-6 font-semibold text-textColor">
                                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                            </p>
                            <p className="text-[15px] leading-6 font-semibold text-textColor">
                                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
                            </p>
                        </li>
                    ))}

                </ul>
            </div>
            <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
                Booking Appointment
            </button>
        </div>
    )
}

export default SlidePanel