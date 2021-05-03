import { createClient } from '@supabase/supabase-js'
import { supabase } from './supabase'

export const getSession = () => supabase.auth.session()
export const getCurrentUser = () => supabase.auth.user()

export const signUp = async (email: string, password: string) => {
    let { user, error } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) return error
    return user
}

export const signIn = async (email: string, password: string) => {
    let { user, error } = await supabase.auth.signIn({
        email,
        password,
    })

    if (error) return error
    return user
}

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return error
} 