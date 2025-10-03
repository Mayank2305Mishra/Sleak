import { ID, OAuthProvider, Query } from "appwrite";
import { account, avatars, databases } from "./appwrite";
import { profile } from "console";

export async function getAccount() {
    try {
        const currentAccount = await account.get()
        return currentAccount;
    } catch (error) {
        console.error(error);
    }
}

export async function getCurrentAccount() {
    try {
        const currentAccount = await getAccount()
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_USER_ID!,
            [Query.equal("email", currentAccount.email)]
        );
        if (!currentUser) throw Error;

        return currentUser.documents[0]
    } catch (error) {
        return undefined
    }
}

export async function googleLogin() {
    try {
        localStorage.setItem('googleAuth','true')
        const user = await account.createOAuth2Session(
            OAuthProvider.Google,
            `${window.location.origin}/`,
            `${window.location.origin}/login`,
        )
        return user;

    } catch (error: any) {
        throw new Error(error)
    }

}

const getGooglePicture = async (accessToken: string) => {
    try {
        const response = await fetch(
            "https://people.googleapis.com/v1/people/me?personFields=photos",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if (!response.ok) throw new Error("Failed to fetch Google profile picture");

        const { photos } = await response.json();
        return photos?.[0]?.url || null;
    } catch (error) {
        console.error("Error fetching Google picture:", error);
        return null;
    }
};

export async function storeUser() {
    try {
        const user = await account.get();

        if (!user) throw new Error("User not found");

        const { providerAccessToken } = (await account.getSession("current")) || {};
        const profilePicture = providerAccessToken
            ? await getGooglePicture(providerAccessToken)
            : null;
        const createdUser = await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_USER_ID!,
            ID.unique(),
            {
                $id: user.$id,
                email: user.email,
                name: user.name,
                avatarUrl: profilePicture,
                $createdAt: user.$createdAt,
                $updatedAt: user.$updatedAt
            }
        );
        return createdUser
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function checkDB(email:string) {
    try {
        const checkDB = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_USER_ID!,
            [Query.equal('email', email)]
        )
        return checkDB.total == 0 ? false : true;

    } catch (error:any) {
        throw new Error(error)
    }
}

