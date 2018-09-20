import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gameInProcess: boolean = true
  public closureType: string

  public closeGame(type: string): void {
    this.gameInProcess = false
    this.closureType = type
  }

  public restartGame():void {
    this.gameInProcess = true
    this.closureType = undefined
  }
}
