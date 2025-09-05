import { ID, Query, OAuthProvider } from "appwrite";
import { account, avatars, databases } from "./appwrite";


export async function googleLogin() {
    try {
        //const userData = await account.createOAuth2Token(OAuthProvider.Google);
        console.log('Hello world')
        const user = await account.createOAuth2Session(
            OAuthProvider.Google,
            `${window.location.origin}/`,
            `${window.location.origin}/google_auth`,
            ["https://www.googleapis.com/auth/user.birthday.read", "https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/user.birthday.read"],
        )
        console.log(user)
        return user;
    } catch (error) {
        console.error(error);
    }
}