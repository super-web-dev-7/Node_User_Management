const permissionMiddleware = (role) => {
    return (req, res, next) => {
        if (role === req.user.role)
            next()
        else
            res.status(400).send('Permission restrict')
    }
}
export default permissionMiddleware;
