import instance from './request.js'

export function fetchLogin(username, password) {
    return instance.post(`login`, { username, password })
}