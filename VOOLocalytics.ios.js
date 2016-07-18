/**
 * @providesModule VOOLocalytics
 * @flow
 */
import ReactNative from 'react-native';
import invariant from 'fbjs/lib/invariant';

const { NativeModules } = ReactNative;
const VOOLocalytics = NativeModules.VOOLocalytics;

import type { CustomerParams } from './VOOLocalyticsTypes';

export function tagCustomerRegistered(params: CustomerParams = {}) {
  VOOLocalytics.tagCustomerRegistered(params);
}

export function tagCustomerLoggedIn(params: CustomerParams = {}) {
  VOOLocalytics.tagCustomerLoggedIn(params);
}

export function tagCustomerLoggedOut(params?: Object = {}) {
  VOOLocalytics.tagCustomerLoggedOut(params);
}

export function tagEvent(eventName: string, attributes?: Object) {
  invariant(typeof eventName === 'string' && eventName.trim(), 'Event Name has to be specified');
  VOOLocalytics.tagEvent({ eventName, attributes });
}
