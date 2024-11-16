import { useEffect, useState } from "react";
import axios from 'axios';

const Pokemon = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [lengthMoves, setLengthMoves] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            console.log(res.data.moves)
            setMoves(res.data.moves);
            setLengthMoves(res.data.moves.length);
        }
        getData();
    })
    return (
        <>
            <h1>You choose <span style={{ color: 'gray' }}>{num}</span> value</h1>
            <h1>My name is <span style={{ color: 'gray' }}>{name}</span></h1>
            <h1>I have <span style={{ color: 'gray' }}>{lengthMoves}</span> moves, such as:</h1>
            <h2>
                {moves?.map((move) => {
                    return move.move.name;
                })}
            </h2>
            <select name="" id="" value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

export default Pokemon;