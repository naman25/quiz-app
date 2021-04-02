import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  navigateToQuiz() {
    this.router.navigateByUrl("quiz", { skipLocationChange: true });
  }
}
