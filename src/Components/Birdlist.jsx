import BirdCards from "./BirdCards.jsx"


export default function BirdList({bird, setCart}){
    return (
        <ul>
            {bird.map((card)=>{
                return (
                    <BirdCards bird={card} setCart={ setCart }/>
                )
            })}
        </ul>
    );
}