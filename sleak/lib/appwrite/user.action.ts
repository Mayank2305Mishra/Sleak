import { OAuthProvider } from "appwrite";
import { account, avatars, databases } from "./appwrite";

export async function googleLogin() {
    try {
        const user = await account.createOAuth2Session(
            OAuthProvider.Google,
            `${window.location.origin}/profile`,
            `${window.location.origin}/login`,
        )
        return user;
    } catch (error: any) {
        throw new Error(error)
    }

}