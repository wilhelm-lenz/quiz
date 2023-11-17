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

const showQuestionCard = () => {
  // First check whether all questions have already been answered
  if (indexesOfAnsweredQuestions.length === data.length) {
    exitQuiz();
    return;
  }

  let randomIndex;

  // As long as the generated index has already been used, generate a new one
  do {
    randomIndex = Math.floor(Math.random() * data.length);
  } while (indexesOfAnsweredQuestions.includes(randomIndex));

  // Add the new index to the questions already answered
  indexesOfAnsweredQuestions.push(randomIndex);

  // Display the question card for the new index
  displayQuestionCard(randomIndex);
};

const exitQuiz = () => {
  divElement.innerHTML = "";
  imgElement.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Congratulations, you have reached the end of the game.";
  paragraph.innerHTML += `<br> <span class="score">Your Score: ${score} Point/s</span>`;
  paragraph.classList.add("success-message");
  appendElementsToHTML(sectionElement, paragraph);
};

const displayQuestionCard = (index) => {
  getImageURLFromData(index);
  getQuestionFromData(index);
  getChoiceFromData(index);
  onSelectAnswer(index); // Updated to pass the index
};

const appendElementsToHTML = (htmlParent, htmlChild) => {
  htmlParent.appendChild(htmlChild);
};

const getImageURLFromData = (imgIndexParam) => {
  const imgIndex = imgIndexParam;
  imgElement.setAttribute("src", data[imgIndex].url);
  imgElement.setAttribute(
    "alt",
    `Quiz Image for data Index Number ${imgIndex}`
  );
  appendElementsToHTML(sectionElement, imgElement);
};

const getQuestionFromData = (questionIndexParam) => {
  const questionIndex = questionIndexParam;
  pElement.textContent = data[questionIndex].question;
  appendElementsToHTML(sectionElement, pElement);
};

const getChoiceFromData = (choiceIndexParam) => {
  const choiceIndex = choiceIndexParam;
  appendElementsToHTML(sectionElement, divElement);

  for (let i = 0; i < data[choiceIndex].choice.length; i++) {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("quiz-answer-btn");
    buttonElement.textContent += `${data[choiceIndex].choice[i]}`;
    appendElementsToHTML(divElement, buttonElement);
  }
};

const getAnswerFromData = (answerIndexParam) => {
  const answerIndex = answerIndexParam;
  return data[answerIndex].answer;
};

const setSlideMovement = (leftPos, rightPos) => {
  slideOutIn.style.left = leftPos;
  slideOutIn.style.right = rightPos;
};

const onSelectAnswer = (randomIndex) => {
  let randomNum = randomIndex;
  const answerBtnElements = document.querySelectorAll(".quiz-answer-btn");

  answerBtnElements.forEach((buttonElement) => {
    if (randomNum !== undefined) {
      buttonElement.addEventListener("click", () => {
        const rightAnswer = getAnswerFromData(randomIndex).toString();
        const guessedAnswer = buttonElement.textContent.trim();

        if (rightAnswer === guessedAnswer) {
          buttonElement.style.backgroundColor = "#51cf66";
          score++;
        } else {
          buttonElement.style.backgroundColor = "#f03e3e";
        }

        for (let i = 0; i < answerBtnElements.length; i++) {
          answerBtnElements[i].disabled = true;
        }

        setTimeout(() => {
          setSlideMovement("-100%", "100%");
          sectionElement.innerHTML = "";
          divElement.innerHTML = "";

          // shows the question cards after the first call on click of a Button
          showQuestionCard();

          setTimeout(() => {
            setSlideMovement("100%", "-100%");
            sectionElement.style.visibility = "hidden";

            setTimeout(() => {
              sectionElement.style.visibility = "visible";
              setSlideMovement(0, 0);
            }, 500);
          }, 800);
        }, 2000);
      });
    }
  });
};

// first call of Cards
showQuestionCard();
