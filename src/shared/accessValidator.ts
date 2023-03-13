import { Injectable } from "@nestjs/common";
import { validStatesObj } from "src/sidequests/validStates";
import { Sidequest } from "src/schemas/sidequests.schema";
import UserInfo from "./dtos/userinfo";
import { validRolesObj } from "./validRoles";

@Injectable()
export default class AccessValidator {
    constructor() {
    }

    /**
     *  Checks if the given role is inside the rolesNeeded list
     * @param roles 
     * @param roleNeeded 
     * @returns 
     */
    private hasRole(roles: string[], roleNeeded) {
        for (let role of roles) {
            if (role.toUpperCase() === roleNeeded.toUpperCase()) {
                return true;
            }
        }
        return false;
    }


}