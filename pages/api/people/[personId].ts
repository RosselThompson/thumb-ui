// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { updatePerson } from 'services/People';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { body } = req;
      const { personId } = req.query;
      const id = Number(personId);
      const result = await updatePerson(id, body);
      res.status(200).json(result);
    } catch (err) {
      throw new Error('Failed to update data');
    }
  }
};

export default handler;
