import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  public switchTheme(): void {
    let currentTheme: string | null = localStorage.getItem("theme");

    if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
    }
    else {
      localStorage.setItem("theme", "light")
    }
  }

  public displayLightTheme(): boolean {
    return localStorage.getItem("theme") === "light";
  }

}
