// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPeople } from 'services/People';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await getPeople();
    res.status(200).json(result);
  } catch (err) {
    throw new Error('failed to load data');
  }
};

export default handler;
