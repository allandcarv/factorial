const fs = require('node:fs/promises');
const path = require('node:path');

const resetData = async () => {
  const productGroupsFile = path.join(__dirname, 'product-groups.json');
  const productTypesFile = path.join(__dirname, 'product-types.json');
  const productsFile = path.join(__dirname, 'products.json');
  const productRestrictionsFile = path.join(
    __dirname,
    'product-restrictions.json'
  );
  const ordersFile = path.join(__dirname, 'orders.json');
  const usersFile = path.join(__dirname, 'users.json');

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
  const productRestrictionsBKPFile = path.join(
    __dirname,
    'original-files',
    'product-restrictions.json'
  );
  const ordersBKPFile = path.join(__dirname, 'original-files', 'orders.json');
  const usersBKPFile = path.join(__dirname, 'original-files', 'users.json');

  const productGroupsContent = await fs.readFile(productGroupsBKPFile);
  const productTypesContent = await fs.readFile(productTypesBKPFile);
  const productsContent = await fs.readFile(productsBKPFile);
  const productRestrictionsContent = await fs.readFile(
    productRestrictionsBKPFile
  );
  const ordersContent = await fs.readFile(ordersBKPFile);
  const usersContent = await fs.readFile(usersBKPFile);

  await Promise.all([
    fs.writeFile(productGroupsFile, productGroupsContent),
    fs.writeFile(productTypesFile, productTypesContent),
    fs.writeFile(productsFile, productsContent),
    fs.writeFile(productRestrictionsFile, productRestrictionsContent),
    fs.writeFile(ordersFile, ordersContent),
    fs.writeFile(usersFile, usersContent),
  ]);
};

resetData();
