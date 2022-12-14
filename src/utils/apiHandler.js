const SITE_HOST = process.env.VERCEL_URL || 'http:/localhost:3000'

export default async function apiHandler(path, append) {
    try {
        const response = await fetch(`${SITE_HOST}/api/${path}`)
        const data = await response.json()
        return data
    } catch (err) {
        return console.error(err)
    }
}