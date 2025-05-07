import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 33006,
    database: 'larareact',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});