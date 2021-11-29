export default async function checkPermissions(token) {
    console.log(token)
    const result = await fetch('http://localhost:3000/api/auth/data')
    const data = await result.json()

    console.log(data)
}