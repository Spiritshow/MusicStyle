

interface IListProp<T> {
    item: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function ListProp<T>(props: IListProp<T>) {
    return(
        <div>
            {props.item.map(props.renderItem)}
        </div>
    )
}