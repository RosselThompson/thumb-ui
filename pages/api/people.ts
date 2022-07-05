// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getpeople } from 'services/People';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const getData = async () => {
    const d = await getpeople();
    res.status(200).json(d);
  };
  try {
    getData();
  } catch (e) {
    res.status(500);
  }
}
