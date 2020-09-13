import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  value = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarheroe(termino:string){
    this.router.navigate(['/buscar',termino])
  }

  onEnter(value: string) { this.value = value; }
}
