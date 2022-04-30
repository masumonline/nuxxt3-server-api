import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queryObject = url.parse(req.url as string, true).query;
  console.log(queryObject);
  let data = { data: [{ data: "" }] };

  data = await $fetch(`https://json.activelava.net/comments?_start=0&_end=30`);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};