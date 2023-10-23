import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/cookie';
import { Observable, firstValueFrom } from 'rxjs';
import { DelilahUser } from '../../models/delilah/delilah-user';
import { environment } from 'src/environments/environment';
import { DelilahUserDto } from './delilah-user-dto';
import { PermissionProfile } from 'src/app/models/delilah/permission-profile';
import { Dictionary } from 'src/app/models/delilah/dictionary';
import { DictionaryEntry } from 'src/app/models/delilah/dictionary-entry';
import { DictionaryWord } from 'src/app/models/delilah/dictionary-word';
import { DictionaryDefinition } from 'src/app/models/delilah/dictionary-definition';
import { Role } from 'src/app/models/delilah/role';

@Injectable({
  providedIn: 'root'
})
export class DelilahUserService {

  private delilahUser!: DelilahUser;

  constructor(private http_client: HttpClient) { }

  public getDelilahUser(): DelilahUser {
    return this.delilahUser;
  }

  public async reloadDelilahUser(): Promise<DelilahUser> {
    
    let dto = await firstValueFrom(this.getCurrentDelilahUserObservable());

    this.delilahUser = this.assembleUser(dto);

    return this.delilahUser;
  }

  private assembleUser(dto: DelilahUserDto): DelilahUser {
    let dictDto = dto.rootDictionary;
    let rootDictionary = 
      new Dictionary(dictDto.dictionaryId, 
        dictDto.entries
        .map(e => 
          new DictionaryEntry(
            new DictionaryWord(e.word.word), 
            new DictionaryDefinition(e.definition.definition)
          )
        )
      );

    let permissionProfile = new PermissionProfile(dto.permissionProfile.roles.map(r => r as Role))

    return new DelilahUser(dto.discordId, dto.userId, rootDictionary, permissionProfile);
  }

  private getCurrentDelilahUserObservable(): Observable<DelilahUserDto> {
    return this.http_client.get<DelilahUserDto>(environment.delilah.server.url + '/user/@me', 
    {headers: {'access_token': Cookie.get("access_token")}});
  }
}
