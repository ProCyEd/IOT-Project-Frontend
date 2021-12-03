export default async function verifyToken() {
    
    const result = await fetch('http://localhost:3000/api/auth/authorization', {
        credentials: 'include'
    })
    const res = await result.json()
    return res;
}