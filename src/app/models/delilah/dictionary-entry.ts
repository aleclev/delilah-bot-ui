import { DictionaryDefinition } from "./dictionary-definition";
import { DictionaryWord } from "./dictionary-word";

export interface DictionaryEntry {
    word: DictionaryWord;

    definition: DictionaryDefinition;

}