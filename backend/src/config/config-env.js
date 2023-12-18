require('dotenv').config()
module.exports={
    MONGO_DB_URI:process.env.MONGO_DB_URI,
    PORT:process.env.PORT || 3000,
    BASE_URL:process.env.BASE_URL
}