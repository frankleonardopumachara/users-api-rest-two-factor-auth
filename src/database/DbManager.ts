import {Sequelize} from "sequelize";
import {DbInfo} from "./models/DbInfo";

export class DbManager {
    private sequelize!: Sequelize

    constructor(config: DbInfo) {
        this.createConnection(config)
    }

    private createConnection(dbInfo: DbInfo) {
        this.sequelize = new Sequelize(dbInfo.dbName, dbInfo.dbUsername, dbInfo.dbPassword, {
            host: dbInfo.dbHost,
            dialect: 'mysql'
        })
    }

    async testConnection(): Promise<boolean> {
        try {
            await this.sequelize.authenticate()
            console.log(`Connection successfully`)
            return true
        } catch (e) {
            console.log('Connection failed', e)
            return false
        }
    }
}
