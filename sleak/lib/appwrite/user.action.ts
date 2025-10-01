import { OAuthProvider } from "appwrite";
import { account, avatars, databases } from "./appwrite";

export async function googleLogin() {
    try {
        console.log('Hola')
        const user = account.createEmailPasswordSession('mayank2305mishra@gmail.com','mayank@2305')
        return user;
    } catch (error: any) {
        throw new Error(error)
    }

}

