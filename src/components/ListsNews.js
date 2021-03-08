import InfiniteScroll from 'react-infinite-scroll-component'

import { VscLoading } from 'react-icons/vsc'

import News from './News'

const ListsNews = ({ news, page, setPage }) => {
  return (
    <div className="max-w-sm mx-auto">
      <InfiniteScroll
        dataLength={news.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={
          <div className="py-5 flex justify-center text-3xl text-gray-900">
            <VscLoading className="animate-spin" />
            Loading...
          </div>
        }
      >
        {
          news.map((article) => (
            <News news={article} key={article.content} />
          ))
        }
      </InfiniteScroll>
    </div>
  );
};

export default ListsNews;
