import axios from "axios";

interface IUpdateCountProduct { 
    count: number;
    typeUpdate: "+" | "0" | "-";
    newCount?: number,
    id_position: number
}

const UpdateCountProduct = async({count, typeUpdate, newCount=count, id_position}: IUpdateCountProduct) => {
    var valueCount: number;

    switch (typeUpdate) {
        case '+':
            valueCount = count+1;
            break;
        case '-':
            valueCount = count-1;
            break;
        default:
            valueCount = newCount;
            break;
    }

    try {
        const Result = await axios.patch<number>('http://localhost:3000/updatecountprodact',{value: valueCount, id_position: id_position})
        return(Result.data);
    } catch (error) {
        console.log("Ошибка при изменении кол-во товара" + error)
        return(count);
    }
}

export default UpdateCountProduct;