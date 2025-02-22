// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);


import { Ordiscan } from 'ordiscan';

const ordiscan = new Ordiscan('db6777f7-09d5-4398-be81-af006dc12b70');

//works
const inscription = await ordiscan.inscription.getInfo('b61b0172d95e266c18aea0c624db987e971a5d6d4ebc2aaed85da4642d635735i0');

/*
const inscription = await ordiscan.inscription.getInfo('79669716');
*/

/*
const inscription = await ordiscan.inscription.getTraits({
  inscriptionId: '85f0504edc913ac1e87a684181fbbae53b76551f39da9ebed910ce6c05a32a05i230'
});
*/
/*
const inscription = await ordiscan.inscription.getTraits({
  inscriptionId: 'b61b0172d95e266c18aea0c624db987e971a5d6d4ebc2aaed85da4642d635735i0'
});
*/

console.log(inscription);