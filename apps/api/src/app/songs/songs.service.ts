import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response as MonstercatResponse } from '@icetokki/api-interfaces';

@Injectable()
export class SongsService {
  getSongs(
    filter: string,
    genres: string[] = [],
    limit: number = 0,
    skip: number = 0
  ): Observable<MonstercatResponse> {
    return this.http
      .get<MonstercatResponse>(
        `https://connect.monstercat.com/v2/catalog/browse?creatorfriendly=1&limit=${limit}&skip=${skip}`
      )
      .pipe(map((x) => x.data));
  }

  /**
   *
   */
  constructor(private http: HttpService) {}
}
