import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/calculator');
    };

    return (
        <>
            <p>This is Home page</p>
            <button onClick={handleClick}>Go to calculator!</button>
        </>
    )
}

export default Home;