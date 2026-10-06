function tinhCanChi() {

    let nam =
        document.getElementById("nam").value;

    let loi =
        document.getElementById("loi");

    // Validate
    if (nam == "") {
        loi.innerHTML = "Vui lòng nhập năm!";
        return;
    }

    if (isNaN(nam)) {
        loi.innerHTML = "Năm phải là số!";
        return;
    }

    nam = Number(nam);

    if (!Number.isInteger(nam)) {
        loi.innerHTML =
            "Năm phải là số nguyên!";
        return;
    }

    if (nam <= 0) {
        loi.innerHTML =
            "Năm phải lớn hơn 0!";
        return;
    }

    let can = [
        "Canh",
        "Tân",
        "Nhâm",
        "Quý",
        "Giáp",
        "Ất",
        "Bính",
        "Đinh",
        "Mậu",
        "Kỷ"
    ];

    let chi = [
        "Thân",
        "Dậu",
        "Tuất",
        "Hợi",
        "Tý",
        "Sửu",
        "Dần",
        "Mão",
        "Thìn",
        "Tỵ",
        "Ngọ",
        "Mùi"
    ];

    let ketQua =
        can[nam % 10] +
        " " +
        chi[nam % 12];

    document.getElementById("canChi").value =
        ketQua;

    loi.innerHTML = "";
}