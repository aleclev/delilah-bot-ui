import { DictionaryEntry } from "./dictionary-entry";

export interface Dictionary {
    dictionaryId: String;

    entries: Array<DictionaryEntry>;
}