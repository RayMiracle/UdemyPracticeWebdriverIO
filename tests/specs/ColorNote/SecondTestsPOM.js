import { AddNote } from "../../../screens/ColorNote/AddNote";
import { EditNote } from "../../../screens/ColorNote/EditNote";

const addNote = new AddNote();
const editNote = new EditNote();

describe('ColorNote App', () => {

    it('Skip welcome screen', async () => {
        await addNote.skipWelcomeScreen();
    });

    const noteTitle = 'My first note';
    const noteBody = 'This is my first note\nSubject to change';

    it('Add new note', async () => {
        await addNote.startAddingNote();
        await editNote.setNoteContent(noteTitle, noteBody);
        await editNote.verifyNoteCreated(noteTitle, noteBody);
    });

    it('Delete note', async () => {
        await addNote.noteByTitle(noteTitle).click();
        await editNote.deleteNote();
        await addNote.verifyNoteDeleted(noteTitle);
        await addNote.emptyTrash(noteTitle);
    });

    it('Navigate to facebook website and back', async () => {
        await addNote.navigationMenu.click();
        await addNote.facebookLink.click();

        // 1st option, locator from the inspector NATIVE_APP context
        // await expect($('//android.widget.Button[@text="Cover photo of ColorNote"]')).toBeDisplayed();

        // 2nd option, locator from the inspector WEBVIEW_chrome context
        await driver.switchContext('WEBVIEW_chrome');
        await expect($('.img.contain')).toBeDisplayed();

        await driver.switchContext('NATIVE_APP');
        await driver.back();
        await expect(addNote.facebookLink).toBeDisplayed();
    });

});