🏀 Basketball Scoreboard

A simple and interactive Basketball Scoreboard built using HTML, CSS, and JavaScript.
It allows users to update the score for Home and Guest teams with buttons for +1, +2, +3 points.
The layout is responsive and styled to look like a digital LED scoreboard.

🚀 Features

Real-time score updates for both teams

Separate buttons for +1, +2, and +3 point scoring

Clean and modern UI layout

Digital scoreboard design with glowing neon effect

Fully responsive using Flexbox

Reset functionality

🛠 Technologies Used
Technology	Purpose
HTML5	Structure and UI elements
CSS3	Styling, layout, and design enhancements
JavaScript (DOM)	Score update logic and interactivity

📂 Project Structure
/basketball-scoreboard
│── index.html
│── style.css
│── script.js
└── README.md

💡 How It Works

Score values are displayed inside elements with IDs like:

<span id="hScore"></span>
<span id="gScore"></span>


JavaScript functions update score values when buttons are clicked:

homescore += 1;
hscoreEl.textContent = homescore;


Flexbox is used to position Home and Guest sides equally on the screen.

🎯 Future Enhancements

Add countdown timer (24-second shot clock)

Highlight the team currently leading

Add sound effects for scoring and buzzer

📦 Installation / Usage

Clone the repository:

git clone https://github.com/ramakrishna-112/basketball-scoreboard.git


Open index.html in any browser

Start clicking score buttons to play!

🤝 Contributions

Contributions, issues, and feature requests are welcome.

📜 License

This project is free to use for learning and personal projects.

👤 Author

Rama Krishna
Made while learning DOM manipulation & front-end basics.
