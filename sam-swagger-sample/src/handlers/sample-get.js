exports.getHandler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      event: event,
      context: context,
      message: 'this is get',
    }),
  };

  return response;
};
