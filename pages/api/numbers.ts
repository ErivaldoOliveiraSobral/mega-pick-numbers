// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<number>>
) {
  const { qtd= 6 } = req.query;
  const generatedNumbers = Array.from({length: 60}, (v, k) => ++k);
  let responseNumbers = [];
  
  for (let i = 0; i < Number(qtd); i++) {
    const randomIndex = Math.floor(Math.random() * generatedNumbers.length);
      responseNumbers.push(generatedNumbers.splice(randomIndex, 1)[0]);
  };

  const numbers = responseNumbers.sort((a, b) => a - b)

  console.log(`m=handler stage=finish numbers=${numbers}`);
  
  res.status(200).json(numbers);
}
