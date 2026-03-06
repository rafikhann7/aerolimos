import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AeroLimos';
  email = 'aerolimosmontreal@gmail.com';
  phone = '5145948626';
  showCallMenu = false;

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }

  toggleCallMenu(event: Event): void {
    event.stopPropagation();
    this.showCallMenu = !this.showCallMenu;
  }

  closeCallMenu(): void {
    this.showCallMenu = false;
  }
}
