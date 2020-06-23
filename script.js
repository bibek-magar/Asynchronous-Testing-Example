const fetch = require("node-fetch");

const getEmployees = async (fetch) => {
  const getRequest = await fetch(
    "http://dummy.restapiexample.com/api/v1/employees"
  );
  const data = await getRequest.json();
  return {
    status: data.status,
    employees: data.data,
  };
};

module.exports = { getEmployees };
