// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const _ = require('lodash');
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<number>>
) {
  // const { qtd= 6 } = req.query;
  // const generatedNumbers = Array.from({length: 60}, (v, k) => ++k);
  // let responseNumbers = [];
  
  // for (let i = 0; i < Number(qtd); i++) {
  //   const randomIndex = Math.floor(Math.random() * generatedNumbers.length);
  //   responseNumbers.push(generatedNumbers.splice(randomIndex, 1)[0]);
  // };

  // const numbers = responseNumbers.sort((a, b) => a - b)

  // 2022 - 04, 05, 10, 34, 58 e 59
  // 2021 - 12, 15 , 23, 32, 33 e 46
  // 2020 - 17, 20, 22, 35, 41 e 42
  // 2019 - 03, 35, 38, 40, 57 e 58
  // 2018 - 05, 10, 12, 18, 25 e 33
  // 2017 - 03, 06, 10, 17, 34 e 37
  // 2016 - 05, 11, 22, 24, 51 e 53
  // 2015 - 02, 18, 31, 42, 51 e 56
  // 2014 - 01, 05, 11, 16, 20 e 56
  // 2013 - 20, 30, 36, 38, 47 e 53
  // 2012 - 14, 32, 33, 36 , 41 e 52
  // 2011 - 03, 04, 29, 36, 45 e 55
  // 2010 - 02, 10, 34, 37, 43 e 50
  // 2009 - 10, 27, 40, 46, 49 e 58

  const arr1 = [4, 5, 10, 34, 58, 59]
  const arr2 = [12, 15 , 23, 32, 33, 46]
  const arr3 = [17, 20, 22, 35, 41, 42]
  const arr4 = [3, 35, 38, 40, 57, 58]
  const arr5 = [5, 10, 12, 18, 25, 33]
  const arr6 = [3, 6, 10, 17, 34, 37]
  const arr7 = [5, 11, 22, 24, 51, 53]
  const arr8 = [2, 18, 31, 42, 51, 56]
  const arr9 = [1, 5, 11, 16, 20, 56]
  const arr10 = [20, 30, 36, 38, 47, 53]
  const arr11 = [14, 32, 33, 36 , 41, 52]
  const arr12 = [3, 4, 29, 36, 45, 55]
  const arr13 = [2, 10, 34, 37, 43, 50]
  const arr14 = [10, 27, 40, 46, 49, 58]

  const all = [
      ...arr1,
      ...arr2,
      ...arr3,
      ...arr4,
      ...arr5,
      ...arr6,
      ...arr7,
      ...arr8,
      ...arr9,
      ...arr10,
      ...arr11,
      ...arr12,
      ...arr13,
      ...arr14,
  ]

  const ordened = all.sort((a, b) => a - b)

  const counts:any = {};
  ordened.forEach((curr) => {
      counts[curr] = (counts[curr] || 0) + 1
  });

  // Números sorteados mais de 3 vezes nos últimos concursos
  const moreThanThreeEvents:Array<number> = []
  Object.entries(counts).map(([key, value]) => {
      if (Number(value) >= 3) {
          moreThanThreeEvents.push(Number(key))
      }
  });

  // Todos os números possiveis de 0 a 60
  const allPossibles = Array.from({ length: 60 }, (e, i)=> ++i)
  // Números sorteados nos últimos concursos
  const alreadyDrawn = _.union(ordened)
  // Números nunca sorteados nos últimos concursos
  const neverDrawn = _.difference(allPossibles, alreadyDrawn);

  const pickNumberMoreThanThreeEvents = () => {
      const randonIndex = _.random(0, moreThanThreeEvents.length - 1)
      const toRemove = moreThanThreeEvents.splice(randonIndex, 1)
      _.remove(allPossibles, (e:number) => e === toRemove[0])
      _.remove(alreadyDrawn, (e:number) => e === toRemove[0])
      return toRemove[0]
  }

  const pickNumberAlreadyDrawn = () => {
      const randonIndex = _.random(0, alreadyDrawn.length - 1)
      const toRemove = alreadyDrawn.splice(randonIndex, 1)
      _.remove(allPossibles, (e:number) => e === toRemove[0])
      return toRemove[0]
  }

  const pickNeverDrawn = () => {
      const randonIndex = _.random(0, neverDrawn.length - 1)
      const toRemove = neverDrawn.splice(randonIndex, 1)
      _.remove(allPossibles, (e:number) => e === toRemove[0])
      return toRemove[0]
  }

  const pickAllPossibles = () => {
      const randonIndex = _.random(0, allPossibles.length - 1)
      const toRemove = allPossibles.splice(randonIndex, 1)
      _.remove(allPossibles, (e:number) => e === toRemove[0])
      return toRemove[0]
  }

  const final = [
      pickNumberMoreThanThreeEvents(),
      pickNumberAlreadyDrawn(),
      pickNumberAlreadyDrawn(),
      pickNeverDrawn(),
      pickNeverDrawn(),
      pickAllPossibles(),
  ]

  const numbers = _.sortBy(final);

  console.log(`m=handler stage=finish numbers=${numbers}`);
  
  res.status(200).json(numbers);
}
