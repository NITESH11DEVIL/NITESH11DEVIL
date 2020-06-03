import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  now: number = Date.now();

  constructor() { 
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  ngOnInit(): void {
  }

}
