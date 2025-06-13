import "./ListPopBrends.css";

interface IListProp<T> {
    item: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function ListPopBrends<T>(props: IListProp<T>) {
    return(
        <div className="ListPopBrends">
            {props.item.map(props.renderItem)}
        </div>
    )
}