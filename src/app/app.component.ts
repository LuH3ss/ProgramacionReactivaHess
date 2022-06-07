import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from './messages.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  //messages: string[] = [];
  ejemplo = this.messagesService.getData("https://rickandmortyapi.com/api/character");
  resultados: any;
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    // this.messagesService.add('kjzvbkjzsvb');
    // console.log(this.messagesService.messages);
    // console.log('fasfasdfasfas');
    console.log(this.ejemplo);
    this.messagesService.getData("https://rickandmortyapi.com/api/character").subscribe((data: Observable<any>) => {
      console.log(data);
      
    });
    this.siExisten();

  }

  existePersonaje() {
    return new Promise((resolve, reject)=> {
      if(this.resultados) {
        return resolve(this.resultados) ;
        } else {
  
        return reject({message : 'no se encontraron resultados'}) }
      })
  
  }
  siExisten(){
    this.existePersonaje().then((x: any)=>{
      console.log(x);
  
    }).catch((error)=> console.log(error))
}

}