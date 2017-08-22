import { Component } from '@angular/core';

@Component ({  
   template: 'Home Component', 
   templateUrl: './home.component.html',      
})  
export class HomeComponent {  
    public welcomeMessage: String;

    constructor() {
        this.welcomeMessage = "Welcome to WebDevOfficeHours"
        // console.log(this.welcomeMessage);
        // console.warn(this.welcomeMessage);        
        // console.error(this.welcomeMessage);        
        
        // console.group("First Group - Pets");        
        // this.firstGroup();
        // console.groupEnd();  
        // console.group("Second Group - States");        
        // this.secondGroup();
        // console.groupEnd();        
    }

    // firstGroup() {
    //     console.log("cat");
    //     console.log("dog");
    //     console.log("mouse");
    // }

    // secondGroup() {
    //     console.log("GA");
    //     console.log("VA");
    //     console.log("FL");
    // }
} 