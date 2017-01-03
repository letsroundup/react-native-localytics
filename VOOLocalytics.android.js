/**
 * @providesModule react-native-localytics
 * @flow
 */
import type {
  CustomerParams,
  ItemParams,
  CheckoutParams,
  Coordinates,
  ContentParams,
  SearchParams,
  ShareParams,
  RatingParams,
  InvitationParams,
} from './VOOLocalyticsTypes';

export function tagPurchased(params = {}) {
  console.error('tagPurchased is not implemented on Android');
}
export function tagAddedToCard(params = {}) {
  console.error('tagAddedToCard is not implemented on Android');
}
export function tagStartedCheckout(params = {}) {
  console.error('tagStartedCheckout is not implemented on Android');
}
export function tagCompletedCheckout(params = {}) {
  console.error('tagCompletedCheckout is not implemented on Android');
}

export function tagCustomerRegistered(params: CustomerParams = {}) {
  console.error('tagCustomerRegistered is not implemented on Android');
}

export function tagCustomerLoggedIn(params: CustomerParams = {}) {
  console.error('tagCustomerLoggedIn is not implemented on Android');
}

export function tagCustomerLoggedOut(params?: Object = {}) {
  console.error('tagCustomerLoggedOut is not implemented on Android');
}

export function tagEvent(eventName: string, attributes?: Object) {
  console.error('tagEvent is not implemented on Android');
}

export function setCustomerId(id: string): void {
  console.error('setCustomerId is not implemented on Android');
}

export function setCustomerFirstName(name: string): void {
  console.error('setCustomerFirstName is not implemented on Android');
}

export function setCustomerLastName(name: string): void {
  console.error('setCustomerLastName is not implemented on Android');
}

export function setCustomerFullName(name: string): void {
  console.error('setCustomerFullName is not implemented on Android');
}

export function setCustomerEmail(email: string): void {
  console.error('setCustomerEmail is not implemented on Android');
}

export function setLocation(coords: Coordinates): void {
  console.error('setLocation is not implemented on Android');
}
export function tagContentViewed(content: ContentParams = {}): void {
  console.error('tagContentViewed is not implemented on Android');
}

export function tagSearched(search: SearchParams = {}): void {
  console.error('tagSearched is not implemented on Android');
}

export function tagShared(search: ShareParams = {}): void {
  console.error('tagShared is not implemented on Android');
}

export function tagContentRated(rating: RatingParams = {}): void {
  console.error('tagContentRated is not implemented on Android');
}

export function tagInvited(method:string, attributes?: Object): void {
  console.error('tagInvited is not implemented on Android');
}
