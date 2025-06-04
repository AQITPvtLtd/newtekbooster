import mysql from "mysql2";

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "tek",
    waitForConnections: true,
    connectionLimit: 10,  // Kitne max connections ek time me allow hain
    queueLimit: 0,        // Queue limit, 0 means no limit
});

export default pool.promise();
