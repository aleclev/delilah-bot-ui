import { Role } from "./role";

export class PermissionProfile {

    roles: Array<Role>

    constructor(roles: Array<Role>) {
        this.roles = roles;
    }

    public hasRole(role: Role): boolean {
        return this.roles.indexOf(role) > -1;
    }
}