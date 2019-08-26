import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message: string = "I am Parent";
  childmessage: string = "I am passed from Parent to child component";
  childNameArray = ['foo', 'koo', ' ', 'moo', 'too', 'hoo', ''];
  parentMessage: string;
  setMessageFromChild: string;

  // Using ViewChild to access properties of a child

  @ViewChild(ChildComponent, {static: false}) child;

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.setMessageFromChild = $event;
  }

  ngAfterViewInit() {
    this.parentMessage = this.child.message
  }

}
