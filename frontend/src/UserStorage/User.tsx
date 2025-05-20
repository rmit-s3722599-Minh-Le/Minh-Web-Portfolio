export function setUser(Username: string) {
    localStorage.setItem("username", Username)
}

export function getUser() {
    return localStorage.getItem("username")
}

export function removeUser() {
    localStorage.removeItem("username")
}

export function isUserOnline() {
    return getUser() && true
}

export function logout() {
    removeUser()
    window.location.href = {ROUTE.LOGIN}
}