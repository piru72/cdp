const responseHandler = () => {
    return async (ctx, next) => {
      ctx.response.ok = (responseSummary, response = {}) => {
        ctx.status = 200;
        ctx.body = { responseSummary, response };
      };
  
      ctx.response.created = (responseSummary, response = {}) => {
        ctx.status = 201;
        ctx.body = { responseSummary, response };
      };
  
      ctx.response.badRequest = (responseSummary, response = {}) => {
        ctx.status = 400;
        ctx.body = { responseSummary, response };
      };
  
      ctx.response.unauthorized = (responseSummary, response = {}) => {
        ctx.status = 401;
        ctx.body = { responseSummary, response };
      };
  
      ctx.response.forbidden = (responseSummary, response = {}) => {
        ctx.status = 403;
        ctx.body = { responseSummary, response };
      };
  
      ctx.response.notFound = (responseSummary, response = {}) => {
        ctx.status = 404;
        ctx.body = { responseSummary, response };
      };
  
      ctx.response.internalError = (responseSummary, response = {}) => {
        ctx.status = 500;
        ctx.body = { responseSummary, response };
      };
  
      await next();
    };
  };
  
  module.exports = responseHandler;