export default async function handler(req, res) {
  const {
    body: { visitor_id },
  } = req;

  res.status(200).json({});
}
