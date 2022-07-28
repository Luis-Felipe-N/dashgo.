import { createServer, Model, Factory } from 'miragejs'

interface IUser {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<IUser>>({})
        },
        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `user ${i + 1}`
                },
                email(i:number) {
                    return `email0${i}@mail.com`
                },
                createdAt() {
                    return new Date()
                }
            })
        },
        seeds(server) {
            server.createList('user', 200)
        },
        routes(){
            this.namespace = 'api';
            this.timing = 750

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough()
        }
    })

    return server
}