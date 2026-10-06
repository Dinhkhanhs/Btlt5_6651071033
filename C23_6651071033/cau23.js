function tinhLuong() {
    let luong = Number(
        document.getElementById("luong").value
    );

    let heSo = Number(
        document.getElementById("heSo").value
    );

    let luongThang = luong * heSo;

    document.getElementById("luongThang").value =
        luongThang;
}