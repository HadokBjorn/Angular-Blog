import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  isRender:string = "menu-disabled";
  constructor() { }

  ngOnInit(): void {
  }
  menuRender():void{
    if(this.isRender==="menu-disabled"){
      this.isRender = "menu-enabled"
    }else{
      this.isRender = "menu-disabled"
    }
  }

}
