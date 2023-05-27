import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  isRender:string = "menu-disabled";
  logoImage: string = "https://cdn.dribbble.com/users/297873/screenshots/10694373/media/dc1ee39bd96cddf2527d0817822d55f0.jpg?compress=1&resize=400x300&vertical=top"
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
