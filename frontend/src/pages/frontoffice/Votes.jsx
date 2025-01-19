import React, { useEffect, useState } from "react";
import VoteCard from "../../components/VoteCard/VoteCard";
import axios from 'axios'

export default function Votes() {

    const [carri, setCarri] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)

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
        if (rating === null) {
            alert("Seleziona un voto prima di inviare!");
            return;
        }
        try {
            await axios.post(`http://localhost:3002/votes/${id}`, { vote: rating }); 
        } catch (e) {
            console.error(e);
            alert("Errore nell'invio del voto.");
        }
    }

    const handleNext = () => {
        if (currentIndex < carri.length -1) {
            setCurrentIndex(currentIndex +1)
        }
    }

    return (
        <>
            {carri.length > 0 && (
                <VoteCard 
                key={carri[currentIndex]._id}
                id={carri[currentIndex]._id}
                title={carri[currentIndex].title}
                group={carri[currentIndex].team}
                description={carri[currentIndex].description}
                onClick={handleNext}
                onVoteSubmit={handleVoteSubmit}
            />
            )}

        </>
    )
}