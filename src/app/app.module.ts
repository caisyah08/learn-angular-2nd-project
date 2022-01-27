/*  Q: Apa itu module ? 
    A:  module adalah wadah (container), dengan kata lain module bisa didefinisikan sebagai : 
        1. mekanisme untuk mengelompokkan *components*, *services*, *directives*, dan *pipes* 
        // source : https://dotnettutorials.net/lesson/modules-angular-application/
        2. gabungan fungsionalitas yang memberitahu angular fitur2 apa sih yang digunakan oleh aplikasi kita.
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// 4. itulah mengapa ServerComponent juga perlu di import di atas.
// 5. btw, nama ServerComponent itu berasal dari class yg ada di server.component.ts lho
import { ServerComponent } from './server/server.component';

// @ adalah penanda bahwa dia adalah decorator jadi NgModule adalah decorator
@NgModule({
/*  1.  brhubung angular TIDAK SCAN semua file yg kita punya, kalau kita dideklarasi componen kita maka angular tidak akan tahu component
        baru yg kita buat.
    2.  Itulah kenapa ServerComponent yg kita baru buat, harus dideklarasi di declarations.
*/
  declarations: [
    AppComponent,
  /*  3.  berhubung angular ini menggunakan typescript, jadi kalau hanya deklarasi di "declarations" saja akan membuat error
          karena typescript tidak tahu dimana bisa menemukan serverComponent ini 
  */
    ServerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
