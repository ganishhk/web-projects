function Name_genrator(n) {
    let Adjective = ""
    let Shopname = ""
    let Title = ""
    let new_name=""
    for (let i = 1; i <= n; i++) {
        let randomInt = Math.floor(Math.random() * 3);
        let randomInt2 = Math.floor(Math.random() * 3);
        let randomInt3 = Math.floor(Math.random() * 3);
        if (randomInt == 0) {
            Adjective = "fire "
        }
        else if (randomInt == 1) {
            Adjective = "Amazing "
        }
        else {
            Adjective = "Crazy "
        }
        if (randomInt2 == 0) {
            Shopname = "Engine "
        }
        else if (randomInt2 == 1) {
            Shopname = "Food "
        }
        else {
            Shopname = "Garments "
        }
        if (randomInt3 == 0) {
            Title = "Bros "
        }
        else if (randomInt3 == 1) {
            Title = "Limited "
        }
        else {
            Title = "Hub "
        }
        new_name +=(`${i}.${Adjective + Shopname + Title}\n`)
    }
    return (new_name)
}
console.log(` how many names you want :-  ${Name_genrator(2)}`)