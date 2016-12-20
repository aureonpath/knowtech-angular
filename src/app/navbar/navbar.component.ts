import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
    constructor(private router: Router) { }
    
    public isCurrentRoute = (route: string): boolean => {
        return this.router.isActive(route, false);
    }
}