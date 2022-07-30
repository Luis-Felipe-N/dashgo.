import { useQuery } from "@tanstack/react-query"
import { api } from "../services/api"
import { IUser } from "../types/Users"

export async function getUsers(): Promise<IUser[]> {
    const { data } = await api.get('users')

    const users = data.users.map((user: IUser) => {
        return {
            id: user.id,
            name: user.name,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return users
}

export function useUsers() {
    return useQuery(['users'], getUsers, {staleTime: 1000 * 5})
}