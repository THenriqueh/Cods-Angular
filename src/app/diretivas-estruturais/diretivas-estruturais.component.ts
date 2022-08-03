import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition:boolean = true;
  public conditionClick:boolean=true;
  public list: Array<{nome:string,idade:number}>= [{nome:"Thallis", idade:23},{nome:"Thallis", idade:23},{nome:"Thallis", idade:23}]
  public nome: string = "thallis";

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.condition){
      this.condition = false;
      }else{
        this.condition = true;
      }
    }, 1000)

  }
  public onClick(){
    if(this.condition){
    this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }

  }
  public onClickAddList(){
    this.list.push({nome:"Bianca", idade:14})
  }
  public onClickEventList(event: number){
    this.list.splice(event, 1)
}
}
