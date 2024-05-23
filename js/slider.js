// Slider'ın otomatik kayması
let currentSlide = 0;
const slides = document.querySelector('.slider-inner');
const totalSlides = slides.children.length;

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 3000); // 3 saniyede bir kayar




/**/


// Tarih ve saat güncellemesi için bir fonksiyon oluşturun
function updateDateTime() {
    var now = new Date();
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    var months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    var hour = now.getHours();
    var minute = now.getMinutes();

    // Saat ve dakikayı iki haneli sayıya dönüştürme
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    // Tarih ve saat bilgisini navbar'a yazdırma
    $('#date-time').html(day + ', ' + date + ' ' + month + ' ' + year + ' ' + hour + ':' + minute);
}

// Sayfa yüklendiğinde ve her saniyede bir tarih ve saat bilgisini güncelleyin
updateDateTime(); // İlk güncelleme
setInterval(updateDateTime, 1000); // Her saniyede bir güncelleme



    // JavaScript
    function changeColor(event) {
        event.preventDefault(); // Sayfanın yenilenmesini engellemek için
        event.target.style.color = "red"; // Link rengini değiştir
    }











