const apiUrl = process.env.NODE_ENV === "production"? 'http://localhost:5000' :"https://basecamp-backend.vercel.app/"

export { apiUrl };