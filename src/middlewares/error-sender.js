const getErrorCode = error => error.status || error.code || 500;

const getCommonErrorResponseObject = error => ({
  name: error.name,
  message: error.message,
  code: getErrorCode(error)
});

const errorSender = (error, requset, response, next) => {
  const errorResponseObject = getCommonErrorResponseObject(error);
  const code = getErrorCode(error);

  response.status(code).json({ error: errorResponseObject });

  next(error);
};

export default errorSender;
