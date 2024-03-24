// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<number>>
) {
  console.log('m=handler stage=init');

  const { qtd = 6 } = req.query;
  const generatedNumbers = Array.from({length: 60}, (v, k) => ++k);
  let responseNumbers = [];
  for (let i = 0; i < qtd; i++) {
    const randomIndex = Math.floor(Math.random() * generatedNumbers.length);
      responseNumbers.push(generatedNumbers.splice(randomIndex, 1)[0]);
  };

  console.log('m=handler stage=finish');
  
  res.status(200).json(responseNumbers.sort((a, b) => a - b));
}
