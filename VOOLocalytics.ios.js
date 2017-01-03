/**
 * @providesModule react-native-localytics
 * @flow
 */
import ReactNative from 'react-native';
import invariant from 'fbjs/lib/invariant';

const { NativeModules } = ReactNative;
const VOOLocalytics = NativeModules.VOOLocalytics;

import type {
  CustomerParams,
  ItemParams,
  CheckoutParams,
  Coordinates,
  ContentParams,
  SearchParams,
  ShareParams,
  RatingParams,
  InvitationParams
} from './VOOLocalyticsTypes';

export function tagPurchased(params: ItemParams = {}): void {
  VOOLocalytics.tagPurchased(params);
}
export function tagAddedToCard(params: ItemParams = {}): void {
  VOOLocalytics.tagAddedToCard(params);
}
export function tagStartedCheckout(params: CheckoutParams = {}): void {
  VOOLocalytics.tagStartedCheckout(params);
}
export function tagCompletedCheckout(params: CheckoutParams = {}): void {
  VOOLocalytics.tagCompletedCheckout(params);
}

export function tagCustomerRegistered(params: CustomerParams = {}): void {
  VOOLocalytics.tagCustomerRegistered(params);
}

export function tagCustomerLoggedIn(params: CustomerParams = {}): void {
  VOOLocalytics.tagCustomerLoggedIn(params);
}

export function tagCustomerLoggedOut(params?: Object = {}): void {
  VOOLocalytics.tagCustomerLoggedOut(params);
}

export function tagEvent(eventName: string, attributes?: Object): void {
  invariant(typeof eventName === 'string' && eventName.trim(), 'Event Name has to be specified');
  VOOLocalytics.tagEvent({ eventName, attributes });
}

export function setCustomerId(id: string): void {
  VOOLocalytics.setCustomerId(id);
}

export function setCustomerFirstName(name: string): void {
  VOOLocalytics.setCustomerFirstName(name);
}

export function setCustomerLastName(name: string): void {
  VOOLocalytics.setCustomerLastName(name);
}

export function setCustomerFullName(name: string): void {
  VOOLocalytics.setCustomerFullName(name);
}

export function setCustomerEmail(email: string): void {
  VOOLocalytics.setCustomerEmail(email);
}

export function setLocation(coords: Coordinates): void {
  invariant(
    coords && coords.hasOwnProperty('lng') && coords.hasOwnProperty('lat'),
    'Coordinates has to contain lng and lat'
  );
  VOOLocalytics.setLocation(coords);
}

export function tagContentViewed(content: ContentParams = {}): void {
  VOOLocalytics.tagContentViewed(content);
}

export function tagSearched(search: SearchParams = {}): void {
  VOOLocalytics.tagSearched(search);
}

export function tagShared(share: ShareParams = {}): void {
  VOOLocalytics.tagShared(share);
}

export function tagContentRated(rating: RatingParams = {}): void {
  VOOLocalytics.tagContentRated(rating);
}

export function tagInvited(method:string, attributes?: Object): void {
  VOOLocalytics.tagInvited({method, attributes});
}