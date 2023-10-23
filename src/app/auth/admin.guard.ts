import { inject } from "@angular/core";
import { DelilahUserService } from "../user/delilahUser/delilah-user.service";
import { Role } from "../models/delilah/role";
import { DelilahUser } from "../models/delilah/delilah-user";


export const adminGuard = () => {
    const userService = inject(DelilahUserService);

    let user = userService.getDelilahUser();

    return user.permissionProfile.hasRole(Role.ADMIN)
}