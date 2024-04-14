export default {
    public: {
        API_HOST: process.env.MODE === 'dev' ? process.env.DEV_API_HOST : process.env.PROD_API_HOST,
        CLIENT_ID: process.env.MODE === 'dev' ? process.env.DEV_CLIENT_ID : process.env.PROD_CLIENT_ID,
        CLIENT_SECRET: process.env.MODE === 'dev' ? process.env.DEV_CLIENT_SECRET : process.env.PROD_CLIENT_SECRET
    }
}