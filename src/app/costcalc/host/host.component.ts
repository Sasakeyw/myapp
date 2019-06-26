import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {


  constructor() { }

  clacList = [
    { itemName: '商品A', kin: null , ryo: null , tanka: null},
    { itemName: '商品B', kin: null , ryo: null , tanka: null},
    { itemName: '商品C', kin: null , ryo: null , tanka: null},
    { itemName: '商品D', kin: null , ryo: null , tanka: null},
  ];

　numberList = [
    { itemName: 1},
    { itemName: 2},
    { itemName: 3},
    { itemName: 4},
  ];

  calcresult = '';
  kinA;
  ryoA;
  kinB;
  ryoB;

  toggleList;
  itemArr: any[];
  ngOnInit() {
  }

  calcAtoB() {
    console.log('clacList');
    console.log(this.clacList);
    const tankaA = this.kinA / this.ryoA;
    const tankaB = this.kinB / this.ryoB;

    if (tankaA > tankaB) {
      this.calcresult = 'Bがお得です。';
    } else if (tankaA < tankaB) {
      this.calcresult = 'Aがお得です。';
    } else {
      this.calcresult = 'AとB同じ値段です。';
    }
    // this.autoCalc();
  }

  clearAtoB() {
    this.kinA = null;
    this.ryoA = null;
    this.kinB = null;
    this.ryoB = null;
    this.calcresult = '';
  }

  autoCalc() {
    console.log('clacList');
    console.log(this.clacList);
    let mintanka = 0;
    this.clacList.forEach(row => {
      row.tanka = row.kin / row.ryo;
      if (mintanka === 0) {
        mintanka = row.tanka;
      } else if ( row.tanka < mintanka) {
        mintanka = row.tanka;
        this.calcresult = row.itemName + 'がお得です。';
      }
    });
    console.log('clacList');
    console.log(this.clacList);
  }

}



