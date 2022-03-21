export default async function verifyToken() {
    
    const result = await fetch('http://localhost:3001/authenticate', {
        method: 'POST',
        credentials: 'include'
    })
    const res = await result.json()
    return res;
}