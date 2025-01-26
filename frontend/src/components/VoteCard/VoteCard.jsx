import React, {useEffect, useState} from "react";
import Styles from '../VoteCard/VoteCard.module.css'
import axios from "axios";

import StarRate from "../StarRate/StarRate";

export default function VoteCard({id, title, group, description, onClick, onVoteSubmit}) {

    const [rating, setRating] = useState(null)

    const handleVote = () => {
        if (onVoteSubmit) {
            onVoteSubmit(id, rating); 
        }
        onClick(); 
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <img src="https://picsum.photos/200/300" alt="foto carro" className={Styles.image} />
                <h1 className={Styles.title}>{title}</h1>
                <h3 className={Styles.group}>{group}</h3>
                <p className={Styles.description}>{description}</p>
                <form className="flex flex-col items-center justify-center">
                    <fieldset className="flex">
                        <StarRate setRating={setRating}/>
                    </fieldset>
                    <button className="bg-transparent border-2 border-gray-900 text-slate-900 font-bold py-2 px-4 rounded-3xl mt-5" onClick={handleVote}>Vota!</button>
                </form>
            </div>
        </>
    )
}