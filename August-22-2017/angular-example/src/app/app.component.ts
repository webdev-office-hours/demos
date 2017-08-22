import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1 class="title">Angular Router</h1>
  //   <nav>
  //     <a routerLink="/home" routerLinkActive="active">Crisis Center</a>
  //     <a routerLink="/login" routerLinkActive="active">Heroes</a>
  //     <a routerLink="/dashboard" routerLinkActive="active">Admin</a>
  //   </nav>
  //   <router-outlet></router-outlet>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
