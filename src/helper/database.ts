import "reflect-metadata";
import { createConnection } from "typeorm";
import { consoleLogger } from '.';

const createDataBaseConnection = async () => {

    // let databaseConfig:Record<any,any> = config.get('database');

    // databaseConfig = Object.assign({}, databaseConfig, {selected:false})

    // databaseConfig.entities = [path.join(__dirname, '/../**/', '*.entity.{ts,js}')]

    const connection = await createConnection();

    consoleLogger.success(`createDataBaseConnection:: connected to database ${connection.name}`);

    return connection;

}

export {
    createDataBaseConnection
}