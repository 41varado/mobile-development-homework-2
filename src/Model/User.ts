export default interface User {
    username: string;
    password: string;
    role: "admin" | "user";
}