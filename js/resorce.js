let allQuot=[{title:'عادت حليمة لعادتها القديمة',story:'من هي حليمة في قول: عادت حليمة لعادتها القديمة‎\nيُقال ... هي زوجة احد الشخصيات التي اشتهرت بالكرم كما اشتهرت هي بالبخل الله اعلم  كانت اذا ارادت ان تضع سمناً في الطبخ واخذت الملعقة ترتجف في يدها فاراد زوجها ان يعلمها الكرم فقال لها: \nان الاقدمين كانوا يقولون ان المراة كلما وضعت ملعقة من السمن في طنجرة(حلة) الطبخ زاد الله بعمرها يوماً فأخذت حليمة تزيد ملاعق السمن في الطبخ حتى صار طعامها طيباً وتعودت يدها على السخاء...وشاء الله ان يفجعها بابنها الوحيد الذي كانت تحبه اكثر من نفسها فجزعت حتى تمنت الموت... واخذت لذلك تقلل من وضع السمن في الطبخ حتى ينقص عمرها وتموت فقال الناس ...\nعادت حليمة الى عادتها القديمة'},

  {title:'اللى استحوا ماتوا ',story:'فى أربعينيات القرن الفائت فى مصر كانت الحمامات العامة شائعة ومنتشرة وهو مكان أقرب إلى مراكز التجميل حالياً حيث الساونا والتدليك ( المساج ) والإستحمام وتقليم الأظافر ( البديكير+ المانيكير ) وتجميل العرائس و هو بناء من طابق واحد خلفه براح يدعى المستوقد حيث يوضع الوقيد ( الفحم )  وتحت هذا الفحم المتقد تمر أنابيب الماء التى تغذى الحمام الذى يصب فى مغطس وسط المبنى كما وتوجد غرف على جدران المبنى لعمل التكبيس المساج والتكييس وهو التدليك بالصابون السائل لصنفرة الجلد \nليبدو لامعاً مشدوداً . كان هناك يوم فى الأسبوع مخصص للحريم  وذات يوم من أيام النساء إشتعلت النيران داخل الحمام كلهن عرايا كثيرات هرولن للشارع لم يشغلهن الحياء ( الخشا ) ساعتها واللى استحوا ماتوا داخل الحمام.'},


  {title:'All Roads Lead to Rome',story:'origins may relate to the Roman monument known as the Milliarium Aureum, or golden milestone, erected by Emperor Caesar Augustus in the central forum of ancient Rome. All distances in the Roman Empire were measured from this point and it was regarded as the site from which all principle roads diverged. As such, artists such as Giacomo Lauro, whose rendition of the Milliarium Aureum appears in this exhibit, often used it as a metaphor for the intensely cosmopolitan culture that has long been present in Rome.'}




];




// function setQuot(titleQ,stroyQ)
// {
//   allQuot.push({title:titleQ,story:stroyQ});
// }


for(let i=0;i<allQuot.length;i++)
{
// eslint-disable-next-line no-undef
  new Quot(allQuot[i].title,allQuot[i].story);
}
