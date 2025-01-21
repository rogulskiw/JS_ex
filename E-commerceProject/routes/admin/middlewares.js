const { validationResult } = require ('express-validator');

module.exports = {
    handleErrors(templateFunc) {
        return (req, res, next) => { //it's middleware function and NEXT is a reference to a function which express is doing and tells it to continue process 
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.send(templateFunc({ errors }));
            }
            
            next();
        };
    },
    requireAuth(req, res, next) {
        if(!req.session.userId) {
            return res.redirect('/singin');
        }

        next(); 
    }
};