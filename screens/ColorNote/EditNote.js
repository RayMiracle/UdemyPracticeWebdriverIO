export class EditNote {

    get editingText() {
        return $('//android.widget.TextView[@text="Editing"]');
    }

    get noteTitleInput() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteBodyInput() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editNoteButton() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get noteBodyView() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    get moreMenu() {
        return $('~More');
    }

    get moreMenuDeleteOption() {
        return $('//android.widget.TextView[@text="Delete"]');
    }

    get alertOkButton() {
        return $('//android.widget.Button[@text="OK"]');
    }

    async setNoteContent(title, body) {
        await expect(this.editingText).toBeDisplayed();
        await this.noteTitleInput.setValue(title);
        await this.noteBodyInput.setValue(body);
        await driver.back();
        await driver.back();
    }

    async verifyNoteCreated(title, body) {
        await expect(this.editNoteButton).toBeDisplayed();
        await expect(this.noteTitleInput).toHaveText(title);
        await expect(this.noteBodyView).toHaveText(body);
        await driver.back();
    }

    async deleteNote() {
        await this.moreMenu.click();
        await this.moreMenuDeleteOption.click();
        await this.alertOkButton.click();
    }

}