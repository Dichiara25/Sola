export function isValidEmail(email: string): boolean {
    const regex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export function containsUppercase(password: string): boolean {
    return /[A-Z]/.test(password);
}

export function containsLowercase(password: string): boolean {
    return /[a-z]/.test(password);
}

export function containsSpecialCharacter(password: string): boolean {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
}

export function containsNumber(password: string): boolean {
    return /[0-9]/.test(password);
}

export function isValidPassword(password: string, minimumLength: number): boolean {
    // Check if password is at least 12 characters long
    const isLongEnough = password.length >= minimumLength;

    // Check for at least one uppercase letter
    const hasUppercase = containsUppercase(password);

    // Check for at least one lowercase letter
    const hasLowercase = containsLowercase(password);

    // Check for at least one special character
    const hasSpecialChar = containsSpecialCharacter(password);

    // Check for at least one number
    const hasNumber = containsNumber(password);

    return isLongEnough && hasUppercase && hasLowercase && hasSpecialChar && hasNumber;
}