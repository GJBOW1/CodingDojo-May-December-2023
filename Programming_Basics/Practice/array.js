function get_array() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}

crazy = get_array();
console.log(crazy);
