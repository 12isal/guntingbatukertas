// snake-game.js

document.addEventListener("DOMContentLoaded", function() {
    const gameArea = document.getElementById("gameArea");
    const scoreDiv = document.getElementById("score");
    const messageDiv = document.getElementById("message");
    const snakePartSize = 20;
    const initialSnakeLength = 5;
  
    let snake = [];
    let apple = {};
    let score = 0;
    let direction = "right";
    let gameLoop;
  
    // Fungsi untuk memulai permainan
    function startGame() {
      // Set ulang variabel permainan
      snake = [];
      apple = {};
      score = 0;
      direction = "right";
      gameLoop = null;
  
      // Bersihkan area permainan
      gameArea.innerHTML = "";
      scoreDiv.textContent = "Score: " + score;
      messageDiv.textContent = "";
  
      // Buat ular awal
      for (let i = 0; i < initialSnakeLength; i++) {
        const snakePart = createSnakePart(i * snakePartSize, 0);
        snake.push(snakePart);
      }
  
      // Buat apel awal
      createApple();
  
      // Mulai pergerakan ular
      gameLoop = setInterval(moveSnake, 200);
    }
  
    // Fungsi untuk membuat bagian ular
    function createSnakePart(x, y) {
      const snakePart = document.createElement("div");
      snakePart.className = "snakePart";
      snakePart.style.left = x + "px";
      snakePart.style.top = y + "px";
      gameArea.appendChild(snakePart);
      return snakePart;
    }
  
    // Fungsi untuk membuat apel
    function createApple() {
      const maxX = gameArea.clientWidth - snakePartSize;
      const maxY = gameArea.clientHeight - snakePartSize;
      const appleX = Math.floor(Math.random() * maxX / snakePartSize) * snakePartSize;
      const appleY = Math.floor(Math.random() * maxY / snakePartSize) * snakePartSize;
      apple = document.createElement("div");
      apple.id = "apple";
      apple.style.left = appleX + "px";
      apple.style.top = appleY + "px";
      gameArea.appendChild(apple);
    }
  
    // Fungsi untuk menggerakkan ular
    function moveSnake() {
      // Fungsi untuk menggerakkan ular
    const head = snake[0];
    let newX = head.offsetLeft;
    let newY = head.offsetTop;
  
    switch (direction) {
      case "right":
        newX += snakePartSize;
        break;
      case "left":
        newX -= snakePartSize;
        break;
      case "up":
        newY -= snakePartSize;
        break;
      case "down":
        newY += snakePartSize;
        break;
    }
  
    // Cek jika ular menabrak dinding atau tubuhnya sendiri
    if (newX < 0 || newX >= gameArea.clientWidth || newY < 0 || newY >= gameArea.clientHeight || checkCollision(newX, newY)) {
      stopGame();
      return;
    }
  
    // Cek jika ular memakan apel
    if (newX === apple.offsetLeft && newY === apple.offsetTop) {
      // Perbarui skor
      score++;
      scoreDiv.textContent = "Score: " + score;
  
      // Tambahkan bagian ular baru pada posisi kepala yang baru
      const newSnakePart = createSnakePart(newX, newY);
      snake.unshift(newSnakePart);
  
      // Hapus apel yang dimakan
      gameArea.removeChild(apple);
  
      // Buat apel baru
      createApple();
    } else {
      // Pindahkan ular dengan menghapus bagian ekor dan menambahkan bagian baru pada posisi kepala yang baru
      const tail = snake.pop();
      tail.style.left = newX + "px";
      tail.style.top = newY + "px";
      snake.unshift(tail);
    }
  }
  
  // Fungsi untuk memeriksa tabrakan ular dengan dinding atau tubuhnya sendiri
  function checkCollision(x, y) {
    // Periksa tabrakan dengan dinding
    if (x < 0 || x >= gameArea.clientWidth || y < 0 || y >= gameArea.clientHeight) {
      return true;
    }
  
    // Periksa tabrakan dengan tubuh ular itu sendiri
    for (let i = 1; i < snake.length; i++) {
      if (x === snake[i].offsetLeft && y === snake[i].offsetTop) {
        return true;
      }
    }
  
    return false;
  }
  
    
  
    // Fungsi untuk mengupdate skor
    function updateScore() {
      // Kode update skor
    }
  
    // Fungsi untuk mengupdate pesan permainan
    function updateMessage(message) {
      // Kode update pesan permainan
    }
  
    // Fungsi untuk menghentikan permainan
    function stopGame() {
      // Kode berhenti permainan
    }
  
    // Panggil fungsi startGame untuk memulai permainan saat halaman dimuat
    startGame();
  });

  
  