# Quiz

Dieses Quiz ist ähnlich wie die deutsche Quiz Show aufgebaut. Es wird ein Bild angezeigt, mit einer dazugehörigen Frage und einigen Antwortmöglichkeiten. Es kann nur ein der Möglichkeiten gewählt werden. Ist die gewählte Antwort richtig, wird diese in grüner Farge hervorgehoben. wenn die gewählte Antwort falsch ist, wird diese in roter Farbe hervorgehoben. Es gibt keinen weiteren Versuch, die weiteren Möglichkeiten können zwar angecklickt werden, sind dann aber ohne Funktion. Nach der Auswahl gleitet die die gesamte Quiz Frage nach links heraus und von rechts erscheint dann die nächste Quiz Frage. Jede dieser Quiz Fragen wird pro gesamtem Spiel immer nur einmal angezeigt. Sind alle Fragen beantwortet kommt eine Nachricht mit der richtig beantworteten Punkte Anzahl.

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

#### Desktop:

![](./assets/img/screenshots/screenshot-desktop.png)

#### Modal for adding movie

![](./assets/img/screenshots/modal-for-adding-movie.png)

#### Flowchart

![](./assets/img/screenshots/flowcharts.png)

#### Starting Project

![](./assets/img/screenshots/project-start.png)

#### Project in Progress

![](./assets/img/screenshots/project-in-progress.png)

### Links

- Solution URL: [index.html](https://github.com/wilhelm-lenz/quiz/blob/main/index.html)
- Solution URL: [style.css](https://github.com/wilhelm-lenz/quiz/blob/main/assets/css/style.css)
- Solution URL: [main.js](https://github.com/wilhelm-lenz/quiz/blob/main/assets/js/main.js)
- Live Page URL: [Quiz Live](https://wilhelm-lenz.github.io/quiz/)

## My Process

### Built With

- Semantic HTML5 markup
- SCSS custom properties
- JavaScript

### What I Learned

During the development of this application, I faced various challenges that I had to overcome. In particular, when selecting genres, I realized that the movies did not update immediately upon clicking, but only after clicking on another genre. This reminded me of the onChange event. With this, the browser can react immediately to changes, and only the movies with the correct genre are displayed.

### Continued Development

In the next phase of development, the focus will be on refactoring the code to improve modularity. Also, adherence to best practices will be emphasized to streamline the code in general. The HTML structure will also be revised for more semantics, and later responsiveness will be added to the project.

### Nützliche Ressourcen

- Netlify - [@app.netlify](https://app.netlify.com/drop/) [@netlify](https://netlify.com): Netlify is a development platform that enables scaling a web application. For example, a programmed web application can easily be converted into a mobile web app.

## Autor

- Wilhelm Lenz - [@wilhelm-lenz](https://github.com/wilhelm-lenz)
