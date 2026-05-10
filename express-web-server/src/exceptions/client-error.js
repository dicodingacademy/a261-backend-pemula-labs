class ClientError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = 'ClientError';
        this.StatusCode = statusCode;
    }
}

export default ClientError;