import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrase-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  public phrases: Array<Phrase> = PHRASES
  public instruction: string = 'Traduza esta frase:'
  public answer: string = ''
  public round: number = 0
  public roundPhrase: Phrase
  public progress: number = 0
  public attempt: number = 3
  
  @Output() public closeGame: EventEmitter<string> = new EventEmitter;

  constructor() { 
    this.refreshRound()
   }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
  }

  public checkAnswer(): void {
    if(this.answer == this.roundPhrase.phrasePtBr) {
      this.round++
      this.progress = this.progress + (100 / this.phrases.length)

      if(this.round == 4) {
        this.closeGame.emit("vitoria")
      }

      this.refreshRound()
    } else {
      this.attempt--
      if(this.attempt === -1){
        this.closeGame.emit("derrota")
      }

    }
  }

  public refreshRound(): void {
    this.roundPhrase = this.phrases[this.round]
    this.answer = ''
  }


}
