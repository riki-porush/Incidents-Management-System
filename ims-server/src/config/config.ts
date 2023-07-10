import dotenv from 'dotenv'

dotenv.config()

// DECLARE ALL VARIABLES
const SERVER_PORT = 5000
const MONGO_URL_LOCAL = 'mongodb://127.0.0.1:27017/ims_db'

// CREATE CONFIG OBJECT
const config = {
  mongo: {
    url: MONGO_URL_LOCAL
  },
  server: {
    port: SERVER_PORT
  }
}

// CHECK FOR ENVIRONMENT

// EXPORT
export default config
