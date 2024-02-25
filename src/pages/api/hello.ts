// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { persons } from 'src/config/constants';

type Data = {
  name: string;
  age: number;
  isMarried: boolean;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(persons)
}
