import { useEffect, useState } from "react";
import axios from 'axios';

const Pokemon = () => {
    const [num, setNum] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
        }
        getData();
    })
    return (
        <>
            <h1>You choose {num} value</h1>
            <h1>My name is { }</h1>
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