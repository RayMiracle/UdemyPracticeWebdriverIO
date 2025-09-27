import { config } from './wdio.shared.conf.js';
import path from 'path';

config.port = 4723;

config.specs = ['../tests/specs/ColorNote/SecondTestsPOM.js'];

config.capabilities = [{
    platformName: 'iOS',
    'appium:platformVersion': '17',
    'appium:deviceName': 'iPhone 12 Pro',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app')
}];

config.services = ['appium'];

export { config };