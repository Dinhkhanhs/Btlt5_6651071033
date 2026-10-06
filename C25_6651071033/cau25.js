function tinhTien() {

    let thucAn =
        document.getElementById("thucAn");

    let nuocUong =
        document.getElementById("nuocUong");

    let danhSach =
        document.getElementById("danhSach");

    let tongTien = 0;

    danhSach.innerHTML = "";

    // Thức ăn
    for (let i = 0; i < thucAn.options.length; i++) {

        if (thucAn.options[i].selected) {

            let tenMon =
                thucAn.options[i].text;

            let gia =
                Number(thucAn.options[i].value);

            tongTien += gia;

            danhSach.innerHTML +=
                "<tr>" +
                "<td>" + tenMon + "</td>" +
                "<td>" + gia + " đồng</td>" +
                "</tr>";
        }
    }

    // Nước uống
    for (let i = 0; i < nuocUong.options.length; i++) {

        if (nuocUong.options[i].selected) {

            let tenMon =
                nuocUong.options[i].text;

            let gia =
                Number(nuocUong.options[i].value);

            tongTien += gia;

            danhSach.innerHTML +=
                "<tr>" +
                "<td>" + tenMon + "</td>" +
                "<td>" + gia + " đồng</td>" +
                "</tr>";
        }
    }

    // Kiểm tra ban đêm
    let thoiDiem =
        document.querySelector(
            'input[name="thoiDiem"]:checked'
        ).value;

    if (thoiDiem == "dem") {
        tongTien = tongTien * 1.1;
    }

    document.getElementById("tongTien").innerHTML =
        tongTien + " đồng";
}