import {Op} from "sequelize";
export interface IRepository<T, ID> {
    create(body: T): Promise<T | null>;
    readByID(id: ID): Promise<T | undefined>;
    update(id: ID, body: T): Promise<T | null>;
    delete(id: ID): Promise<boolean>;
}