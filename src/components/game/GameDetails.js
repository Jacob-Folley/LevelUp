import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getGame } from "./GameManager.js";

export const GameDetails = () => {
    // Return ( TITLE, DESIGNER, YEAR RELEASED, NUMBER OF PLAYERS, ESTIMATED TIME TO PLAY, AGE RECOMMENDATION, CATEGORIES)
    const { gameId } = useParams()
    const history = useHistory()

    const [game, setGame] = useState([])

    useEffect(() => {
        getGame(gameId).then(data => setGame(data))
    }, [])

    return (
        <>
            <article className="gameInfo">

                <section className="gameDetails">
                    <h1>{game.title}</h1>
                    <p>Maker: {game.maker}</p>
                    <p>Number of Players: {game.number_of_players}</p>
                    <p>Skill Level: {game.skill_level}</p>
                    <p>Game Type: {game.game_type}</p>
                </section>

                <button className="gameUpdate" onClick={() => {history.push(`/games/${gameId}/update`)}}>Edit</button>

            </article>
        </>
    )
}