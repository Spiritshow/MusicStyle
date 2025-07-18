


const TextCount = (count: number) => {
    if(count === 0){
        return(`нет товаров`)
    }
    if(count === 1){
        return(`${count} товар`)
    }
    if(1 < count && count < 5){
        return(`${count} товара`)
    }else{
        return(`${count} товаров`)
    }
}

export default TextCount;