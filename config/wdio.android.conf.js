import { config } from './wdio.shared.conf.js';
import path from 'path';

config.port = 4723;

config.specs = ['../tests/specs/ColorNote/SecondTestsPOM.js'];

config.capabilities = [{
    platformName: 'Android',
    'appium:platformVersion': '16.0',
    'appium:deviceName': 'Pixel 3',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
    'appium:autoGrantPermissions': true,
    'appium:chromedriverAutodownload': true
}];

config.services = [['appium', {
    args: {
        relaxedSecurity: true
    }
}]];

export { config };