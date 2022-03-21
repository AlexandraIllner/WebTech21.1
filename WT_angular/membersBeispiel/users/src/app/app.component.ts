import { Component } from '@angular/core';

@Component({
  //app kann geändert werden, dann aber überall [neuerName]-[component]
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';
}
