$(document).ready(function () {
  // Tarih ve saat güncellemesi için bir fonksiyon oluşturun
  function updateDateTime() {
    var now = new Date();
    var days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    var months = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    var hour = now.getHours();
    var minute = now.getMinutes();

    // Saat ve dakikayı iki haneli sayıya dönüştürme
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    // Tarih ve saat bilgisini navbar'a yazdırma
    $("#date-time").html(
      day + ", " + date + " " + month + " " + year + " " + hour + ":" + minute
    );
  }

  // Sayfa yüklendiğinde ve her saniyede bir tarih ve saat bilgisini güncelleyin
  updateDateTime(); // İlk güncelleme
  setInterval(updateDateTime, 1000); // Her saniyede bir güncelleme
});

var style = document.createElement("style");
style.innerHTML = `
    .card {
        width: 300px; /* Kartların genişliğini belirle */
        height: auto; /* Kartların yüksekliğini otomatik olarak ayarla */
        margin-bottom: 20px; /* Kartlar arasına boşluk ekle */
        display: inline-block; /* Kartları yatayda hizala */
        vertical-align: top; /* Kartları üste hizala */
    }
`;

// Oluşturulan <style> elementini HTML <head> içine ekle
document.head.appendChild(style);

document
  .querySelector(".search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Formun submit işlemini engelle

    var searchQuery = this.querySelector('input[type="text"]').value.trim(); // Arama terimini al ve boşlukları kaldır
    if (searchQuery !== "") {
      // Eğer arama terimi boş değilse
      var found = false; // Arama sonucu bulundu mu?

      // Yemek kartlarını al
      var cards = document.querySelectorAll(".card");

      // Her kartı kontrol et
      cards.forEach(function (card) {
        var recipeName = card.querySelector("p a").textContent.toLowerCase(); // Kartın içindeki tarif adını al ve küçük harfe çevir
        if (recipeName.includes(searchQuery.toLowerCase())) {
          // Eğer tarif adı arama terimini içeriyorsa
          card.style.display = "block"; // Kartı görünür yap
          found = true; // Arama sonucu bulundu olarak işaretle
        } else {
          card.style.display = "none"; // Kartı gizle
        }
      });

      if (!found) {
        alert("Öyle bir tarif bulunamadı."); // Arama sonucu bulunamadıysa kullanıcıya uyarı ver
      }
    } else {
      alert("Lütfen bir arama terimi girin."); // Arama terimi boşsa kullanıcıya uyarı ver
    }
  });

$(document).ready(function () {
  // Simülasyon amaçlı 3 saniye sonra yüklemenin tamamlandığını varsayalım
  setTimeout(function () {
    $(".loader-container").fadeOut();
  }, 1100);
});

// HTML içindeki bir elementi oluştur
var instagramIcon = document.createElement("i");
// İcon sınıfını ekle
instagramIcon.classList.add("fab", "fa-instagram");

// İconu bir link içine yerleştir
var instagramLink = document.createElement("a");
// Linkin href özelliğine Instagram profil URL'sini ata
instagramLink.href = "https://www.instagram.com/burcu.gngr01";
// Linkin içeriğine iconu ekle
instagramLink.appendChild(instagramIcon);

// İlgili HTML elementine linki ekle
document.getElementById("instagramContainer").appendChild(instagramLink);

let ratings = {};

function rateDish(button, rating) {
  const card = button.closest(".card");
  const dishName = card.querySelector("p a").innerText;

  if (!ratings[dishName]) {
    ratings[dishName] = [];
  }

  ratings[dishName].push(rating);
  const averageRating =
    ratings[dishName].reduce((a, b) => a + b) / ratings[dishName].length;

  card.querySelector(".average-rating span").innerText =
    averageRating.toFixed(1);
}

function toggleFavorite(element) {
  element.classList.toggle("favorite");
}

document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    var image = card.querySelector("img");
    var link = card.querySelector("a");

    // Resme tıklanınca tanımlı bağlantıya git
    image.addEventListener("click", function (event) {
      // Tıklanan resmin içindeki bağlantıya git
      window.location.href = link.getAttribute("href");
    });

    // Kartın tüm alanına tanımlı bağlantıya git
    card.addEventListener("click", function (event) {
      // Eğer tıklanan element kartın kendisi değilse, işlemi durdur
      if (event.target !== image) return;
      // Tanımlı bağlantıya git
      window.location.href = link.getAttribute("href");
    });
  });
});

$(document).ready(() => {
  // Yorum ekleme işlevi
  $(".add-comment").on("click", function () {
    const commentInput = $(this).siblings(".comment-input");
    const commentList = $(this).siblings(".comment-list");
    const comment = commentInput.val();

    if (comment) {
      commentList.append(
        `<li>${comment} <button class="remove-comment">Sil</button></li>`
      );
      commentInput.val("");
      saveComments(commentList);
    }
  });

  // Yorum silme işlevi
  $(".comment-list").on("click", ".remove-comment", function () {
    const commentItem = $(this).parent();
    const username = prompt("Kullanıcı adınızı girin:");
    const password = prompt("Şifrenizi girin:");

    // Kullanıcı adı ve şifre doğrulaması
    if (username === "admin" && password === "admin") {
      // Kullanıcı adı ve şifreyi istediğin şekilde ayarlayabilirsin
      commentItem.remove();
      saveComments(commentItem.closest(".comment-list"));
    } else {
      alert("Yanlış kullanıcı adı veya şifre!");
    }
  });

  // Sayfa yüklendiğinde yorumları yükleme
  loadComments();
});

function saveComments(commentList) {
  const comments = [];
  commentList.find("li").each(function () {
    comments.push($(this).text().trim());
  });
  localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const commentList = $(".comment-list");
  commentList.empty();
  comments.forEach((comment) => {
    commentList.append(
      `<li>${comment} <button class="remove-comment">Sil</button></li>`
    );
  });
}

$(function() {
    $(document).tooltip();
  });

  function toggleFavorite(element) {
    if (element.style.color === 'rgb(255, 0, 0)') {
      element.style.color = '#000';
    } else {
      element.style.color = '#ff0000';
    }
  }

  function rateDish(element, rating) {
    var ratingContainer = element.parentElement;
    var averageRatingElement = ratingContainer.nextElementSibling.querySelector('span');
    var currentAverage = parseFloat(averageRatingElement.textContent);
    var newAverage = (currentAverage + rating) / 2;
    averageRatingElement.textContent = newAverage.toFixed(1);
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  $('#backToTop').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });


  function sortCardsByCookTime(order) {
    var cardContainer = document.querySelector('.card-container');
    var cards = cardContainer.querySelectorAll('.card');

    var sortedCards = Array.from(cards).sort(function(a, b) {
        var cookTimeA = parseInt(a.querySelector('.cook-time').textContent.split(' ')[2]);
        var cookTimeB = parseInt(b.querySelector('.cook-time').textContent.split(' ')[2]);
        if (order === 'asc') {
            return cookTimeA - cookTimeB;
        } else {
            return cookTimeB - cookTimeA;
        }
    });

    // Yeni sıralanmış kartları kart konteynerine ekleyin
    cardContainer.innerHTML = '';
    sortedCards.forEach(function(card) {
        cardContainer.appendChild(card);
    });
}

            // Rastgele yemek isimleri
            var meals = [
                "Dana Etli Sebze Çorbası",
                "Mantarlı Kuşkonmaz",
                "Kıymalı Pilav Topları",
                "Kore Usulü Tavuk Salatası",
                "Soya Ezmeli Sebze Çorbası",
                "Tavuk Sebzeli Noodle",
        
            ];
    
            // Rastgele bir yemek seçen fonksiyon
            function getRandomMeal() {
                var randomIndex = Math.floor(Math.random() * meals.length);
                var randomMeal = meals[randomIndex];
                document.getElementById("meal").innerText = randomMeal;
            }

            function startTimer() {
                var minutes = parseInt(document.getElementById("minutes").value) || 0;
                var seconds = parseInt(document.getElementById("seconds").value) || 0;
                var totalSeconds = minutes * 60 + seconds;
    
                var countdown = setInterval(function() {
                    var minutesDisplay = Math.floor(totalSeconds / 60);
                    var secondsDisplay = totalSeconds % 60;
                    document.getElementById("timer").innerText = minutesDisplay + " dk " + secondsDisplay + " sn";
                    totalSeconds--;
    
                    if (totalSeconds < 0) {
                        clearInterval(countdown);
                        document.getElementById("timer").innerText = "Süre doldu!";
                        alert("Süre doldu!");
                    }
                }, 1000);
            }
    

            document.addEventListener("DOMContentLoaded", function() {
                // Sayfa yüklendiğinde animasyonu başlat
                var container = document.querySelector(".container");
                var welcomeText = document.querySelector(".welcome-text");
              
                container.style.display = "block";
                setTimeout(function() {
                  welcomeText.style.opacity = "1";
                }, 2500);
              });

              $(document).ready(function() {
                $('.menu-item').hover(function() {
                    $(this).children('.sub-menu').slideDown();
                }, function() {
                    $(this).children('.sub-menu').slideUp();
                });
            });


            $(document).ready(function () {
              var variable1 = "Hello";
              var variable2 = "World";
              console.log(variable1, variable2);

              // Accessing header data
              var headerData = $("header").data();
              console.log(headerData);

              // Accessing other data
              var otherData = $(".other-element").data();
              console.log(otherData);
            });
          
            // Example jQuery code
            $(".button").click(function() {
              console.log("Button clicked!");
            });

            $("#myForm").submit(function(event) {
              event.preventDefault();
              console.log("Form submitted!");
            });

            $(".menu-item").hover(function() {
              console.log("Mouse entered the menu item");
            }, function() {
              console.log("Mouse left the menu item");
            });

            $(".accordion").on("click", ".accordion-header", function() {
              console.log("Accordion header clicked!");
              $(this).next(".accordion-content").slideToggle();
            });

            $(".carousel").slick({
              // Configure the carousel options
              slidesToShow: 3,
              autoplay: true,
              arrows: false,
              dots: true
            });

            $(".modal").on("show.bs.modal", function() {
              console.log("Modal is shown");
            });

            $(".tab").click(function() {
              // Switch tabs when a tab is clicked
              var tabId = $(this).attr("data-tab");
              $(".tab-content").hide();
              $("#" + tabId).show();
            });