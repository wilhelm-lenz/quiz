"use strict";

let data = [
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
    question: "Which ocean lies on the east coast of the United States?",
    choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
    answer: "Atlantic",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
    question: "Which is the world's highest mountain?",
    choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
    answer: "Mount Everest",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
    question: "Which of these cities is not in Europe?",
    choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
    answer: "Moscow",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
    question: "True or False: Iceland is covered in ice.",
    choice: [true, false],
    answer: false,
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "The United Kingdom is comprised of how many countries?",
    choice: [1, 2, 3, 4],
    answer: 4,
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "Which of the following countries do not border France?",
    choice: ["Germany", "Netherlands", "Spain", "Italy"],
    answer: "Netherlands",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
    question: "Which U.S. state is the Grand Canyon located in?",
    choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
    answer: "Arizona",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
    question: "Which is the smallest country, measured by total land area?",
    choice: ["Maldives", "Monaco", "Vatican"],
    answer: "Vatican",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
    question: "Which is the longest river in the world?",
    choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
    answer: "Nile River",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
    question: "Which is the largest body of water?",
    choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
    answer: "Pacific Ocean",
  },
];

const sectionElement = document.querySelector("#content");
const imgElement = document.createElement("img");
const pElement = document.createElement("p");
const divElement = document.createElement("div");
const indexesOfAnsweredQuestions = [];
let score = 0;

sectionElement.classList.add("section-quiz");
sectionElement.classList.add("slide-out-in");
imgElement.classList.add("quiz-image");
pElement.classList.add("quiz-question");
divElement.classList.add("quiz-answer-btns-wrapper");

const slideOutIn = document.querySelector(".slide-out-in");

const selectAnswer = (randomIndex) => {
  let randomNum = randomIndex;

  const answerBtnElements = document.querySelectorAll(".quiz-answer-btn");
  answerBtnElements.forEach((buttonElement) => {
    if (
      !buttonElement.hasAttribute("data-listener-added") &&
      randomNum !== undefined
    ) {
      buttonElement.setAttribute("data-listener-added", "true");
      buttonElement.addEventListener("click", () => {
        const rightAnswer = getAnswer(randomIndex).toString();
        const guessedAnswer = buttonElement.textContent.trim();

        if (rightAnswer === guessedAnswer) {
          buttonElement.style.backgroundColor = "#51cf66";
          score++;
        } else {
          buttonElement.style.backgroundColor = "#ff6b6b";
        }

        for (let i = 0; i < answerBtnElements.length; i++) {
          answerBtnElements[i].disabled = true;
        }

        setTimeout(() => {
          slideOutIn.style.left = "-100%";
          slideOutIn.style.right = "100%";

          sectionElement.innerHTML = "";
          divElement.innerHTML = "";

          showQuestionCard();

          setTimeout(() => {
            slideOutIn.style.left = "100%";
            slideOutIn.style.right = "-100%";
            sectionElement.style.visibility = "hidden";

            setTimeout(() => {
              sectionElement.style.visibility = "visible";
              slideOutIn.style.left = 0;
              slideOutIn.style.right = 0;
            }, 500);
          }, 800);
        }, 2000);
      });
    }
  });
};

const showQuestionCard = () => {
  if (indexesOfAnsweredQuestions.length === data.length) {
    endQuiz();
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * data.length);
  } while (indexesOfAnsweredQuestions.includes(randomIndex));

  indexesOfAnsweredQuestions.push(randomIndex);
  displayQuestionCard(randomIndex);
};

const endQuiz = () => {
  divElement.innerHTML = "";
  imgElement.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Congratulations, you have reached the end of the game.";
  paragraph.innerHTML += `<br> <span class="score">Your Score: ${score} Point/s</span>`;
  paragraph.classList.add("success-message");
  sectionElement.appendChild(paragraph);
};

const displayQuestionCard = (index) => {
  getImageURL(index);
  getQuestion(index);
  getChoice(index);
  selectAnswer(index);
};

const getImageURL = (imgIndexParam) => {
  const imgIndex = imgIndexParam;
  imgElement.setAttribute("src", data[imgIndex].url);
  imgElement.setAttribute(
    "alt",
    `Quiz Image for data Index Number ${imgIndex}`
  );
  sectionElement.appendChild(imgElement);
};

const getQuestion = (questionIndexParam) => {
  const questionIndex = questionIndexParam;
  pElement.textContent = data[questionIndex].question;
  sectionElement.appendChild(pElement);
};

const getChoice = (choiceIndexParam) => {
  const choiceIndex = choiceIndexParam;
  sectionElement.appendChild(divElement);
  divElement.innerHTML = "";

  for (let i = 0; i < data[choiceIndex].choice.length; i++) {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("quiz-answer-btn");
    buttonElement.textContent += `${data[choiceIndex].choice[i]}`;
    divElement.appendChild(buttonElement);
  }
  selectAnswer();
};

const getAnswer = (answerIndexParam) => {
  const answerIndex = answerIndexParam;
  return data[answerIndex].answer;
};

showQuestionCard();
