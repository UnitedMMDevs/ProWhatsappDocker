declare namespace NodeJS
{
    interface ProcessEnv {
        MONGO_URL: string;
        PORT: string;
        REDIS_HOST: string;
        REDIS_PORT: string;
        WEB_URL: string;
        JWT_SECRET_KEY: string;
        GATEWAY_SECRET_KEY: string;
        SMTP_CONFIG_HOST: string;
        SMTP_CONFIG_PORT: string;
        SMTP_CONFIG_TLS: string;
        SMTP_CONFIG_USERNAME: string;
        SMTP_CONFIG_PASSWORD: string;
        NODE_ENV: string;
        FILE_UPLOAD_PATH: string;
    }
}