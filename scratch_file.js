'use strict';
//this file is not included in the build.
//use it for messing around.
const nlp = require('./src/index');
// const Term = require('./src/term');
// const corpus = require('nlp-corpus');
// const nlp = require('./builds/nlp_compromise');

// require('./src/logger').enable();
// const context = {
//   lexicon: {
//     'donkey kong': 'Person'
//   }
// };
// let txt = corpus.parsed.weezer().sweatersong;

let r = nlp('tony Shark, dave Lawrence played pool. Is he good? John Smith is cool');
// r.check();
// console.log(r.asArray());
console.log(r.questions().parse());
// r.check();



// let r = nlp('1 April to 31 August');
// r.check();
// let t = new Term('april');
// t.tagAs('Infinitive');
// console.log(t.tag);
//
// t.tagAs('Month');
// console.log(t.tag);
