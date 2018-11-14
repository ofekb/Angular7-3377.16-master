import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PositionType } from '../position-type';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatrixComponent implements OnInit {

  num: number = 3;

  // create empty matrix with the rank of the input number
  mat: PositionType[][];

  constructor() {
    this.initMatrix();
  }


  convertToEnum(index:number){
    return PositionType[index];
  }


  incMatrix(flag:boolean){
    this.num+=flag?1:-1;
    this.initMatrix();
  }


  initMatrix() {
    this.mat = new Array<Array<PositionType>>(this.num);

    for (let i = 0; i < this.mat.length; i++) {
      this.mat[i] = new Array<PositionType>(this.num);
    }


    //fill every element in the matrix with a matching description
    for (let i = 0; i < this.mat.length; i++) {
      for (let j = 0; j < this.mat.length; j++) {
        if ((i == j) && (i + j == (this.num - 1)))
          this.mat[i][j] = PositionType.center;
        else if (i == j)
          this.mat[i][j] = PositionType.main;
        else if (i + j == (this.num - 1))
          this.mat[i][j] = PositionType.sub;
        else if (i < j)
          this.mat[i][j] = PositionType.up;
        else
          this.mat[i][j] = PositionType.down;
      }
    }
  }




  ngOnInit() {
  }

}
