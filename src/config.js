const config = {
    URL_API: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_API : 'http://localhost:8080/api'
};

export default config;
