// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPersonInfo } from '../../types/Interfaces/Data/IData';
import { mockData } from 'mock/MockData';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPersonInfo[]>
) {
  res.status(200).json(mockData);
}
