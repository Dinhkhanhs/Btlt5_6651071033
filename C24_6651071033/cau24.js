function xuatThu() {
    let ngay = Number(document.getElementById("ngay").value);
    let thang = Number(document.getElementById("thang").value);
    let nam = Number(document.getElementById("nam").value);

    let ketqua = document.getElementById("ketqua");

    if (ngay == 0 || thang == 0 || nam <= 0 ||
        !Number.isInteger(ngay) ||
        !Number.isInteger(thang) ||
        !Number.isInteger(nam)) {
        ketqua.innerHTML = "Vui lòng nhập ngày tháng năm hợp lệ!";
        return;
    }

    let date = new Date(nam, thang - 1, ngay);

    // Kiểm tra ngày có tồn tại không
    if (date.getDate() != ngay ||
        date.getMonth() != thang - 1 ||
        date.getFullYear() != nam) {
        ketqua.innerHTML = "Ngày tháng năm không hợp lệ!";
        return;
    }

    let thu = [
        "Chủ nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7"
    ];

    ketqua.innerHTML =
        thu[date.getDay()] +
        " ngày " + ngay +
        " tháng " + thang +
        " năm " + nam;
}