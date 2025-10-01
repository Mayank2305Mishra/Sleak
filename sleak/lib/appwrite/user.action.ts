import { ID, OAuthProvider, Query } from "appwrite";
import { account, avatars, databases } from "./appwrite";

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
            process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID!,
            [Query.equal("userId", currentAccount.$id)]
        );
        if (!currentUser) throw Error;

        return currentUser.documents[0]
    } catch (error) {
        console.error(error);

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

export async function googleLogin() {
    try {
        await account.createOAuth2Session(
            OAuthProvider.Google,
            `${window.location.origin}/`,
            `${window.location.origin}/login`,
        )
        const user = await getAccount()
        const userData = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_USER_ID!,
            [Query.equal("email", user?.email!)]
        );
        if (userData.total == 0) {
            if(!user) throw Error("User not found");
            const { providerAccessToken } = (await account.getSession("current")) || {};
            const profilePicture = providerAccessToken
                ? await getGooglePicture(providerAccessToken)
                : null;
            const newUser = await databases.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID!,
                ID.unique(),
                {
                    email: user.email,
                    $id: user.$id,
                    avatarUrl: profilePicture,
                    name: user.name,
                    $createdAt: user.$createdAt,
                    $updatedAt: user.$updatedAt
                }
            )
            return newUser;
        }
        return user;
        
    } catch (error: any) {
        throw new Error(error)
    }

}

