import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export const loginGuard = () => {
    const authService = inject(AuthService);
    
    return authService.isLoggedIn();
}