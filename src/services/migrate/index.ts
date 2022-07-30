import { createServer, Model, Factory, Response } from 'miragejs'

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
            server.createList('user', 10)
        },
        routes(){
            this.namespace = 'api';
            this.timing = 750

            this.get('/users', (schema, request) => {
                const { page = 1, per_page = 10 } = request.queryParams

                const total = schema.all('user').length

                const startPage = (Number(page) - 1) * Number(per_page)
                const endPage = startPage + Number(per_page)

                const users = schema.all('user').users.slice(startPage, endPage)

                return new Response(
                    200, 
                    { 
                        'x-total-count': String(total)
                    }, 
                    { 
                        users
                    });
              });
            this.post('/users');

            this.namespace = '';
            this.passthrough()
        }
    })

    return server
}