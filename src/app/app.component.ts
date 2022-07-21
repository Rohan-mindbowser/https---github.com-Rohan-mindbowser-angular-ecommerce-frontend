import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jewellery-frontend';

  ngOnInit(): void {
    localStorage.setItem(
      'token',
      'asdwqe123123asyuyt87212i323bjhsd67567'
    );
  }
}
