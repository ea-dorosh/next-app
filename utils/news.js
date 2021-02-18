export const fetchNews = async () => {
 const response = await fetch('http://localhost:3004/news');
 const news = await response.json();
 return {news}
}
