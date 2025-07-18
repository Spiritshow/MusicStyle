import type { IPositionBasket } from '../../PageBasket';
import './ListProductInBasket.css';


interface IListProductInBasket {
    positions: IPositionBasket[];
    renderPosition: (positions: IPositionBasket) => React.ReactNode;
}

const ListProductInBasket = ({positions, renderPosition}: IListProductInBasket) => {

    return(
        <div className="ListProductInBasket">
            {positions.map(renderPosition)}
        </div>
    )
}

export default ListProductInBasket;