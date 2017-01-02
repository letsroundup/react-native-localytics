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

export type CheckoutParams = {
  totalPrice?: number,
  itemCount?: number,
  attributes?: Object,
};

export type Coordinates = {
  lng: number,
  lat: number,
};

export type ContentParams = {
  contentName?: string,
  contentId?: string,
  contentType?: string,
  attributes?: Object,
}

export type SearchParams = {
  searchText?: string,
  contentType?: string,
  resultCount?: number,
  attributes?: Object,
}

export type ShareParams = {
  shareName?: string,
  contentId?: string,
  contentType?: string,
  methodName?: string,
  attributes?: Object,
}

export type RatingParams = {
  contentName?: string,
  contentId?: string,
  contentType?: string,
  rating?: number,
  attributes?: Object,
}

export type InvitationParams = {
  method?: string,
  attributes?: Object,
}