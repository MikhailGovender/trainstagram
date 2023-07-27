export interface IRepository<T, ID> {
    create(body: T): Promise<T>;
    readByID(id: ID): Promise<T>;
    update(id: ID, body: T): Promise<T>;
    delete(id: ID): Promise<boolean>;
}