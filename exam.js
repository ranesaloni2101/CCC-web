function loadQuiz(quizData) {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
      <p>Q${index + 1}. ${q.question}</p>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label>
            <input type="radio" name="q${index}" value="${i}">
            ${opt}
          </label>
        `).join("")}
      </div>
    `;
    quiz.appendChild(div);
  });
}

function submitExam() {
  let score = 0;

  currentQuiz.forEach((q, index) => {
    const options = document.querySelectorAll(`input[name="q${index}"]`);
    options.forEach(opt => {
      const label = opt.parentElement;
      label.classList.remove("correct", "wrong");

      if (parseInt(opt.value) === q.answer) {
        label.classList.add("correct");
      }

      if (opt.checked && parseInt(opt.value) !== q.answer) {
        label.classList.add("wrong");
      }

      if (opt.checked && parseInt(opt.value) === q.answer) {
        score++;
      }
    });
  });

  document.getElementById("result").innerText =
    `Score: ${score} / ${currentQuiz.length}`;
}