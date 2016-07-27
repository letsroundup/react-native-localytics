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
  CheckoutParams
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
