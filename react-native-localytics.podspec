require 'json'
package_json = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.name           = "react-native-localytics"
  s.version        = package_json["version"]
  s.summary        = package_json["description"]
  s.homepage       = "https://github.com/letsroundup/react-native-localytics"
  s.license        = package_json["license"]
  s.author         = { package_json["author"] => package_json["author"] }
  s.platform       = :ios, "8.0"
  s.source         = { :git => package_json["repository"]["url"] }
  s.source_files   = 'ios/VOOLocalytics.{h,m}'
  s.dependency 'React'
end
