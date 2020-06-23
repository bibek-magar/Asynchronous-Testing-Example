const fetch = require("node-fetch");
const api = require("./script");

it("call api to get employees", (done) => {
  expect.assertions(1);
  api.getEmployees(fetch).then((data) => {
    expect(data.status).toEqual("success");
    done();
  });
});

it("call api to get employees", () => {
  expect.assertions(2);
  return api.getEmployees(fetch).then((data) => {
    expect(data.status).toEqual("success");
    expect(data.employees.length).toBeGreaterThan(5);
  });
});
