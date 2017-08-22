import { Component } from '@angular/core';

@Component ({  
   template: 'Home Component', 
   templateUrl: './home.component.html',      
})  
export class HomeComponent {  
    public welcomeMessage: String;

    constructor() {
        this.welcomeMessage = "Welcome to WebDevOfficeHours"
        console.log(this.welcomeMessage);
        console.warn(this.welcomeMessage);        
        console.error(this.welcomeMessage);        
        
    }
} 