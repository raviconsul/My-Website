import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(`Navigation Component initialised.`);
    
  }

  goHome(){
    console.log(`Home request.`);

  }
  goAbout(){
    console.log(`About request.`);

  }
  goProject(){
    console.log(`Project request.`);
    
  }
  goContact(){
    console.log(`Contact request.`);
    
  }

}
