import checkRole from "./checkRole";
import { publishedOrLoggedIn } from "./publishedOrLoggedIn";

// users: no access | editors: update access | author: create access | admin: full control

export const userAccess = ({ req: { user } }) => {
    const roleCheck = checkRole(['user', 'editor', 'author', 'admin'], user);
    const result = roleCheck || publishedOrLoggedIn({ req: { user } });

    return result;
};

export const editorAccess = ({ req: { user } }) => checkRole(['editor', 'author', 'admin'], user);

export const authorAccess = ({ req: { user } }) => checkRole(['author', 'admin'], user);

export const adminAccess = ({ req: { user } }) => checkRole(['admin'], user);
