function checkMagazine(magazine, note) {
    let keeper = {}
    for (let word in note) {

        if (!keeper[note[word]]) {
            keeper[note[word]] = 1
        } else {
            keeper[note[word]]++
        }
    }
    for (let [key, value] of Object.entries(keeper)) {
        for (let i in magazine) {
            if (key === magazine[i] && keeper[key] > 0) {
                keeper[key]--

            }
        }
    }
    let no;
    for (let key of Object.keys(keeper)) {
        if (keeper[key] !== 0)
            no = "No"
    }
    if (!no) {
        console.log('Yes')
    }
    else {
        console.log(no)
    }
}