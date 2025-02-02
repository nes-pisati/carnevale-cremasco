import React, { useEffect, useState } from "react";
import Styles from '../VoteCard/VoteCard.module.css'
import axios from "axios";

import StarRate from "../StarRate/StarRate";

export default function VoteCard({ id, title, group, description, onClick, onVoteSubmit }) {

    const [rating, setRating] = useState(null)

    const handleVote = () => {
        if (onVoteSubmit) {
            onVoteSubmit(id, rating);
        }
        onClick();
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center h-full pt-4">
                <div className="w-24 h-24 rounded-full overflow-hidden self-center ">
                    <img className="w-full h-full object-contain mix-blend-multiply" src="https://www.carnevaledicrema.it/wp-content/uploads/2019/05/logo_2020_carnevale_cremasco.jpg" alt="logo carnevale cremasco" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="https://picsum.photos/200/300" alt="foto carro" className={Styles.image} />
                    <h1 className={Styles.title}>{title}</h1>
                    <h3 className={Styles.group}>{group}</h3>
                    <p className={Styles.description}>{description}</p>
                </div>
                <div className="flex flex-col fixed bottom-0 w-full pb-6">
                    <form className="flex flex-col items-center justify-center">
                        <fieldset className="flex">
                            <StarRate setRating={setRating} />
                        </fieldset>
                        <button className="bg-transparent border-2 border-red-600 text-red-600 font-bold py-1 px-3 rounded-3xl mt-5" onClick={handleVote}>Vota!</button>
                    </form>
                </div>
            </div>
        </>
    )
}