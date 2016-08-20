#import "VOOLocalytics.h"

#import <Localytics/Localytics.h>
#import "RCTConvert.h"
#import "RCTEventDispatcher.h"

@implementation VOOLocalytics

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

#pragma mark - Private methods

- (LLCustomer*)createCustomerFromParams:(NSDictionary*)builderParams
{
  if (builderParams == nil) {
    return nil;
  }

  return [LLCustomer customerWithBlock:^(LLCustomerBuilder* builder) {
    builder.customerId = builderParams[@"customerId"];
    builder.firstName = builderParams[@"firstName"];
    builder.lastName = builderParams[@"lastName"];
    builder.fullName = builderParams[@"fullName"];
    builder.emailAddress = builderParams[@"emailAddress"];
  }];
}

# pragma mark - Exposed methods

# pragma mark - Tagging Events

RCT_EXPORT_METHOD(tagPurchased:(NSDictionary*)params)
{
  NSString* itemName = params[@"itemName"];
  NSString* itemId = params[@"itemId"];
  NSString* itemType = params[@"itemType"];
  NSNumber* itemPrice = [RCTConvert NSNumber:params[@"itemPrice"]];
  NSDictionary* attributes = params[@"attributes"];

  [Localytics tagPurchased:itemName itemId:itemId itemType:itemType itemPrice:itemPrice attributes:attributes];
}

RCT_EXPORT_METHOD(tagAddedToCard:(NSDictionary*)params)
{
  NSString* itemName = params[@"itemName"];
  NSString* itemId = params[@"itemId"];
  NSString* itemType = params[@"itemType"];
  NSNumber* itemPrice = [RCTConvert NSNumber:params[@"itemPrice"]];
  NSDictionary* attributes = params[@"attributes"];

  [Localytics tagAddedToCart:itemName itemId:itemId itemType:itemType itemPrice:itemPrice attributes:attributes];
}

RCT_EXPORT_METHOD(tagStartedCheckout:(NSDictionary*)params)
{
  NSNumber* totalPrice = [RCTConvert NSNumber:params[@"totalPrice"]];
  NSNumber* itemCount = [RCTConvert NSNumber:params[@"itemCount"]];
  NSDictionary* attributes = params[@"attributes"];

  [Localytics tagStartedCheckout:totalPrice itemCount:itemCount attributes:attributes];
}

RCT_EXPORT_METHOD(tagCompletedCheckout:(NSDictionary*)params)
{
  NSNumber* totalPrice = [RCTConvert NSNumber:params[@"totalPrice"]];
  NSNumber* itemCount = [RCTConvert NSNumber:params[@"itemCount"]];
  NSDictionary* attributes = params[@"attributes"];

  [Localytics tagCompletedCheckout:totalPrice itemCount:itemCount attributes:attributes];
}

RCT_EXPORT_METHOD(tagCustomerRegistered:(NSDictionary*)params)
{
  LLCustomer* customer = [self createCustomerFromParams:[RCTConvert NSDictionary:params[@"customer"]]];
  NSString* methodName = params[@"methodName"];
  NSDictionary* attributes = params[@"attributes"];

  [Localytics tagCustomerRegistered:customer methodName:methodName attributes:attributes];
}

RCT_EXPORT_METHOD(tagCustomerLoggedIn:(NSDictionary*)params)
{
  LLCustomer* customer = [self createCustomerFromParams:[RCTConvert NSDictionary:params[@"customer"]]];
  NSString* methodName = params[@"methodName"];
  NSDictionary* attributes = params[@"attributes"];

  [Localytics tagCustomerLoggedIn:customer methodName:methodName attributes:attributes];
}

RCT_EXPORT_METHOD(tagCustomerLoggedOut:(NSDictionary*)params)
{
  NSDictionary* attributes = params[@"attributes"];

  [Localytics tagCustomerLoggedOut:attributes];
}

RCT_EXPORT_METHOD(tagEvent:(NSDictionary*)params)
{
  NSString* eventName = params[@"eventName"];
  NSDictionary* attributes = params[@"attributes"];

  [Localytics tagEvent:eventName attributes:attributes];
}

RCT_EXPORT_METHOD(setCustomerId:(NSString*)userId)
{
  [Localytics setCustomerId:userId];
}

RCT_EXPORT_METHOD(setCustomerFirstName:(NSString*)name)
{
  [Localytics setCustomerFirstName:name];
}

RCT_EXPORT_METHOD(setCustomerLastName:(NSString*)name)
{
  [Localytics setCustomerLastName:name];
}

RCT_EXPORT_METHOD(setCustomerFullName:(NSString*)name)
{
  [Localytics setCustomerFullName:name];
}

RCT_EXPORT_METHOD(setCustomerEmail:(NSString*)email)
{
  [Localytics setCustomerEmail:email];
}

RCT_EXPORT_METHOD(setLocation:(NSDictionary*)params)
{
  CLLocationCoordinate2D coords;
  coords.longitude = [RCTConvert double:params[@"lng"]];
  coords.latitude = [RCTConvert double:params[@"lat"]];
  [Localytics setLocation:coords];
}


@end
