import httpStatus from 'http-status/lib/index';
import ApiError from '../helpers/apierror';

const validationHandler = next => (result) => {
    if (result.isEmpty()) return;
    if (!next) {
        throw new ApiError(
            result.array().map(i => `'${i.param}: ${i.msg}'`).join(' '),
            httpStatus.BAD_REQUEST,
            true
        );
    } else {
        return next(
            new ApiError(
                result.array().map(i => `'${i.param}: ${i.msg}'`).join(''),
                httpStatus.BAD_REQUEST,
                true
            )
        );
    }
};

export default validationHandler;
