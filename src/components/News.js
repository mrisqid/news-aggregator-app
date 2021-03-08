import moment from 'moment'

const News = ({ news }) => {
  return (
    <div className="flex flex-col mb-5 rounded shadow-lg bg-gray-900">
      <div className="flex-none h-56 relative">
        <img
          className="absolute rounded-t inset-0 w-full h-full object-cover"
          src={news.urlToImage ? news.urlToImage : "https://images.unsplash.com/photo-1557680717-c1009626784d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
          alt="example"
        />
        <div className="absolute bg-gradient-to-t from-gray-900 to-transparent inset-x-0 bottom-0 px-6 py-3">
          <h4 className="font-bold text-gray-100 text-xl capitalize">{(news.title).substring(0, 52).concat('...')}</h4>
        </div>
      </div>
      <div className="flex-auto p-6">
        <div className="mb-2">
          <p className="text-xs text-gray-100">{moment(news.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-100">{news.author} | {news.source.name}</p>
        </div>
        <div className="p-1 mb-5">
          <p className="text-gray-100 text-xs leading-relaxed whitespace-normal overflow-ellipsis">
            {news.description}
          </p>
        </div>
        <div className="rounded bg-gradient-to-r from-green-400 via-blue-500 to-pink-600 text-center cursor-pointer">
          <a className="text-xs text-gray-100" href={news.url}>
            Go to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
