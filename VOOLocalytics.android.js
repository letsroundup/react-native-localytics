/**
 * @providesModule VOOLocalytics
 * @flow
 */
import type { CustomerParams } from './VOOLocalyticsTypes';

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
