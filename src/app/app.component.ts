import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { QuizService } from "./quiz.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-quiz";
  cumulativeScore = 0;
  totalQuestion = 0;
  constructor(private quizService: QuizService, private router: Router) {
    this.storeQuestion();
  }

  storeQuestion() {
    this.quizService.questionAnswerTrigger.subscribe((question) => {
      if (question) {
        this.totalQuestion++;
        this.quizService.questionsArray.push(question);
        question.answer === question.userAnswer && this.cumulativeScore++;
      }
    });
  }
  resetQuiz() {
    this.cumulativeScore = 0;
    this.totalQuestion = 0;
    this.quizService.resetArray();
    this.router.navigate(["../play-quiz"]);
  }
}
