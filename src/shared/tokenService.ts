import { Injectable } from "@nestjs/common";
import fetch from "node-fetch";
const fetch = require('node-fetch');
import configuration from '../conf/configuration';

@Injectable()
export default class TokenService {
    auth_baseUrl = configuration.auth_baseUrl;

    /** Authentication */

    async validateToken(token) {
        try {
            let tokenBody = {
                token: token
            };
            return await fetch(this.auth_baseUrl + "/token/introspect", {
                method: "POST",
                body: JSON.stringify(tokenBody),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            }).then(res => res.json())
        } catch (e) {
            console.error(e)
            return false;
        }
    }
}