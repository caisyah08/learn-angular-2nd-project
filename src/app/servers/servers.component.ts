import { Component, OnInit } from '@angular/core';

@Component({
  /*
    1. selector tidak terbatas hanya di element saja. contoh ( app-servers adalah element ) tapi juga bisa utk attribute, class, dll
    source : https://angular.io/api/core/Directive#selector
  */

  /* 2. contohnya jika kita ingin menggunakannya sbg attribute di html, kita bisa memanggil selectornya sbg attribute dengan cara
    [app-servers] dan tempelkan sbg attribute di element html
  */
  // selector: '[app-servers]',

  /* 3. contohnya jika kita ingin menggunakannya sbg class di html, kita bisa memanggil selectornya sbg attribute dengan cara
    [app-servers] dan tempelkan sbg attribute di element html
  */
  // selector: '.app-servers',
  // 4. tapi untuk component, pada umumnya yg digunakan adalah element
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  //penamaan on di sini untuk memberitahu kalau method di bawah ini akan di trigger di template ini
  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created!' 
  }

  //  Q;  kenapa pakai HTMLInputElement ?
  //  A:  https://stackoverflow.com/questions/52325814/why-we-are-using-htmlinputelement-in-typescript
  /*  
    pada typescript parameternya harus dideklarasikan apa tipeny 
    (source : https://www.typescriptlang.org/docs/handbook/2/classes.html#overriding-methods)
    karena ini event, maka dideklarasi sbg event
  */
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
