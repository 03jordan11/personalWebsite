import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNavbar() {
    let header = document.getElementById('header');
    let dot = document.getElementById('headerDot');

    let animDuration = 250;

    if (header != null && dot != null) {
      if (header.style.display == ''){
        header.style.display = 'flex'

        header.animate([
          {height: '0px'},
          {height: '60px'}
        ], {
          duration: animDuration
        })
  
        dot.animate([
          {top: '-30px'},
          {top: '30px'}
        ], 
          {
          duration: animDuration
        }).onfinish = () => {
          if(dot != null) {
            dot.style.top = '30px';
          }
        };
      } 
      else {
        header.animate([
          {height: '60px'},
          {height: '0px'}
        ], {
          duration: animDuration
        }).onfinish = () => {
          if(header != null) {
            header.style.display = '';
          }
        }
  
        dot.animate([
          {top: '20px'},
          {top: '-30px'}
        ], 
          {
          duration: animDuration
        }).onfinish = () => {
          if(dot != null) {
            dot.style.top = '-30px';
          }
        };

      }
    }
  }

}
