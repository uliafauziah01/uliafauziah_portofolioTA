<?php
if(isset($_POST['ProsesSaran'])){
    $saran = nl2br($_POST['saran']);
    echo "Pesan Dan Kesan: <br>";
    echo "<font color=green><b>$saran</b></font><br>";
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $tanggal = $_POST['tanggal'];
    $nomorhp = $_POST['nomorhp'];
    $email = $_POST['email'];
    $produk = $_POST['produk'];
    $platform = $_POST['Platforms_for_Promotion'];

    // Menulis data ke file teks
    $file = fopen("data.txt", "a");
    if ($file) {
        fwrite($file, "Nama: $nama\n");
        fwrite($file, "Tanggal: $tanggal\n");
        fwrite($file, "Nomer Telepon: $nomorhp\n");
        fwrite($file, "Email: $email\n");
        fwrite($file, "Product Yang Ditawarkan: $produk\n");
        fwrite($file, "Platforms for Promotion: $platform\n");
        fwrite($file, "------------------------\n");
        fclose($file);

        // Menampilkan isi file teks
        // echo "<h2>Data yang disubmit:</h2>";
        // echo nl2br(file_get_contents("data.txt"));
        header("Location: index.html");
    } else {
        echo "Gagal membuka file untuk menulis.";
    }
}

?>


