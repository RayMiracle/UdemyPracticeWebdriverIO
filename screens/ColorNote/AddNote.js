export class AddNote {

    get startSkipButton() {
        return $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteText() {
        return $('//android.widget.TextView[@text="Add note"]');
    }

    get addNoteButton() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    get noteTextType() {
        return $('//android.widget.TextView[@text="Text"]');
    }

    noteByTitle(title) {
        return $(`//android.widget.TextView[@text="${title}"]`);
    }

    get noteListView() {
        return $('android.widget.ListView');
    }

    get navigationMenu() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get navigationMenuTrashCanOption() {
        return $('//android.widget.TextView[@text="Trash Can"]');
    }

    get trashButton() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    async skipWelcomeScreen() {
        await this.startSkipButton.click();
        await expect(this.addNoteText).toBeDisplayed();
    }

    async startAddingNote() {
        await this.addNoteButton.click();
        await this.noteTextType.click();
    }

    async verifyNoteDeleted(title) {
        await expect(this.noteListView).not.toHaveText(title);
        await this.navigationMenu.click();
        await this.navigationMenuTrashCanOption.click();
        await expect(this.noteByTitle(title)).toBeDisplayed();
    }

    async emptyTrash(title) {
        await this.trashButton.click();
        await driver.acceptAlert();
        await expect(this.noteListView).not.toHaveText(title);
    }

}