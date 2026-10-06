function nhan() {
    let so1 = Number(document.getElementById("so1").value);
    let so2 = Number(document.getElementById("so2").value);

    let ketQua = so1 * so2;

    document.getElementById("ketqua").innerHTML = ketQua;
}

function chia() {
    let so1 = Number(document.getElementById("so1").value);
    let so2 = Number(document.getElementById("so2").value);

    if (so2 == 0) {
        document.getElementById("ketqua").innerHTML =
            "Không thể chia cho 0";
        return;
    }

    let ketQua = so1 / so2;

    document.getElementById("ketqua").innerHTML = ketQua;
}