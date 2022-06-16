import { Injectable } from '@angular/core'

@Injectable()
export class TokenStorageService {
  private tokenKey = 'auth-token'

  constructor() {}

  public clearSession(): void {
    window.sessionStorage.clear()
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.tokenKey)
    window.sessionStorage.setItem(this.tokenKey, token)
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.tokenKey)
  }
}
