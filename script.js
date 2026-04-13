let exp = parseInt(localStorage.getItem("exp")) || 0;
let level = parseInt(localStorage.getItem("level")) || 0;
let streak = parseInt(localStorage.getItem("streak")) || 0;

const levels = [
  "Seer","Clown","Magician","Faceless","Marionettist",
  "Bizarro Sorcerer","Scholar","Miracle","Mysteries","Fool"
];

function update() {
  document.getElementById("level").innerText = "Level: " + levels[level];
  document.getElementById("exp").innerText = "EXP: " + exp + "/400";
  document.getElementById("streak").innerText = "Streak: " + streak;

  localStorage.setItem("exp", exp);
  localStorage.setItem("level", level);
  localStorage.setItem("streak", streak);
}

function addExp(amount) {
  exp += amount;

  if (exp >= 400) {
    exp = 0;
    level++;
    alert("LEVEL UP!");
  }

  update();
}

function completeDay() {
  streak++;
  addExp(30);
}

update();
