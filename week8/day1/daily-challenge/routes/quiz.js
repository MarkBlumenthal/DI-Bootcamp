// const express = require('express');
// const router = express.Router();

// // Sample trivia quiz questions and answers
// const triviaQuestions = [
//   { question: "What is the capital of France?", answer: "Paris" },
//   { question: "Which planet is known as the Red Planet?", answer: "Mars" },
//   { question: "What is the largest mammal in the world?", answer: "Blue whale" }
// ];

// let currentQuestionIndex = 0;
// let userScore = 0;

// // GET /quiz: Start the quiz and display the first question
// router.get('/', (req, res) => {
//   currentQuestionIndex = 0;  // Reset the index to 0 for a new quiz start
//   userScore = 0;  // Reset the score for the new quiz session
//   res.json({ question: triviaQuestions[currentQuestionIndex].question });
// });

// // POST /quiz: Submit an answer and move to the next question
// router.post('/', (req, res) => {
//   const userAnswer = req.body.answer;
//   let response = {};

//   // Check if the user's answer is correct
//   if (userAnswer.toLowerCase() === triviaQuestions[currentQuestionIndex].answer.toLowerCase()) {
//     userScore++;
//     response.correct = true;
//     response.feedback = "Correct!";
//   } else {
//     response.correct = false;
//     response.feedback = "Incorrect, the correct answer was: " + triviaQuestions[currentQuestionIndex].answer;
//   }

//   // Move to the next question
//   currentQuestionIndex++;

//   // Check if there are more questions
//   if (currentQuestionIndex < triviaQuestions.length) {
//     response.nextQuestion = triviaQuestions[currentQuestionIndex].question;
//   } else {
//     // No more questions, end the quiz
//     response.message = "Quiz completed. Go to /quiz/score to see your score.";
//     response.finalScore = true;
//     response.score = userScore;
//     response.totalQuestions = triviaQuestions.length;
//   }

//   res.json(response);
// });

// // GET /quiz/score: Display the user’s final score
// router.get('/score', (req, res) => {
//   res.json({
//     score: userScore,
//     totalQuestions: triviaQuestions.length,
//     message: "You've completed the quiz!"
//   });
// });

// module.exports = router;
