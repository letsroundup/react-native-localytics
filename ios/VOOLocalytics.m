#import "VOOLocalytics.h"

#import "Localytics.h"
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

@end
