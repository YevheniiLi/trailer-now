const responsewithData = (res, statusCode, data) =>
  res.status(statusCode).json(data);

const error = (res) =>
  responsewithData(res, 500, {
    status: 500,
    message: "Oops! Something wrong!",
  });

const badrequest = (res, message) =>
  responsewithData(res, 400, {
    status: 400,
    message,
  });

const ok = (res, data) => responsewithData(res, 200, data);

const created = (res, data) => responsewithData(res, 201, data);

const unauthorize = (res) =>
  responsewithData(res, 401, {
    status: 401,
    message: "Unathorized",
  });

const notfound = (res) =>
  responsewithData(res, 404, {
    status: 404,
    message: "Resource not found",
  });

export default {
  error,
  badrequest,
  ok,
  created,
  unauthorize,
  notfound,
};
