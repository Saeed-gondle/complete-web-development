class ResponseHandler {
  static sendSuccess(res, data, message = 'Request successful') {
    res.status(200).json({
      status: 'success',
      message,
      data,
    });
  }
}

export default { ResponseHandler };
