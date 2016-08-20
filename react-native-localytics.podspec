require 'json'
package_json = JSON.parse(File.read('package.json'))

Pod::Spec.new do |spec|

  spec.name           = "react-native-localytics"
  spec.version        = package_json["version"]
  spec.summary        = package_json["description"]
  spec.homepage       = "https://github.com/letsroundup/react-native-localytics"
  spec.license        = package_json["license"]
  spec.author         = { package_json["author"] => package_json["author"] }
  spec.platform       = :ios, "8.0"
  spec.source         = { :git => package_json["repository"]["url"] }
  spec.dependency 'React'
  spec.default_subspec = 'Dynamic'

  spec.subspec 'Core' do |core|
    core.source_files = 'ios/*.{h,m}'
  end

  spec.subspec 'Dynamic' do |dynamic|
    dynamic.dependency 'react-native-localytics/Core'
    dynamic.dependency 'Localytics'
  end
  spec.subspec 'Static' do |static|
    static.dependency 'react-native-localytics/Core'
    static.dependency 'LocalyticsStaticFramework'
  end
end
