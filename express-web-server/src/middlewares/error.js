import response from '../utils/response.js';
import { ClientError } from '../exceptions/index.js';

const ErrorHandler = (err, req, res, next) => {
    if (err instanceof ClientError) {
        return response(res, 'fail', err.message, null, err.StatusCode);
    }

    if (err.isJoi) {
        return response(res, 400, err.details[0].message, null);
    }

    const status = err.StatusCode || err.status || 500;
    const message = err.message || 'Internal Server Error';
    
    console.log('Unhandled error:', err);
    return response(res, status, message, null);
}

export default ErrorHandler;