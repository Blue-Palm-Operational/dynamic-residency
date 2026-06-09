import mysql from 'mysql2/promise'

let _pool: mysql.Pool | null = null

export function getDb(): mysql.Pool {
  if (_pool) return _pool

  const config = useRuntimeConfig()

  _pool = mysql.createPool({
    host: config.dbHost,
    port: Number(config.dbPort) || 3306,
    database: config.dbName,
    user: config.dbUser,
    password: config.dbPassword,
    waitForConnections: true,
    connectionLimit: 10,
  })

  return _pool
}

export async function initDb(): Promise<void> {
  const pool = getDb()

  await pool.execute(`
    CREATE TABLE IF NOT EXISTS registrations (
      id             INT AUTO_INCREMENT PRIMARY KEY,
      name           VARCHAR(100) NOT NULL,
      surname        VARCHAR(100) NOT NULL,
      phone          VARCHAR(50),
      email          VARCHAR(200) NOT NULL,
      tax_residence  VARCHAR(200),
      created_at     DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `)

  const [cols] = await pool.execute(`
    SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'registrations' AND COLUMN_NAME = 'tax_residence'
  `) as any[]
  if (cols.length === 0) {
    await pool.execute(`ALTER TABLE registrations ADD COLUMN tax_residence VARCHAR(200)`)
  }

  await pool.execute(`
    CREATE TABLE IF NOT EXISTS payments (
      id                 INT AUTO_INCREMENT PRIMARY KEY,
      payment_intent_id  VARCHAR(200) UNIQUE NOT NULL,
      package_id         VARCHAR(50) NOT NULL,
      package_name       VARCHAR(200) NOT NULL,
      amount_cents       INT NOT NULL,
      currency           VARCHAR(10) DEFAULT 'eur',
      customer_email     VARCHAR(200),
      customer_name      VARCHAR(200),
      status             VARCHAR(50) DEFAULT 'succeeded',
      created_at         DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `)
}
