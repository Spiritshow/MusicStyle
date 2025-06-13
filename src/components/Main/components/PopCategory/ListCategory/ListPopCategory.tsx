import "./ListPopCategory.css";

interface IListProp<T> {
    item: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function ListPopCategory<T>(props: IListProp<T>) {
    return(
        <div className="DivListPopCategory">
            {props.item.map(props.renderItem)}
        </div>
    )
}