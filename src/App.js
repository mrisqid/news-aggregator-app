import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import Categories from "./components/Categories";
import ListsNews from "./components/ListsNews";

function App() {
  const [query, setQuery] = useState('technology');
  const [page, setPage] = useState(5);
  const [news, setNews] = useState([]);
  const [isError, setIsError] = useState(false);
  const categories = [
    "apple",
    "google",
    "microsoft",
    "playstation",
    "samsung",
    "IBM",
    "asus",
  ]

  useEffect(() => {
    const getNews = async (search, size) => {
      await fetchNews(search, size)
      .then((res) => 
        setNews(res)
      )
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
    };
    
    getNews(query, page);
  }, [query, page]);

  // Fetch News
  const fetchNews = async (search, size) => {
    const res = await axios.get(process.env.REACT_APP_NEWS_URL, {
      params: {
        q: search,
        sortBy: "publishedAt",
        pageSize: size,
        language: 'en',
      },
    });
    const data = await res.data.articles;

    return data;
  };

  // Search
  const searchNews = (e) => {
    if(e.key === 'Enter' && e.target.value !== '') {
      setQuery(e.target.value)
      setPage(5)
    }
  }

  return (
    <div className="font-serif">
      <Header />
      <Search search={searchNews} />
      <Categories item={categories} setQuery={setQuery} setPage={setPage} />
      {
        isError ? (
          <div className="max-w-sm mx-auto">
            <div className="py-5 flex justify-center text-2xl text-red-900">
              Opps.. There is an Error!
            </div>
          </div>
        ) : (
          <ListsNews news={news} page={page} setPage={setPage} />
        )
      }
    </div>
  );
}

export default App;
