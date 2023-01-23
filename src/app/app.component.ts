import { Component } from '@angular/core';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]> | undefined;


  ngOnInit(){
    this.componentes = this.dataService.getMenuOpts();

  }

  constructor(private dataService: DataService) {}

  initializeApp(){
    this.componentes = this.dataService.getMenuOpts();
  }
}
