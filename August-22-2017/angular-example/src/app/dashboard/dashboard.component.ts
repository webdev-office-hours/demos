import { Component } from '@angular/core'; 
import { Router }  from '@angular/router';  
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component ({  
   selector: 'app-root',
   templateUrl: './dashboard.component.html',   
})  

export class DashboardComponent {  

    public list: Object;
    public http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public fetchData() {
        
        this.http.get('http://beta.json-generator.com/api/json/get/EyKt4boUQ')
        .map(res => res.json())
        .subscribe(data => {
            this.list = data
            console.log(this.list[0]);
            console.dir(this.list[0]);        
        });
    }

    public clearData() {
        
        this.list = [];

    }
}