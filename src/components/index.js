const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const algoliasearch = require('algoliasearch');
const products = require('../../data/products.json');

const client = algoliasearch(process.env.ALGOLIA_APP_ID,process.env.ALGOLIA_API_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX);

async function processRecords() {
  console.log('Start processing products');

  const updatedProducts = products.map((product) => { //creation of a new table from the json to add the promotion
    const isCamera = product.categories.some((cat) => cat.includes('Camera'));
    if (isCamera && product.price) {
      return {
        ...product,
        price: Math.floor(product.price * 0.8),
      };
    }
    return product;
  });

  console.log(`Sending ${updatedProducts.length} products to Algolia`);
  return await index.saveObjects(updatedProducts);
}

processRecords()
  .then(() => console.log('Indexation done.'))
  .catch((err) => console.error('Error: ', err));