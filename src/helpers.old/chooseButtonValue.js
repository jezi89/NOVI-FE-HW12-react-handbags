function chooseButtonValue(index) {
    switch (index) {
        case 0:
            return "in the collection";
        case 1:
            return "shop all the bags";
        case 2:
            return "pre-orders";
        default:
            return "Onbekende knop";
    }
}

export default chooseButtonValue;