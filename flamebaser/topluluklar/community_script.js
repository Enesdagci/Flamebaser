/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

// Form gönderim işlemini yakala
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderim işlemini engelle
    
    // Kullanıcıdan başlık ve içerik bilgilerini al
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    // Popup mesajı göster
    alert(`Gönderiniz başarıyla paylaşıldı!\nBaşlık: ${title}\nİçerik: ${content}`);

    // Modal'ı kapat
    const postModal = document.getElementById('postModal');
    const modalInstance = bootstrap.Modal.getInstance(postModal);
    modalInstance.hide();

    // Formu sıfırla
    document.getElementById('postForm').reset();
});
// Kategoriler ve ilgili gönderiler
const postsByCategory = {
    "Web Uygulamaları": [
        { title: "Web Uygulamaları Projesi", content: "Yeni başlayanlar için harika bir rehber hazırladım! Detayları inceleyin.", time: "2 saat önce" },
        { title: "Firebase İpuçları", content: "Firebase uygulamalarında performans artırma yöntemleri.", time: "1 gün önce" }
    ],
    "Sunucu Yönetimi": [
        { title: "Sunucu Kurulum Rehberi", content: "Linux sunucular için temel kurulum adımları.", time: "3 gün önce" },
        { title: "Apache vs Nginx", content: "Hangi web sunucusunu seçmeliyim? Detaylı analiz.", time: "5 gün önce" }
    ],
    "Mobil Uygulamalar": [
        { title: "Mobil Uygulama İpuçları", content: "Firebase ile modern UI tasarımı üzerine deneyimlerim.", time: "3 gün önce" }
    ],
    "Yapay Zeka": [
        { title: "Yapay Zeka Çalışmaları", content: "Firebase ile entegreli yapay zeka projelerimi paylaştım.", time: "Dün" },
        { title: "Makine Öğrenimi", content: "Makine öğrenimi projelerinde dikkat edilmesi gerekenler.", time: "2 gün önce" }
    ],
    "Veritabanı Yönetimi": [
        { title: "SQL vs NoSQL", content: "Veritabanı türlerinin karşılaştırması.", time: "4 gün önce" }
    ],
    "Geliştirme Araçları": [
        { title: "Visual Studio Code Eklentileri", content: "Kodlama deneyimini geliştiren en iyi eklentiler.", time: "1 hafta önce" }
    ]
};

// Kullanıcı gönderilerini güncelle
function updatePosts(category) {
    const postSection = document.getElementById("user-posts");
    const posts = postsByCategory[category] || [];

    // Gönderi başlığı ve listeyi temizle
    postSection.innerHTML = "";

    // Yeni başlık ekle
    const titleElement = document.createElement("h4");
    titleElement.textContent = `${category} Gönderileri`;
    postSection.appendChild(titleElement);

    // Yeni gönderileri ekle
    posts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("post-card");
        article.innerHTML = `
            <h5>${post.title}</h5>
            <p>${post.content}</p>
            <small>Gönderildi: ${post.time}</small>
        `;
        postSection.appendChild(article);
    });

    // Eğer kategori boşsa mesaj göster
    if (posts.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Bu kategori için henüz gönderi bulunmamaktadır.";
        emptyMessage.style.color = "#888";
        postSection.appendChild(emptyMessage);
    }
}

// Kategori bağlantılarına tıklama olayını ekle
document.querySelectorAll("aside ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Varsayılan tıklama işlemini engelle
        const category = this.textContent.trim(); // Bağlantının metni kategori adı olarak kullanılır
        updatePosts(category); // Gönderileri güncelle
    });
});

function openSearch() {
    document.getElementById('searchModal').style.display = 'block';
}
  
function closeSearch() {
    document.getElementById('searchModal').style.display = 'none';
}
  
function openSearchPopup() {
      document.getElementById('searchPopup').style.display = 'block';
}
  
function closeSearchPopup() {
      document.getElementById('searchPopup').style.display = 'none';
}
  
function closeSearch() {
      document.getElementById('searchModal').style.display = 'none';
}
  
function handleLogin(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engelle
  
    // Kullanıcı adını al
    const username = document.getElementById('username').value;
  
    if (username) {
        // Pop-up mesajı göster
        alert(`Hoş geldiniz, ${username}!`);
  
        // Modalı kapat
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
  
        // Formu sıfırla
        event.target.reset();
    } else {
        alert("Lütfen kullanıcı adınızı giriniz.");
    }
}

function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
  
    if (email) {
        alert(`Kayıt başarılı! Hoş geldiniz, ${email}!`);
        document.getElementById('id01').style.display = 'none';
        event.target.reset();
    } else {
        alert("Lütfen bilgilerinizi doldurun.");
    }
}
  

  