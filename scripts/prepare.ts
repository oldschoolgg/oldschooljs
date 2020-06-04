import prepareNews from './prepareNews';
import preparePolls from './preparePolls';
import minifyDist from './minifyDist';
import prepareItems from './prepareItems';

console.log('preparing news');
prepareNews();
console.log('preparing polls');
preparePolls();
console.log('minyfying dist');
minifyDist();
console.log('preparing items');
prepareItems();
