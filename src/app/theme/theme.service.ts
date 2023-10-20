import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    if (!document.documentElement.className) {
      if (localStorage.getItem("theme")) {
        let currentTheme = localStorage.getItem("theme")?.valueOf() as string;
        document.documentElement.className = currentTheme;
      } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.className = "dark";
      }
    }
  }

  public switchTheme(): void {
    let currentTheme: string | null = localStorage.getItem("theme");

    if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.className = "dark";
    }
    else {
      localStorage.setItem("theme", "light");
      document.documentElement.className = "light";
    }
  }

  public displayLightTheme(): boolean {
    return localStorage.getItem("theme") === "light";
  }

}
