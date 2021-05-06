import { createClient, FilterOperator } from '@supabase/supabase-js'
// import { definitions } from 'types/supabase';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNzE0MDExOCwiZXhwIjoxOTMyNzE2MTE4fQ.HBzGbfdVbwDGuGnEg9-sZ-bbHN7PvoLDyr5HZclxTBk'

const SUPABASE_URL = "https://ufuetbfsraguftpgtybn.supabase.co"
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export class Supabase {
    table = ""

    constructor(tableName: string) {
        this.table = tableName

    }

    async getAll(callback: Function) {
        let { data, error } = await supabase
            .from(this.table)
            .select('*')
        if (error) throw Error(error.message)
        callback(data)
    }

    async filter(field: string | { field: string; operator: string; value: any; }[], operator: string | null = null, value: string = "", select: string = '*', callback: Function) {
        let data, error
        if (typeof field === 'string') {

            let { data: d, error: e } = await supabase
                .from(this.table)
                .select(select)
                .filter(field, operator, value)
            data = d
            error = e
        } else {
            const promise = supabase
                .from(this.table)
                .select(select)
            field.forEach(({ field, operator, value }) => promise['filter'](field, operator, value))
            let { data: d, error: e } = await promise
            data = d
            error = e
        }
            

        if (error) throw Error(error.message)
        callback(data)
    }

    async findById(id: string, callback: Function) {
        let { data, error } = await supabase
            .from(this.table)
            .select('*')
            .eq('id', id)
        if (error) throw Error(error.message)
        callback(data[0])
    }

    async create(newData: Object, callback: Function) {
        const { data, error } = await supabase
        .from(this.table)
        .insert([
            newData
        ])

        if (error) throw Error(error.message)
        callback(data[0])
    }

    async update(update: Object, query: { [key: string]: string; }, callback: Function) {
        const { data, error } = await supabase
            .from(this.table)
            .update(update)
            .match(query)
        
        if (error) throw Error(error.message)
        callback(data[0])
    }

    async delete(query: { [key: string]: string; }, callback: Function) {
        const { data, error } = await supabase
            .from(this.table)
            .delete()
            .match(query)
        
        if (error) throw Error(error.message)
        callback(data)
    }
}

export const userTable = new Supabase('user')
export const projectTable = new Supabase('project')
export const companyTable = new Supabase('company')
export const goalTable = new Supabase('goal')
export const progressTable = new Supabase('progress')
export const eventTable = new Supabase('event')