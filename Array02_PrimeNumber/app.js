function isPrime() {
    let num = parseFloat(document.getElementById("input").value);
    console.log(num);
    if (num < 2) {
        document.getElementById("result").innerHTML = "Không phải số nguyên tố";
    }
    if (num == 2 || num == 3) {
        document.getElementById("result").innerHTML = "Đây là số nguyên tố";
        return true;
    }
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            document.getElementById("result").innerHTML = "Không phải số nguyên tố";
        } else {
            document.getElementById("result").innerHTML = "Đây là số nguyên tố";
            return true;
        }
    }
}
