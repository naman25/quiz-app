import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { QuizSectionComponent } from "./quiz-section/quiz-section.component";

const routes: Routes = [
  { path: "play-quiz", component: HomeComponent },
  { path: "quiz", component: QuizSectionComponent },
  { path: "", redirectTo: "/play-quiz", pathMatch: "full" },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
