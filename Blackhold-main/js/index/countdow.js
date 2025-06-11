function updateCountdown() {
      const countdown = document.getElementById("countdown");
      const now = new Date();
      const matchTime = new Date(now.getFullYear(), 5, 21, 17, 30, 0);
      let diff = matchTime - now;

      if (diff < 0) {
        countdown.textContent = "00:00:00";
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      diff %= (1000 * 60 * 60 * 24);
      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      diff %= (1000 * 60 * 60);
      const minutes = String(Math.floor(diff / (1000 * 60))).padStart(2, '0');
      diff %= (1000 * 60);
      const seconds = String(Math.floor(diff / 1000)).padStart(2, '0');

      countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();