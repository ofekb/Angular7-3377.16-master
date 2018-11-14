import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-example',
  templateUrl: './loop-example.component.html',
  styleUrls: ['./loop-example.component.css']
})
export class LoopExampleComponent implements OnInit {

  arr=["Bob","Aluce","Tom"];
  arr2D=[["Bob","Aluce","Tom"], ["green","yellow"],["Jerusalem","Tel-aviv","Haifa","Kfar-sava"]];

  constructor() { }

  ngOnInit() {
  }

}
