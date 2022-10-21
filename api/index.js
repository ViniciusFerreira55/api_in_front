const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

fastify.register(cors, { 
  // put your options here
  origin: "*",
  methods: "*",
  allowedHeaders: "*"
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.get('/livros', async (request, reply) => {
  return { message: [
    {
      nome: "livro1",
      autor: "francis",
      distribuidora: "saraiva"
    },
    {
      nome: "livro2",
      autor: "dona",
      distribuidora: "saraiva"
    },
    {
      nome: "livro3",
      autor: "ianella",
      distribuidora: "saraiva"
    }
  ]}
})

fastify.post('/livros', async (request, reply) => {
  return { message: 'created livros' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()