import { DictionaryDefinition } from "./dictionary-definition";
import { DictionaryWord } from "./dictionary-word";

export class DictionaryEntry {
    
    word: DictionaryWord;

    definition: DictionaryDefinition;

    constructor(word: DictionaryWord, definition: DictionaryDefinition) {
        this.word = word;
        this.definition = definition;
    }

}