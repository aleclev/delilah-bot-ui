import { AppService } from "../app.service";
import { inject } from "@angular/core";

export const loginGuard = () => {
    const appService = inject(AppService);
    
    return appService.checkCredentials();
}