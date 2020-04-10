import { testHelper } from '../helpers/functions';

export const test = (req, res, next) => {
    const testResult = testHelper(req);
    res.send(testResult);
};
