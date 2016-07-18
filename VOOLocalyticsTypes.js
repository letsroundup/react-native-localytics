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
