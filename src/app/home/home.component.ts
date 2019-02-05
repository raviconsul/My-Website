import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = `</Welcome>`

  constructor(private router:Router) { }

  ngOnInit() {
    console.log(`Home Component initialsed.`);
    
  }

  goAbout(){
    console.log(`About request.`);
    this.router.navigate(['/about']);
  }

}
