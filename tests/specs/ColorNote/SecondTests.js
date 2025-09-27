describe('ColorNote App', () => {

    it('Skip welcome screen', async () => {
        await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//android.widget.TextView[@text="Add note"]')).toBeDisplayed();
    });

    const noteTitle = 'My first note';
    const noteBody = 'This is my first note\nSubject to change';

    it('Add new note', async () => {
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
        await $('//android.widget.TextView[@text="Text"]').click();
        await expect($('//android.widget.TextView[@text="Editing"]')).toBeDisplayed();
        await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue(noteTitle);
        await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue(noteBody);
        await driver.back(); // Save the note
        await expect($('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')).toHaveText(noteTitle);
        await expect($('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText(noteBody);
        await driver.back();
    });

    it('Delete note', async () => {
        await $(`//android.widget.TextView[@text="${noteTitle}"]`).click();
        await $('~More').click();
        await $('//android.widget.TextView[@text="Delete"]').click();
        await $('//android.widget.Button[@text="OK"]').click();
        await expect($('android.widget.ListView')).not.toHaveText(noteTitle);
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//android.widget.TextView[@text="Trash Can"]').click();
        await expect($(`//android.widget.TextView[@text="${noteTitle}"]`)).toBeDisplayed();
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
        await $('//android.widget.Button[@text="OK"]').click();
        await expect($('android.widget.ListView')).not.toHaveText(noteTitle);
    })


});