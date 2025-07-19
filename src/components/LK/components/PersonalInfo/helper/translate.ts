


const TranslateUserInfo = (name: string) => {
    switch (name) {
        case "fio":
            return("ФИО");

        case "nickname":
            return("Псевдоним");

        case "numberphone":
            return("Номер телефона");

        case "address":
            return("Адрес");

        case "email":
            return("email");

        case "birthday":
            return("День роджения");

        default:
            break;
    }
}

export default TranslateUserInfo;