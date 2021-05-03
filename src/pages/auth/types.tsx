
export interface AuthSubmission {
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface AuthError {
    email?: string;
    password?: string;
    confirmPassword?: string;
    "FINAL_FORM/form-error"?: string;
}