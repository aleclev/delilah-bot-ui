import { DictionaryEntry } from "./dictionary-entry";

export class Dictionary {
    dictionaryId: String;

    entries: Array<DictionaryEntry>;

    constructor(dictionaryId: string, entries: Array<DictionaryEntry>) {
        this.dictionaryId = dictionaryId;
        this.entries = entries;
    }
}