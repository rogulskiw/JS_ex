const { validationResult } = require ('express-validator');

module.exports = {
    handleErrors(templateFunc, dataCb) {
        return async (req, res, next) => { //it's middleware function and NEXT is a reference to a function which express is doing and tells it to continue process 
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                let data = {};
                if(dataCb){
                   data = await dataCb(req);
                }

                return res.send(templateFunc({ errors, ...data }));
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