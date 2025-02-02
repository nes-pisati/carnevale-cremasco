import React, { useEffect, useState } from "react";
import VoteCard from "../../components/VoteCard/VoteCard";
import axios from 'axios'
import ThankYou from "../../components/ThankYou/ThankYou";

export default function Votes() {

    const [carri, setCarri] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    // const [checkVote, setCheckVote] = useState(0)

    console.log("Current index on init:", currentIndex);

    useEffect(() => {
        const getCarri = async () => {
            try {
                const res = await axios.get('http://localhost:3002/carri')
                setCarri(res.data)
            } catch (e) {
                console.error(e)
            }
        }; getCarri()
    }, [])

    const handleVoteSubmit = async (id, rating) => {

        // setCheckVote(0);

        if (rating === null) {
            alert("Seleziona un voto prima di inviare!");
            return;
        }

        try {
            const vote = await axios.post(`http://localhost:3002/votes/${id}`, { vote: rating });
            // setCheckVote(vote)
        } catch (e) {
            console.error(e);
            alert("Errore nell'invio del voto.");
        }
    }

    const handleNext = () => {

        // if(checkVote === 0) {
        //     return;
        // }
        
        if (currentIndex < carri.length) {
            setCurrentIndex(currentIndex + 1)
        }

    }

    return (
        <>
            {carri.length > 0 && (
                currentIndex <= carri.length-1 ? (
                    <VoteCard
                        key={carri[currentIndex]._id}
                        id={carri[currentIndex]._id}
                        title={carri[currentIndex].title}
                        group={carri[currentIndex].team}
                        description={carri[currentIndex].description}
                        onClick={handleNext}
                        onVoteSubmit={handleVoteSubmit}
                    />
                ) : (
                    <ThankYou /> 
                )
            )}

        </>
    )
}