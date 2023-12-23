const {statusConst} =require ('./statusCode');

const errorHandler =(req, res, error,next) => {
const statusCode =req.statusCode ? req.statusCode :500;
switch (statusCode) {
    case statusConst.BAD_REQUEST:
    res.json({title:'bad request from client'});
    break;
    case statusConst.UNAUTHORIZED:
    res.json({title:'unauthorized request from client',stackTrace: err.stack});
    break;
    case statusConst.PAYMENT_REQUIRE:
    res.json({title:'payment require from client error',stackTrace: err.stack});
    break;
    case statusConst.FOR_BIDDEN:
    res.json({title:'for bidden from client error',stackTrace: err.stack});
    break;
    case statusConst.NOT_FOUND:
    res.json({title:'not found from client error',stackTrace: err.stack});
    break;
    case statusConst.SERVER_ERROR:
    res.json({title:'server error from client error',stackTrace: err.stack});
    break;
    
}
};
module.exports = errorHandler;