function tampilkanForm() {
    document.getElementById('rsvpForm').style.display = 'block';
  }

  function tutupForm() {
    document.getElementById('rsvpForm').style.display = 'none';
  }

    document.getElementById("formRSVP").addEventListener("submit", function(e) {
      e.preventDefault(); // mencegah reload
      const nama = document.getElementById("nama").value;
      const kehadiran = document.getElementById("kehadiran").value;
      alert("Terima kasih, " + nama + "! RSVP Anda: " + kehadiran);
      this.reset();
      tutupForm(); // otomatis menutup form setelah submit
    });

function bukaUndangan() {
    const lockScreen = document.getElementById("opening");
    const lagu = document.getElementById("lagu");
    lockScreen.style.animation = "slideUpFadeOut 1s ease forwards";
    lagu.play();

    setTimeout(() => {
      lockScreen.style.display = "none";
    }, 1000);
  }

  var countDown = new Date("June 8, 2025 20:00:00").getTime();
    
        var x = setInterval(function() {
    
        var now = new Date().getTime();
    
        var distance = countDown - now;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("day").innerText = days;
        document.getElementById("hour").innerText = hours;
        document.getElementById("minute").innerText = minutes;
        document.getElementById("second").innerText = seconds;
     
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").style.display = 'none';
            document.getElementById("peringatan").style.display = 'block';
        }
        }, 1000);

        let isPlaying = false;
  const tombol = document.getElementById("tombolMusik");

  function toggleMusik() {
    if (isPlaying) {
      lagu.play();
      tombol.textContent = "Play";
    } else {
      lagu.pause();
      tombol.textContent = "Pause";
    }
    isPlaying = !isPlaying;
  }

  function buatBunga() {
      const bunga = document.createElement('div');
      bunga.classList.add('bunga');
      bunga.style.left = Math.random() * window.innerWidth + 'px';
      bunga.style.animationDuration = (3 + Math.random() * 5) + 's';
      document.body.appendChild(bunga);
setTimeout(() => {
        bunga.remove();
      }, 8000);}
setInterval(buatBunga, 400);
    
        