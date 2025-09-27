describe('First Tests', () => {
    // All tests run after each other in the same session, so they are dependent on each other

    // it('Find element by accessibility id', async () => {
    //     // Find element by accessibility id
    //     const appOption = await $('~App');
    //     // Click on the element
    //     await appOption.click();
    //     // Assertion
    //     const actionBar = await $('~Action Bar');
    //     await expect(actionBar).toBeDisplayed();
    // });

    // it('Find element by class/tag/type name', async () => {
    //     // Find element by class name, unsually not unique
    //     const className = await $('android.widget.TextView');
    //     await expect(className).toHaveText('API Demos'); // Text of the first element found
    // });

    // it('Find elements by xpath', async () => {
    //     // Find element by xpath, //tagName[@attribute='value']
    //     const alertDialogsOption = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    //     await alertDialogsOption.click();
    //     const listDialogOption = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
    //     await listDialogOption.click();
    //     const commandTwoOption = await $('//android.widget.TextView[@text="Command two"]');
    //     await commandTwoOption.click();
    //     const commandTwoText = await $('android.widget.TextView');
    //     await expect(commandTwoText).toHaveText('You selected: 1 , Command two');
    // });

    // it('Find elements by android UiSelector', async () => {
    //     // Find element by android UiSelector
    //     const alertDialogsOption = await $('android=new UiSelector().textMatches("Alert Dialogs")');
    //     await alertDialogsOption.click();
    // });

    // it('Find multiple elements', async () => {
    //     const expectedList = [
    //         'API Demos',
    //         "Access'ibility",
    //         'Accessibility',
    //         'Animation',
    //         'App',
    //         'Content',
    //         'Graphics',
    //         'Media',
    //         'NFC',
    //         'OS',
    //         'Preference',
    //         'Text',
    //         'Views'
    //     ];
    //     const actualList = [];
    //     // Find multiple elements
    //     const listOfOptions = await $$('android.widget.TextView');
    //     for (const option of listOfOptions) {
    //         actualList.push(await option.getText());
    //     }
    //     await expect(actualList).toEqual(expectedList);
    // });

    // Exercise - Working with text input field
    // 1. Go to "Views" > Auto Complete > 1. Screen Top
    // 2. Write "Czech Republic" into the Country text input field
    // 3. Verify that the "Czech Republic" text entered correctly
    // it('Working with text input field', async () => {
    //     await $('~Views').click();
    //     await $('~Auto Complete').click();
    //     await $('~1. Screen Top').click();
    //     const countryInput = await $('android.widget.AutoCompleteTextView');
    //     await countryInput.setValue('Czech Republic');
    //     await expect(countryInput).toHaveText('Czech Republic');
    // });

    // it('Access specific screen directly by package and activity', async () => {
    //     // Start the app directly on the Alert Dialogs screen
    //     await driver.startActivity('io.appium.android.apis', '.app.AlertDialogSamples');
    //     // Click on specific alert and close it
    //     await $('~OK Cancel dialog with a message').click();
    //     const alertText = await driver.getAlertText();
    //     await expect(alertText).toContain('Lorem ipsum dolor sit aie consectetur adipiscing');
    //     // await driver.acceptAlert();
    //     await driver.dismissAlert();
    //     await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toBeDisplayed();
    // });

    // it('Vertical scroll to specific element', async () => {
    //     await $('~App').click();
    //     await $('~Activity').click();
    //     // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
    //     // await $('~Secure Surfaces').click();
    //     await expect($('~Secure Dialog')).toBeDisplayed();
    // });

    // it('Horizontal scroll', async () => {
    //     await driver.startActivity('io.appium.android.apis', '.view.Gallery1');
    //     // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    // });

    // Exercise - Scrolling
    // 1. Go to "Views" > "Date Widgets" > "1. Dialog"
    // 2. Get the current date
    // 3. Click on the "change the date" button
    // 4. Scroll to the right to the next month
    // 5. Pick the 10th day of the month
    // 6. Click on the OK button
    // 7. Verify that the date has changed
    // it('Scrolling', async () => {
    //     await $('~Views').click();
    //     await $('~Date Widgets').click();
    //     await $('~1. Dialog').click();
    //     const currentDate = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
    //     await $('~change the date').click();
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    //     await $('//android.view.View[@text="10"]').click();
    //     await $('//android.widget.Button[@text="OK"]').click();
    //     const changedDate = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
    //     await expect(changedDate).not.toEqual(currentDate);
    // });

});