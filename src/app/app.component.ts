import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AeroLimos';
  email = 'rafikhanna7@aol.com';
  phone = '5145948626';

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}
