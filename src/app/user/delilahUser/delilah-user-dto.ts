
export class DelilahUserDto {
    discordId!: string;
    userId!: string;
    rootDictionary!: DictionaryDto;
    permissionProfile!: PermissionProfileDto;
}

export class DictionaryDto {
    dictionaryId!: string;

    entries!: Array<DictionaryEntryDto>;
}

export class DictionaryEntryDto {
    word!: DictionaryWordDto;

    definition!: DictionaryDefinitionDto;
}

export class DictionaryWordDto {
    word!: string;
}

export class DictionaryDefinitionDto {
    definition!: string;
}

export class PermissionProfileDto {
    roles!: Array<string>;
}