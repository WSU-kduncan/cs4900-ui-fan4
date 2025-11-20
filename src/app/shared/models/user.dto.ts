export interface UserDto {
    username: string;
    name: string;
    birthdate: string; // ISO format, convert to Date when needed
}