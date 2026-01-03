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

  const allQuestions = document.querySelectorAll(".question");

  currentQuiz.forEach((q, index) => {
    const questionDiv = allQuestions[index];
    const options = document.querySelectorAll(`input[name="q${index}"]`);

    let isAnswered = false;
    let isCorrect = false;

    options.forEach(input => {
      const label = input.parentElement;
      label.classList.remove("correct", "wrong");

      // mark correct option
      if (parseInt(input.value) === q.answer) {
        label.classList.add("correct");
      }

      if (input.checked) {
        isAnswered = true;
        if (parseInt(input.value) === q.answer) {
          isCorrect = true;
          score++;
        } else {
          label.classList.add("wrong");
        }
      }
    });

    // remove old states
    questionDiv.classList.remove(
      "correct-question",
      "wrong-question",
      "unanswered-question"
    );

    // apply new state
    if (!isAnswered) {
      questionDiv.classList.add("unanswered-question");
    } else if (isCorrect) {
      questionDiv.classList.add("correct-question");
    } else {
      questionDiv.classList.add("wrong-question");
    }
  });

  document.getElementById("result").innerText =
    `Your Score: ${score} / ${currentQuiz.length}`;
}
