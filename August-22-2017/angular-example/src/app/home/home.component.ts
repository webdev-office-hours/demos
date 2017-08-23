import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

declare var jquery:any;
declare var $ :any;

@Component ({  
   template: 'Home Component', 
   templateUrl: './home.component.html',    
   styleUrls: ['./home.component.css']
   
})  
export class HomeComponent { 

    public welcomeMessage: String;
    public list: Object;

    constructor(http: Http) {
        
        this.welcomeMessage = "Welcome to WebDevOfficeHours"
        
        http.get('http://beta.json-generator.com/api/json/get/EyKt4boUQ')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(people => this.list = people);
        
        console.log(this.welcomeMessage);
        console.warn(this.welcomeMessage);        
        console.error(this.welcomeMessage);        
        
        
        console.group("First Group - Pets");        
        this.firstGroup();
        console.groupEnd();  
        console.group("Second Group - States");        
        this.secondGroup();
        console.groupEnd();  
              
        //document.getElementById("welcome-header").className = "small-welcome-header";
        // $( ".big-welcome-header" ).removeClass( "big-welcome-header" ).addClass( "small-welcome-header" );
    }

    firstGroup() {
        console.log("cat");
        console.log("dog");
        console.log("mouse");
    }

    secondGroup() {
        console.log("GA");
        console.log("VA");
        console.log("FL");
    }


} 