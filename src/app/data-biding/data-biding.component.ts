import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

    public nome: String = "Thallis";
    public idade: number = 23;
    public maisUm: number = 1;

    public checkedDisable: boolean = true;
    public imgSrc: string ="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg"
    public imgTitle:String = "lala"

    public position: {x:number, y:number} = {x:0,y:0}
  constructor() { }

  ngOnInit(): void {}

  public alertInfo (valor: MouseEvent){
    console.log(valor);
  }
  public mouseMove(valor: MouseEvent){
    console.log(valor)
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }
}
