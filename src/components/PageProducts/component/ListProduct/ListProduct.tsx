
interface IListProp<T> {
    item: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function ListProduct<T>(props: IListProp<T>) {
    return(
        <div className="ListProduct">
            {props.item.map(props.renderItem)}
        </div>
    )
}