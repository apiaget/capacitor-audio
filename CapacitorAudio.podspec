
  Pod::Spec.new do |s|
    s.name = 'CapacitorAudio'
    s.version = '0.0.1'
    s.summary = 'Provide audio capabilities to Capacitor apps.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/apiaget/capacitor-audio'
    s.author = 'apiaget'
    s.source = { :git => 'https://github.com/apiaget/capacitor-audio', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end