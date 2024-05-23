function gosterTarih() {
    var tarih = new Date();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    var gun = gunler[tarih.getDay()];
    var ay = aylar[tarih.getMonth()];
    var yil = tarih.getFullYear();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();

    var tarihMetni = gun + " " + tarih.getDate() + " " + ay + " " + yil + " " + saat + ":" + dakika + ":" + saniye;
    
    document.getElementById("demo").innerHTML = tarihMetni;
}
