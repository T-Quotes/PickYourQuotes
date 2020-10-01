/* eslint-disable no-undef */
let allQuot = [

  // ---1
  { title: 'All Roads Lead to Rome', story: 'origins may relate to the Roman monument known as the Milliarium Aureum, or golden milestone, erected by Emperor Caesar Augustus in the central forum of ancient Rome. All distances in the Roman Empire were measured from this point and it was regarded as the site from which all principle roads diverged. As such, artists such as Giacomo Lauro, whose rendition of the Milliarium Aureum appears in this exhibit, often used it as a metaphor for the intensely cosmopolitan culture that has long been present in Rome.' },

  // ---2
  { title: 'عادت حليمة لعادتها القديمة', story: 'من هي حليمة في قول: عادت حليمة لعادتها القديمة‎\nيُقال ... هي زوجة احد الشخصيات التي اشتهرت بالكرم كما اشتهرت هي بالبخل الله اعلم  كانت اذا ارادت ان تضع سمناً في الطبخ واخذت الملعقة ترتجف في يدها فاراد زوجها ان يعلمها الكرم فقال لها: \nان الاقدمين كانوا يقولون ان المراة كلما وضعت ملعقة من السمن في طنجرة(حلة) الطبخ زاد الله بعمرها يوماً فأخذت حليمة تزيد ملاعق السمن في الطبخ حتى صار طعامها طيباً وتعودت يدها على السخاء...وشاء الله ان يفجعها بابنها الوحيد الذي كانت تحبه اكثر من نفسها فجزعت حتى تمنت الموت... واخذت لذلك تقلل من وضع السمن في الطبخ حتى ينقص عمرها وتموت فقال الناس ...\nعادت حليمة الى عادتها القديمة' },

  // ---3
  { title: 'A cat has nine lives', story: 'The cat has nine lives, the cat can survive despite being exposed to potentially fatal events, but it remains alive, and it may refer to people who are always exposed to accidents or difficult situations and stay alive.' },

  // ---4
  { title: 'اتمسكن حتى تتمكن', story: ' The proverb urges the weak and defeated person to order him to deceive and pretend to be humiliated, submissive, indwelling, and fabricating with a print other than his imprint so that he can achieve his goals and reach his goals and aspirations, then return to his normal state and appear as he is.' },

  // ---5
  { title: 'A journey of thousand miles begins with a single step', story: 'The journey of a thousand miles begins with one step, no matter how big the task is, it begins with a small step.' },

  // ---6
  { title: 'All’s well that ends well', story: 'Everything is fine if it ends well, as long as the result is good, problems on the way do not matter.' },

  // ---7
  { title: 'All that glitters is not gold', story: 'Everything that glitters is not gold, the things that look good on the outside dont have to be valuable or good.' },

  // ---8
  { title: 'As you sow, so you shall reap', story: 'As you sow you reap, what is meant is that what you do today, whether good or bad, you will reap tomorrow.' },

  // ---9
  { title: 'A bird in the hand is better than two on the tree', story: 'A bird in the hand is better than two in the tree, the things we have are more valuable than something that may be difficult to obtain, and we may end up losing everything.' },


];
// function setQuot(titleQ,stroyQ)
// {
//   allQuot.push({title:titleQ,story:stroyQ});
// }


for (let i = 0; i < allQuot.length; i++) {
  new Quot(allQuot[i].title, allQuot[i].story);
}


getLocalStorge();
setLocalStorge();




function setLocalStorge() {
  // eslint-disable-next-line no-undef
  quots = JSON.stringify(Quot.all);
  localStorage.setItem('Quotes', quots);
}



function getLocalStorge() {
  let quotAll = JSON.parse(localStorage.getItem('Quotes'));
  Quot.all = [];
  for (let i = 0; i < quotAll.length; i++) {
    new Quot(quotAll[i].title, quotAll[i].story);
    Quot.all[i].tranding += quotAll[i].tranding;
  }

}

