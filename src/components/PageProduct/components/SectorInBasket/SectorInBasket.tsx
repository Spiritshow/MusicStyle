import "./SectorInBasket.css";


const SectorInBasket = ({id, price, name}:{id: number | undefined, price: number | undefined, name: string | undefined}) => {
    
    const handleClick = () =>{
        console.log(id); /*запрос добавить в корзину */
    }

    return(
        <div className="DivSectorInBasket">
            <div className="CardInBasket">
                <div className="TextNameProduct">
                    {name}
                </div>
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