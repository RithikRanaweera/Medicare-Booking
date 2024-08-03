import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import useGetProfile from '../../hooks/useFetchData';


const FeedbackForm = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const { data: userData } = useGetProfile(`${BASE_URL}/users/profile/me`);
    console.log(userData);

    const handleSubmitReview = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!rating || !reviewText) {
                setLoading(false);
                return toast.error("Rating & Review Fields are required");
            }
            const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${token}`
                },
                body: JSON.stringify({ rating, reviewText , user:userData._id}),
            });


            const result = await res.json();

            console.log(result)

            if (!res.ok) {
                throw new Error(result.message);
            }

            setLoading(false);
            toast.success(result.message);
        } catch (err) {
            setLoading(false);
            toast.error(err.message);
        }
    };



    return (
        <form action="">
            <div>
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    How would you rate the overall experience ? *
                </h3>
                <div>
                    {[...Array(5).keys()].map((_, index) => {
                        index += 1;

                        return (
                            <button
                                key={index}
                                type="button"
                                className={`${index <= ((rating || hover) || hover) ? "text-yellow-400" : "text-gray-400"} bg-transparent border-none outline-none cursor-pointer`}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onClick={() => setRating(index)}
                                onDoubleClick={() => { setRating(0); setHover(0); }}
                            >
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>

                        );
                    })}
                </div>
            </div>

            <div className='mt-[30px]'>
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    Share your feedback ot suggestions *
                </h3>
                <textarea
                    className="w-full border border-solid border-[#0066ff34] focus:outline outline-primaryColor rounded-md px-4 py-3"
                    rows="5"
                    placeholder="Write your message"
                    onClick={(e) => setReviewText(e.target.value)}
                ></textarea>
            </div>

            <button className='btn' type='submit' onClick={handleSubmitReview}>
                {loading ? <HashLoader color="#fff" size={25} /> : "Submit Feedback"}
            </button>

        </form>
    )
}

export default FeedbackForm