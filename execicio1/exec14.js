function valiDateFrutas(fruta){
    switch(fruta){
        case "maça":
            return 'Não vendemos esta fruta aqui'
            break;
        case "kiwi":
            return 'Estamos com escassez de kiwi'
            break;
        case "melancia":
            return 'Aqui esta, são 3 reais o kilo'
            break;
        default:
            return 'erro'
    }
}


console.log(valiDateFrutas("maça"))
console.log(valiDateFrutas("kiwi"))
console.log(valiDateFrutas("banana"))
console.log(valiDateFrutas("melancia"))