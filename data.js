// Verified live 2026-11-05 in a browser. Prices are what the listing showed that day.
// Amazon was not checked: its page bars AI agents, so nothing here comes from it.
const WM = p => `https://i5.walmartimages.com/${p}`;
const SH = p => `https://cdn.shopify.com/s/files/${p}`;
const ANCHOR = {name:'Rogue Individual Mat', price:95, target:47.5};
const YOGA = {len:68, wid:24, mm:3}; // Rogue's own thin yoga mat: 68 x 24 x 1/8"

const ROGUE = [
 {id:'rogue', name:'Rogue Individual Mat', price:95, len:72, wid:36, mm:16, thick:'5/8"', body:'Vinyl over closed-cell foam, made by Dollamur', weight:'4 lb listed', rating:'4.6★ (139)',
  url:'https://www.roguefitness.com/rogue-individual-mat', via:'Rogue',
  imgs:['https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/v1/DM0097-Black-H_prhvdb.png']},
];

const ITEMS = [
 {id:'yr', sec:'buy', rank:2, brand:'YR', name:'Large Yoga Mat, 15mm', short:'YR 15mm', variant:'Black · 78" × 35" · 15mm',
  url:'https://www.walmart.com/ip/1792618555', via:'Walmart', price:49.99, wasPrice:59.99, len:78, wid:35, mm:15, thick:'15mm',
  body:'NBR foam', firmness:'Soft', storage:'Rolls', weight:'3.4 lb', rating:'4.7★ (144)',
  flags:['Its own size diagram says “Exercise equipment not recommend” beside a crossed-out treadmill, and “Barefoot without shoes”','Reviewers call it soft','Walmart’s page title says 74"; the listing and diagram say 78"'],
  imgs:[WM('seo/YR-Yoga-Mat-15mm-Thick-NBR-78x35-Inch-Wide-Exercise-Fitness-Pad-for-Home-Gym-Workouts-Black_56fff601-882c-44c9-95f1-bc0c5b63d401.5827f2092709d8957176c26688539b8b.jpeg'),WM('asr/9b0308bb-7b57-4721-8df9-076dec4f9643.b6e2c15524235265e00bae414c3220b7.jpeg'),WM('asr/04a9a022-2f30-4494-8652-9722a1672af2.9391e2b4b3376a3317489f0b9553b28b.jpeg')]},
 {id:'trifold', sec:'buy', rank:1, brand:'ProsourceFit', name:'Tri-Fold Folding Exercise Mat', short:'Tri-Fold', variant:'Black · 72" × 24" · 1.5"',
  url:'https://www.prosourcefit.com/products/tri-fold-exercise-mat-6x2', via:'ProsourceFit', price:44.99, len:72, wid:24, mm:38, thick:'1.5"',
  body:'Vinyl over dense EPE closed-cell foam', firmness:'Dense', storage:'Folds in thirds', weight:'4.2 lb', rating:'4.9★ (235, Walmart)',
  flags:['No wider than a yoga mat','Two fold lines across the surface'],
  also:{label:'Same price at Walmart', url:'https://www.walmart.com/ip/54188578'},
  imgs:[SH('1/0916/1708/files/Tri-Folding-Mat-6x2-Black-01.jpg'),SH('1/0916/1708/files/Tri-folding-mat-6x2-black-02-Shopify.jpg'),SH('1/0916/1708/files/Tri-folding-mat-6x2-black-03-Shopify.jpg')]},
 {id:'sunny', sec:'buy', rank:3, brand:'Sunny Health & Fitness', name:'Premium 1/2-Inch Extra Thick Mat', short:'Sunny 1/2"', variant:'Grey · 74" × 24" · 1/2"',
  url:'https://www.sunnyhealthfitness.com/products/premium-extra-thick-exercise-yoga-mat-1-2-inch-sf-em03', via:'Sunny Health & Fitness', price:32.99, len:74, wid:24, mm:13, thick:'1/2"',
  body:'Foam (type not listed)', firmness:'Not stated', storage:'Rolls', weight:'Not listed', rating:'Not checked',
  flags:['No wider than a yoga mat'],
  imgs:[SH('1/0052/7043/7978/files/1-sunny-health-fitness-premium-extra-thick-exercise-yoga-mat-blue-sf-em03-gy.jpg'),SH('1/0052/7043/7978/files/1-sunny-health-fitness-premium-extra-thick-exercise-yoga-mat-blue-sf-em03-bu.jpg')]},
 {id:'gaiam', sec:'buy', rank:4, brand:'Gaiam', name:'Fitness Mat, 10mm', short:'Gaiam 10mm', variant:'Black or blue · 72" × 24" · 10mm',
  url:'https://www.gaiam.com/products/fitness-mat-10mm', via:'Gaiam', price:24.98, len:72, wid:24, mm:10, thick:'10mm',
  body:'NBR foam', firmness:'Soft', storage:'Rolls', weight:'Not listed', rating:'Not checked',
  flags:['No wider than a yoga mat','Same size and foam as Rogue’s $55 NBR mat, not its $95 one'],
  imgs:[SH('1/1728/2157/products/05-64469_GAIAM-10MM-FITNESS-MAT-BLUE_A.jpg'),SH('1/1728/2157/products/05-64469_GAIAM-10MM-FITNESS-MAT-BLUE_B.jpg')]},

 {id:'ainfox', sec:'near', rank:1, brand:'Ainfox', name:'Folding Exercise Mat, 3\'×6\'×2"', short:'Ainfox', variant:'Dark blue · 71" × 35" · 2"',
  url:'https://www.walmart.com/ip/985527644', via:'Walmart', price:69.99, wasPrice:119.99, len:71, wid:35, mm:51, thick:'2"',
  body:'PU over EPE foam', firmness:'Firm, per reviewers', storage:'Folds in four', weight:'5.95 lb', rating:'4.8★ (77)',
  miss:'Over budget. It is Rogue’s footprint at 74% of Rogue’s price.',
  imgs:[WM('seo/Ainfox-3-x6-x2-Folding-Exercise-Mats-Gymnastics-Tumbling-Mats-Aerobics-Stretching-Yoga-Mat-Dark-Blue_38c96b9c-2b94-4b96-9054-158018de1e35.c560649046ba86439fa027dc518f1474.jpeg')]},
 {id:'titan', sec:'near', rank:2, brand:'Titan Fitness', name:'Foam Fitness Mat', short:'Titan', variant:'72" × 36" · 3/8"',
  url:'https://www.titan.fitness/products/foam-fitness-mat', via:'Titan', price:80.97, len:72, wid:36, mm:10, thick:'3/8"',
  body:'PVC top, dense PU core, silicone grip base', firmness:'Dense', storage:'Rolls, bag included', weight:'Not listed', rating:'Not checked',
  miss:'Closest thing to the Rogue in build, but only 15% cheaper and thinner.',
  imgs:[SH('1/0802/1508/1237/files/402114_01.jpg')]},
 {id:'rep', sec:'near', rank:3, brand:'REP Fitness', name:'Exercise Mat', short:'REP', variant:'1.5" internal foam',
  url:'https://www.repfitness.com/products/exercise-mat', via:'REP', price:39.99, len:null, wid:null, mm:38, thick:'1.5"',
  body:'Foam, covered', firmness:'Not stated', storage:'Not stated', weight:'Not listed', rating:'4.9★ (67)',
  miss:'Free shipping and a good price, but a buyer says it is shorter than a yoga mat. Too short for lunges.',
  imgs:[SH('1/0574/1215/7598/products/Shopify-EM-1000-Thumbnail.jpg')]},
];

const PASSED = [
 ['Rubber stall mat, 4\'×6\'×3/4", Tractor Supply', 'About $50 and the toughest surface for a bell, but 94 lb, with no give for hands. Price varies by store.','https://www.tractorsupply.com/tsc/product/4-ft-x-6-ft-x-3-4-in-thick-rubber-stall-mat'],
 ['Dollamur 3\'×6\' Thick Yoga & Workout Mat', '$104.99 from the company that makes Rogue’s mat. Rogue is the cheaper way to buy it.','https://dollamur.com/products/exercise-mats-for-home-3x6'],
 ['Rogue NBR Yoga Mat, 10mm', '$55 with free shipping, 24.75" wide. Same class as the Gaiam at twice the price.','https://www.roguefitness.com/rogue-nbr-yoga-mat-10mm-dark-gray'],
 ['THAILE 6\'×4\' "8mm" mat', '$59.98. The title says 8mm, the description says 1/4", and reviewers say it isn’t very thick.','https://www.walmart.com/ip/20610653486'],
 ['Gruper-style 72"×32"×0.6" mat, black', '$23.19 with no reviews, and its description gives a different size.','https://www.walmart.com/ip/14899817335'],
 ['YR 78"×35" in 10mm', '$41.39 in search results, but the product page wouldn’t load, so it went unverified.','https://www.walmart.com/ip/19050616319'],
 ['Justice 6\' three-panel mat', '$34.98. Same format as the Tri-Fold, but many of its reviews were collected in a promotion.','https://www.walmart.com/ip/2235835416'],
];
