import { users } from './data'

export async function GET () {
  return Response.json(users)
}

export async function POST ( request: Request ) {
  const user = await request.json()
  const newUser = {
    id: users.length + 1,
    name: user.name,
    last_name: user.last_name,
    email: user.email
  }

  users.push(newUser)

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200
  })
}