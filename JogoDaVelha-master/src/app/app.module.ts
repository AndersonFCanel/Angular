import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectHeroComponent } from './components/select-hero/select-hero.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { SearchInputComponent } from './components/ui/search-input/search-input.component';
import { HeroCardComponent } from './components/game-panel/hero-card/hero-card.component';
import { GamePanelComponent } from './components/game-panel/game-panel.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { BoardCellComponent } from './components/game-board/board-cell/board-cell.component';
import { ScoreboardComponent } from './components/game-panel/scoreboard/scoreboard.component';
import { HttpConfigInterceptor } from './interceptor/http-config.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      SelectHeroComponent,
      TicTacToeComponent,
      SearchInputComponent,
      HeroCardComponent,
      GamePanelComponent,
      GameBoardComponent,
      BoardCellComponent,
      ScoreboardComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
