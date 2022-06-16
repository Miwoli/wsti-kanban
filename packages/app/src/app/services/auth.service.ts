import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable, tap } from 'rxjs'
import { environment } from '../../environments/environment'
import { User } from '../model/user'
import { TokenStorageService } from './token-storage.service'

interface accessToken {
  access_token: string
}

@Injectable()
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`
  public isLoggedIn$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false)
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
  ) {
  }

  public login(login: string, password: string): Observable<string> {
    return this.http
      .post<accessToken>(`${this.apiUrl}/login`, { login, password })
      .pipe(
        map((token: accessToken) => {
          this.tokenStorageService.saveToken(token.access_token)
          this.isLoggedIn$.next(true)
          return token.access_token
        })
      )
  }

  public logout(): void {
    this.tokenStorageService.clearSession()
    this.isLoggedIn$.next(false)
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user)
  }
}
