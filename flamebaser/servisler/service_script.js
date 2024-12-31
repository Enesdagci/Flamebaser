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

// Scroll animasyonu için Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
      }
  });
});

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

document.getElementById('loginBtn').addEventListener('click', function(event) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
      alert(`Başarıyla giriş yaptınız! Hoş geldiniz, ${username}!`);
      const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      loginModal.hide();
  } else {
      alert("Lütfen kullanıcı adı ve şifrenizi doldurun.");
  }
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
    
