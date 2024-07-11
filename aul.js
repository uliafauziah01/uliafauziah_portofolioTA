function sapaan() {
    document.getElementById("sapaan").scrollIntoView();
}
function profile() {
    document.getElementById("profile").scrollIntoView();
}
function aboutme() {
    document.getElementById("aboutme").scrollIntoView();
}

function skil() {
    document.getElementById("skil").scrollIntoView();
}
function kontak() {
    document.getElementById("kontak").scrollIntoView();
}
function saran() {
    document.getElementById("saran").scrollIntoView();
}

        function showPopup() {
            var nama = document.forms["input"]["namaPengirim"].value;
            var nomor = document.forms["input"]["nomorTelephone"].value;
            var pesan = document.forms["input"]["pesan"].value;
            var kesan = document.forms["input"]["kesan"].value;

            alert("Nama Pengirim: " + nama + "\nNomor Telephone: " + nomor + "\nPesan: " + pesan + "\nKesan: " + kesan);

            return false; // Mencegah pengiriman form
        }


//javasrcipt pop up form contact kerja sama
function showPopup(event) {
    // Mencegah pengiriman form awal
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var nomorhp = document.getElementById("nomorhp").value;
    var email = document.getElementById("email").value;
    var produk = document.getElementById("produk").value;
    var platform = document.querySelector('input[name="Platforms_for_Promotion"]:checked').value;

    var popupMessage =
        "Nama: " + nama + "\n" +
        "Tanggal: " + tanggal + "\n" +
        "Nomer Telepon: " + nomorhp + "\n" +
        "Email: " + email + "\n" +
        "Product Yang Ditawarkan: " + produk + "\n" +
        "Platforms for Promotion: " + platform;

    alert(popupMessage);

    // Setelah popup ditutup, kirimkan form secara manual
    document.getElementById("registrationForm").submit();
}
