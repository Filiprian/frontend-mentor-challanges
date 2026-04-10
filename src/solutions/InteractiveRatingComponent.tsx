import { useState } from "react"
import star_icon from "../assets/icon-star.svg"
import thank_you_image from "../assets/illustration-thank-you.svg"


export default function InteractiveRatingComponent() {

    const [rating, setRating] = useState(null)
    const [popUpActive, setPopUpActive] = useState(false)

    const buttonStyle = "flex items-center justify-center bg-gray-700 rounded-full w-16 h-16 text-2xl cursor-pointer hover:bg-orange-500"
    const activeButtonStyle = "flex items-center justify-center bg-white text-black rounded-full w-16 h-16 text-2xl cursor-pointer hover:bg-orange-500"

    const changeRating = (new_rating: number) => {
        if (rating == new_rating) {
            setRating(null)
        } else {
            setRating(new_rating)
        }
    }

    const confirmSubmit = () => {
        if (rating !== null) {
            setPopUpActive(true)
        }
    }

    return (
        <div style={{ fontFamily: 'Overpass, sans-serif' }} >
            {
                !popUpActive && (
                    <div 
                        className="bg-linear-to-b from-gray-800 to-gray-900 text-white p-10 flex flex-col gap-4 max-w-xl rounded-4xl">
                        <div className="h-13 w-13 mb-8 bg-gray-700 rounded-full flex justify-center items-center">
                            <img className="h-5 w-5" src={star_icon} alt="icon"/>
                        </div>
                        <h1 className="text-4xl font-bold">How did we do?</h1>
                        <p className="text-xl text-gray-400 mb-5">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                        <div className="flex gap-8 justify-center mb-5">
                            {
                                [...Array(5)].map((_, i) => (
                                    <button key={i} onClick={() => changeRating(i)} className={rating != i ? buttonStyle : activeButtonStyle}>{i+1}</button>
                                ))
                            }
                        </div>
                        <button 
                            onClick={confirmSubmit} 
                            className="flex items-center justify-center font-bold text-xl text-black bg-orange-500 px-2 py-3 cursor-pointer rounded-4xl hover:bg-white">SUBMIT</button>
                    </div>
                )
            }
            {
                popUpActive && (
                    <div 
                        className="bg-linear-to-b from-gray-800 to-gray-900 text-white py-16 px-8 flex flex-col gap-8 max-w-lg rounded-4xl items-center">
                        <img className="h-30 w-45" src={thank_you_image} alt="thank you image"/>
                        <h2 className="flex items-center justify-center text-md text-orange-500 bg-gray-800 rounded-4xl px-4 py-2">You selected {rating+1} out of 5</h2>
                        <h1 className="text-4xl font-bold">Thank you!</h1>
                        <p className="text-xl text-gray-400 text-center">We appreciated you taking the time to give a rating. If you ever need more support don't hesitate to get in touch!</p>
                    </div>
                )
            }
        </div>
    )
}