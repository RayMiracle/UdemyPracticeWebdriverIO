import { config } from './wdio.shared.conf.js';
import 'dotenv/config';

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = ['../tests/specs/ColorNote/SecondTestsPOM.js'];

config.capabilities = [{
    platformName: 'Android',
    'appium:platformVersion': '16.0',
    'appium:deviceName': 'Google Pixel 9',
    'appium:automationName': 'UIAutomator2',
    'appium:app': 'bs://14c76257c6f6480a9b8f91a8250848c5c89637b4',
    'appium:autoGrantPermissions': true
}];

config.services = ['browserstack'];

export { config };