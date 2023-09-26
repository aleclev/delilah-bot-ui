import { AuthService } from "../user/auth.service";
import { inject } from "@angular/core";

export const loginGuard = () => {
    const appService = inject(AuthService);
    
    return appService.checkCredentials();
}