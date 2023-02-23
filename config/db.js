module.exports = {
    host: 'localhost',
    user: 'root',
    pass: '',
    db: 'quizapi',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
}
