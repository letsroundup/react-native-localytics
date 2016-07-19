/**
 * @providesModule VOOLocalyticsTypes
 * @flow
 */
export type Customer = {
  customerId?: string,
  firstName?: string,
  lastName?: string,
  fullName?: string,
  emailAddress?: string,
};

export type CustomerParams = {
  customer?: Customer,
  methodName?: string,
  attributes?: Object,
};

export type ItemParams = {
  itemName?: string,
  itemId?: string,
  itemType?: string,
  itemPrice?: number,
  attributes?: Object,
};

export CheckoutParams = {
  totalPrice?: number,
  itemCount?: number,
  attributes?: Object,
};
