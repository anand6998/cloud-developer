export const config = {
    "dev": {
        "username": "postgres",
        "password": "postgres",
        "database": "udagram_dev",
        "host": "aa-udagram-dev.cwnbxampi8so.us-east-1.rds.amazonaws.com",
        "dialect": "postgres",
        "aws_region": "us-east-1",
        "aws_profile": "default",
        "aws_media_bucket": "aa-udagram-dev"
    },
    "prod": {
        "username": "",
        "password": "",
        "database": "udagram_prod",
        "host": "",
        "dialect": "postgres"
    }
}
