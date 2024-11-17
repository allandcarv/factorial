const fs = require('node:fs/promises');
const path = require('node:path');

const resetData = async () => {
  const productGroupsFile = path.join(__dirname, 'product-groups.json');
  const productTypesFile = path.join(__dirname, 'product-types.json');
  const productsFile = path.join(__dirname, 'products.json');

  const productGroupsBKPFile = path.join(
    __dirname,
    'original-files',
    'product-groups.json'
  );
  const productTypesBKPFile = path.join(
    __dirname,
    'original-files',
    'product-types.json'
  );
  const productsBKPFile = path.join(
    __dirname,
    'original-files',
    'products.json'
  );

  const productGroupsContent = await fs.readFile(productGroupsBKPFile);
  const productTypesContent = await fs.readFile(productTypesBKPFile);
  const productsContent = await fs.readFile(productsBKPFile);

  await Promise.all([
    fs.writeFile(productGroupsFile, productGroupsContent),
    fs.writeFile(productTypesFile, productTypesContent),
    fs.writeFile(productsFile, productsContent),
  ]);
};

resetData();