import {
  getProductRestrictionsByRestrictedProduct,
  getProductRestrictionsBySourceProduct,
} from '../product-restrictions';

export const getRestrictedProducts = async (
  productId: string
): Promise<string[]> => {
  try {
    const restrictionsBySourceProduct =
      await getProductRestrictionsBySourceProduct(productId);
    const restrictionsByRestrictedProduct =
      await getProductRestrictionsByRestrictedProduct(productId);

    const restrictedProducts = restrictionsBySourceProduct.map(
      (restriction) => restriction.restricted_product
    );
    const sourceProducts = restrictionsByRestrictedProduct.map(
      (restriction) => restriction.source_product
    );

    return [...restrictedProducts, ...sourceProducts];
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting products: ${err}`);
  }
};
