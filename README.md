# 🎯 Guess the Number Game!

A fun, interactive browser game where players try to guess a randomly chosen number between 1 and 99 — all within 7 attempts!

## 🕹️ Game Features

- 🎲 Random number generated each round
- 🔢 Up to 7 attempts per game
- 📉 Feedback after each guess: _"Too High"_ or _"Too Low"_
- 🔊 Sound effects for win, loss, and incorrect guesses
- 🏆 Tracks your **wins** and **losses**
- 🎨 Clean, responsive UI with playful fonts and background
- 🔄 Simple reset functionality to start a new round

## 🚀 Live Demo

👉 Play it [here](https://deborah-shaw.github.io/Guess-the-Number-Game/)

## 🗂️ Project Structure

```text
📦 guess-the-number/  
 ┣ 📁 css/  
 ┃ ┗ 📄 style.css           # 🎨 All styling for the game's layout and UI  
 ┣ 📁 js/  
 ┃ ┗ 📄 script.js           # 🧠 Main JavaScript file handling game logic  
 ┣ 📁 sounds/
 ┃ ┣ 📄 win.wav             # 🔊 Win sound
 ┃ ┣ 📄 lose.wav            # 🔊 Lose wound
 ┃ ┗ 📄 wrong.wav           # 🔊 Incorrect guess sound
 ┣ 📁 img/  
 ┃ ┗ 📄 numbers.jpg         # 🖼️ Background image of numbers  
 ┣ 📄 index.html            # 🏠 Main HTML file for the game interface  
```

## 🛠️ Tech Used

- **HTML5** – For content structure
- **CSS3** – For layout, fonts, and visual effects
- **JavaScript** – Handles game logic and DOM manipulation
- **Google Fonts** – Rubik Distressed, Shantell Sans, DynaPuff

## ✅ How to Play

1. Enter a number between 1 and 99.
2. Click "Is this correct?" to submit your guess.
3. Get feedback and try again — you have up to 7 tries.
4. If you win or lose, click **"Challenge Again"** to start a new game.

## 🧠 Behind the Scenes

This game uses:
- `Math.random()` to generate a random number between 1 and 99
- DOM event listeners to handle button clicks and input
- A simple ensemble of HTML elements updated dynamically to reflect game state

## 🔊 Sound Effects

This game includes interactive audio feedback to enhance the player experience:
- ✅ Win sound plays when the correct number is guessed
- ❌ Lose sound plays when all attempts are used
- 🔼🔽 Wrong guess sound plays for high/low guesses

## 📱 Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Edge
- Safari

## 💡 Future Improvements

- 🎚 Difficulty levels (Easy / Medium / Hard)
- 📱 Mobile responsiveness
- 🔊 Sound effects for feedback
- ⏱ Add a timer mode
- 💾 Track high scores using local storage

## 📄 License

This project is licensed under the MIT License.
