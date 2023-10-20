import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private displayLight: boolean = false;

  constructor() { }

  public switchTheme(): void {
    this.displayLight = !this.displayLight;
  }

  public displayLightTheme(): boolean {
    return this.displayLight;
  }

}
