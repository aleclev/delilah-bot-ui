import { Dictionary } from "./dictionary";
import { PermissionProfile } from "./permission-profile";
import { Role } from "./role";


export class DelilahUser {  
    discordId: string;
    userId: string;
    rootDictionary: Dictionary;
    permissionProfile!: PermissionProfile;

    constructor(discordId: string, userId: string,
        rootDictionary: Dictionary, permissionProfile: PermissionProfile) {
        this.discordId = discordId;
        this.userId = userId;
        this.rootDictionary = rootDictionary;
        this.permissionProfile = permissionProfile;
    }

    public isAdmin(): boolean {
        return this.permissionProfile.hasRole(Role.ADMIN)
    }
}