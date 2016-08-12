# react-native-localytics
[![npm version](https://badge.fury.io/js/react-native-localytics.svg)](https://badge.fury.io/js/react-native-localytics)

Native Bindings for the [Localytics][localytics] Library. Only available on iOS right now.

## Installation

1. `npm install --save react-native-localytics`
2. `react-native link react-native-localytics`
3. Add Localytics to your ios/podfile file `pod 'Localytics', '~> 4.0'`
4. `cd ios && pod install`
5. Follow the steps on the [Localytics SDK to complete installation](http://docs.localytics.com/dev/ios.html#ats-exception-ios). Basically:
    1. Add the Localytics schemes (optional)
    2. Add ATS Exception
    3. **Initialize the SDK** in your AppDelegate.m *(this is the most important step)*. This is where you will be setuping which app key to use.

## Usage

The method names are named the same as in the [iOS SDK][sdk]. Only a few methods are implemented now, but more to come! If you need somehting particular, just open an [issue][issue]! 

```js
import * as Localytics from 'react-native-localytics';
Localytics.tagEvent('eventName', { more: 'attributes' });
```

Tagging events: 
- [x] `tagPurchased({ params?: ItemParams })`
- [x] `tagAddedToCart({ params?: ItemParams})`
- [x] `tagStartedCheckout({ params?: CheckoutParams })`
- [x] `tagCompletedCheckout({ params?: CheckoutParams })`
- [ ] tagContentViewed
- [ ] tagSearched
- [ ] tagShared
- [ ] tagContentRated
- [x] `tagCustomerRegistered({ customer?: Customer, methodName?: string, attributes?: Object })`
- [x] `tagCustomerLoggedIn({ customer?: Customer, methodName?: string, attributes: Object })`
- [x] `tagCustomerLoggedOut({ attributes?: Object })`
- [ ] tagInvited
- [x] `tagEvent(eventName: string, attributes?: Object)`

Identifying users:
- [x] `setCustomerId(id: string)`
- [x] `setCustomerFirstName(name: string)`
- [x] `setCustomerLastName(name: string)`
- [x] `setCustomerFullName(name: string)`
- [x] `setCustomerEmail(email: string)`
- [x] `setLocation({ lng: number, lat: number })`

User profiles:
- [ ] setValue
    - [ ] Numeric value
    - [ ] Numeric values in a set
    - [ ] Date value
    - [ ] Dave values in a set
    - [ ] String value
    - [ ] String value in a set
- [ ] deleteProfileAttribute
- [ ] addValues
    - [ ] Adding a numeric values to a set
    - [ ] Adding a date values to a set
    - [ ] Adding a string values to a set
- [ ] removeValues
    - [ ]  Removing numeric values from a set
    - [ ]  Removing date values from a set
    - [ ]  Removing string values from a set
- [ ] incrementValueBy
- [ ] decrementValueBy

### Customer Object
```
{
  customerId?: string,
  firstName?: string,
  lastName?: string,
  fullName?: string,
  emailAddress?: string,
}
```

### ItemParams Object
```
{
  itemName?: string,
  itemId?: string,
  itemType?: string,
  itemPrice?: number,
  attributes?: Object,
}
```

### CheckoutParams Object
```
{
  totalPrice?: number,
  itemCount?: number,
  attributes?: Object,
}
```

[localytics]: http://localytics.com
[sdk]: http://docs.localytics.com/dev/ios.html#events-ios
[issue]: https://github.com/letsroundup/react-native-localytics/issues
