import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() greetMessage: string;
  message = 'Hola Mundo!';

  @Output() messageEvent = new EventEmitter<string>();
 
  private _name: string; 

  @Input()
  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = (name && name.trim()) || "I am default name"; 
  }

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  ngOnInit() {
  }

}
