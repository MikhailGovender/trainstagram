export type Post = {
    PostId?: number;
    userID: number,
    Image?: Buffer | string,
    Caption: string,
    Likes: number,
    PostedAt: Date,
}