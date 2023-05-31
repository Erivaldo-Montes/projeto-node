export async function json(req, res) {
  const buffers = [];

  // aguarda os chunks para inserir no array
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  // concatena os chunks do array em uma string

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body;
  }

  res.setHeader("Content-type", "application/json");
}
