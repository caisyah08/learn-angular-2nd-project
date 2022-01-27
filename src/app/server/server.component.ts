// 3. since typescript wouldn't know component before you import it, so we need to import it first like below
import { Component } from "@angular/core";

/*  1. we need component to use other directives whether it is custom or builtin in the @Component annotation ( source : https://stackoverflow.com/questions/34613065/what-is-the-difference-between-component-and-directive) 
    2. that's why we write it down below ( source : https://angular.io/guide/component-overview)
    4. just empty component wouldn't do, it's nothing valuable for angular so we need to add 
        4.1 selector
        // source : https://www.pluralsight.com/guides/understanding-the-purpose-and-use-of-the-selector-in-angular
            4.1.1 Selector berfungsi untuk mengidentifikasi setiap component secara unik di component tree 
            4.1.2 representasi dari component ini di HTML DOM
        4.2 templateUrl
        // source : https://angular.io/guide/component-overview
            4.2.1 lokasi(path) template html yang akan dipakai di component typescript ini    
        4.3 styleUrls ( optional ) 
        // source : https://angular.io/guide/component-overview
            4.3.1 lokasi(path) file css yang akan dipakai di component typescript ini. bentuknya array krn bisa nerima lebh dari 
                  satu file css
*/
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    // class disini adalah tempat kamu menaruh logika-mu 
    // di sini class ServerComponent akan menciptakan objek berdasarkan logika-mu dan di ekspor supaya bisa dipakai di tempat lain.
    serverId: number = 10;
    serverStatus: string = 'offline';

    /* 
        di bawah ini adalah method. Cara penulisan method pada typescript ada di source bawah
        source: https://www.typescriptlang.org/docs/handbook/2/classes.html#methods
    */
    getServerStatus() {
        //  Q:  kenapa pakai this dan egk langsung serverStatus ? 
        //  A:  dalam method, typescript akan mencari variabel serverStatus yang ada di luar dari class ServerComponent bila tanpa this
        //      makanya this harus disertakan juga biar dia mencari variabel yg ada di dalam class
        return this.serverStatus;
    }
}