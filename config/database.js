module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db-mysql-nyc1-62451-do-user-7321064-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', 'AVNS_B0wOBJ1OkrNPPll_2U1'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});


