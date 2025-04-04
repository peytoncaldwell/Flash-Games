<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click the Button</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        #game-button {
            padding: 20px;
            font-size: 20px;
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
        }
        #restart-button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 5px;
            display: none;
        }
        #timer {
            font-size: 18px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Click the Button Game</h1>
    <p>Click the button as fast as you can!</p>
    <button id="game-button" onclick="increaseScore()">Click Me!</button>
    <h2>Your score: <span id="score">0</span></h2>
    <p id="timer">Time: 0s</p>
    <button id="restart-button" onclick="restartGame()">Restart</button>

    <script>
        let score = 0;
        let timeLeft = 30;
        let timer;
        let isGameOver = false;

        function startTimer() {
            timer = setInterval(function() {
                timeLeft--;
                document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
                if (timeLeft === 0) {
                    clearInterval(timer);
                    endGame();
                }
            }, 1000);
        }

        function increaseScore() {
            if (!isGameOver) {
                score++;
                document.getElementById("score").innerText = score;
            }
        }

        function endGame() {
            isGameOver = true;
            document.getElementById("game-button").disabled = true;
            document.getElementById("restart-button").style.display = "block";
        }

        function restartGame() {
            score = 0;
            timeLeft = 30;
            document.getElementById("score").innerText = score;
            document.getElementById("timer").innerText = `Time: 0s`;
            isGameOver = false;
            document.getElementById("game-button").disabled = false;
            document.getElementById("restart-button").style.display = "none";
            startTimer();
        }

        // Start the game timer
        startTimer();
    </script>
</body>
</html>
