function otentikasi(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "ahmad2017" && password == "integrity") {
        alert ("Berhasil Login");
        return true;
    }
    else if (username == "" || password == "") {
        alert("Masukan Username dan Password Anda");
        return false;
    else {
        alert ("Username atau Password Yang Anda Masukkan Salah");
        return false;
    }
}