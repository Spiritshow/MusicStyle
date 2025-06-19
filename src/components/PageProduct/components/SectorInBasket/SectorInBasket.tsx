import "./SectorInBasket.css";


const SectorInBasket = ({id, price}:{id: number | undefined, price: number | undefined}) => {
    
    const handleClick = () =>{
        console.log(id); /*запрос добавить в корзину */
    }

    return(
        <div className="DivSectorInBasket">
            <div className="CardInBasket">
                <div className="TextPrice">
                    {price}₽
                </div>
                <div className="DivButtonInBasket">
                    {id && <button onClick={handleClick} className="ButtonInBasket">В корзину</button>}
                </div>
            </div>
        </div>
    )
}

export default SectorInBasket;