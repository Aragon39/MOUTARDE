// // Déclaration de variables globales
// let quizData; // Stocke les données du quiz
// let score = 0; // Score pour le nombre de réponses correctes
// let currentQuestionIndex = 0; // Index de la question actuelle

// // Fonction asynchrone pour récupérer le quiz depuis un fichier JSON
// async function récupérerQuiz() {
//   try {
//     // Utilisation de l'API Fetch pour récupérer le fichier JSON
//     const réponse = await fetch("index.json");
//     // Conversion de la réponse en format JSON et assignation à quizData
//     quizData = await réponse.json();
//   } catch (erreur) {
//     // Gestion des erreurs lors de la récupération du quiz
//     console.error("Erreur lors de la récupération du quiz :", erreur);
//   }
// }

// // Fonction pour créer et afficher toutes les questions avec des boutons pour les options de réponse
// function afficherToutesLesQuestions() {
//   // Création d'un conteneur div pour le quiz
//   const quizContainer = document.createElement("div");
//   quizContainer.id = "quiz-container";
//   quizContainer.classList.add("container", "p-4", "rounded");
//   // Ajout du conteneur au corps du document
//   document.body.appendChild(quizContainer);

//   // Itération sur toutes les questions du quiz
//   quizData.quiz.forEach((question, questionIndex) => {
//     // Création d'un élément h3 pour afficher la question
//     const questionElement = document.createElement("h3");
//     questionElement.textContent = `Question ${questionIndex + 1}: ${
//       question.question
//     }`;
//     quizContainer.appendChild(questionElement);

//     // Itération sur toutes les options de réponse de la question
//     question.answers.forEach((option, index) => {
//       // Création d'un bouton Bootstrap pour chaque option
//       const optionButton = document.createElement("button");
//       optionButton.textContent = option.answer;
//       optionButton.classList.add("btn", "btn-primary", "m-1");

//       // Ajout d'un gestionnaire d'événements pour vérifier la réponse
//       optionButton.addEventListener("click", () =>
//         vérifierRéponse(index, questionIndex)
//       );

//       // Ajout du bouton au conteneur du quiz
//       quizContainer.appendChild(optionButton);
//     });

//     // Création d'une ligne de séparation entre les questions
//     const separator = document.createElement("hr");
//     quizContainer.appendChild(separator);
//   });
// }

// // Fonction pour vérifier la réponse sélectionnée
// function vérifierRéponse(selectedAnswer, questionIndex) {
//   // Recherche de l'index de la réponse correcte pour la question actuelle
//   const correctAnswerIndex = quizData.quiz[questionIndex].answers.findIndex(
//     (answer) => answer.correct
//   );
//   // Sélection de tous les boutons du quiz
//   const buttons = document.querySelectorAll("button");

//   if (selectedAnswer === correctAnswerIndex) {
//     // Mise en évidence de la réponse correcte en vert
//     buttons[selectedAnswer + questionIndex * 4].classList.add("btn-success");
//     // Incrémentation du score pour chaque réponse correcte
//     score++;
//   } else {
//     // Mise en évidence de la réponse sélectionnée incorrecte en rouge
//     buttons[selectedAnswer + questionIndex * 4].classList.add("btn-danger");
//     // Mise en évidence de la réponse correcte en vert
//     buttons[correctAnswerIndex + questionIndex * 4].classList.add(
//       "btn-success"
//     );
//   }

//   // Désactivation de tous les boutons de la question actuelle après la sélection
//   buttons.forEach((button, index) => {
//     if (index >= questionIndex * 4 && index < (questionIndex + 1) * 4) {
//       button.disabled = true;
//     }
//   });

//   // Vérification si c'est la dernière question
//   if (questionIndex === quizData.quiz.length - 1) {
//     // Affichage des résultats à la fin du quiz
//     afficherRésultats();
//   }
// }

// // Fonction pour afficher les résultats du quiz
// function afficherRésultats() {
//   // Récupération du conteneur du quiz par son identifiant
//   const quizContainer = document.getElementById("quiz-container");

//   if (!quizContainer) {
//     // Affichage d'une erreur si le conteneur n'est pas trouvé
//     console.error("Élément avec l'id 'quiz-container' non trouvé.");
//     return;
//   }

//   // Création d'un élément h3 pour afficher le score total
//   const résultatElement = document.createElement("h3");
//   résultatElement.textContent = `Fin du quiz !\nScore total : ${score}/${quizData.quiz.length}`;
//   résultatElement.classList.add("text-primary", "h3", "mt-4");
//   // Ajout de l'élément au conteneur du quiz
//   quizContainer.appendChild(résultatElement);

//   let message = "";
//   if (score === quizData.quiz.length) {
//     message = "Félicitations ! Vous avez toutes les bonnes réponses !";
//   } else if (score >= quizData.quiz.length / 2) {
//     message = "Bien joué ! Vous avez obtenu la plupart des bonnes réponses.";
//   } else {
//     message = "Continuez à vous entraîner. Vous pouvez faire mieux !";
//   }

//   // Création d'un élément p pour afficher un message en fonction du score
//   const messageElement = document.createElement("p");
//   messageElement.textContent = message;
//   messageElement.classList.add("text-secondary", "mt-3");
//   // Ajout de l'élément au conteneur du quiz
//   quizContainer.appendChild(messageElement);
// }

// // Appel de la fonction pour récupérer le quiz et afficher les questions
// récupérerQuiz().then(() => {
//   afficherToutesLesQuestions();
// });
