export async function get(_req) {
  const req = _req;
  console.log(req);
  return {
    json: {
      message: "See the api here:",
      url: "app/api/index.mjs",
    },
  };
}
