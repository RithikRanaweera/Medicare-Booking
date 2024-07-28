import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useState } from 'react'

const FeedbackForm = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handleSubmitReview = async e => {
        e.preventDefault();
        //later we will use our api
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
                Submit Feedback
            </button>

        </form>
    )
}

export default FeedbackForm