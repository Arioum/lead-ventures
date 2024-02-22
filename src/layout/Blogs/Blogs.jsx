import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Button from '../../components/Button/Button';
import NewsCard from '../../components/NewsCard/NewsCard';
import classes from './blog.module.scss';

const articles = [
  {
    title: 'New to the Investment Team?',
    desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Massa ipsum sit nisi eget ut lectus consequat rhoncus id...',
    readTime: '2 mins',
    thumbnail: 'article-1',
    author: 'Mrinal Mishra',
  },
  {
    title: 'Is it the Beginning of the end or The end of the beginning?',
    desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Massa ipsum sit...',
    readTime: '7 mins',
    thumbnail: 'article-2',
    author: 'Ajay Billan M',
  },
  {
    title: 'How to pick the right tools for investment?',
    desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Massa ipsum sit...',
    readTime: '6 mins',
    thumbnail: 'article-3',
    author: 'Rohan Kumar',
  },
  {
    title: 'Investments driving by Emotions? How to overcome?',
    desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Massa ipsum sit...',
    readTime: '4 mins',
    thumbnail: 'article-4',
    author: 'Cathy Jones',
  },
];

const news = [
  {
    title: 'Lead.venture raised a total of $21m in the last quarter',
    timeStamp: '4 hours',
    thumbnail: 'leadventures',
    source: 'Financial Magazine',
  },
  {
    title:
      'Lead.venture backed startup BEKiS surpassed $300m in annual revenue.',
    timeStamp: '2 weeks',
    thumbnail: 'bekis',
    source: 'Financial Magazine',
  },
];

const Blogs = () => {
  return (
    <section className={classes.blogs}>
      <hr />
      <div className={classes.blogs__header}>
        <div className={classes.blogs__header__text}>
          <h3>Blogs & News</h3>
          <h6>
            Learn more about who and what we invest in, news from the portfolio
            and original content.
          </h6>
        </div>
        <Button size='large' variant='primary'>
          View more
        </Button>
      </div>
      <div className={classes.blogs__main}>
        <div className={classes.blogs__main__articles}>
          <h5>Articles curated by our Experts:</h5>
          <div className={classes.blogs__main__articles__cont}>
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                desc={article.desc}
                thumbnail={article.thumbnail}
                readTime={article.readTime}
                author={article.author}
              />
            ))}
          </div>
        </div>
        <div className={classes.blogs__main__news}>
          <h5>Now Breaking:</h5>
          <div className={classes.blogs__main__news__cont}>
            {news.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                thumbnail={news.thumbnail}
                timeStamp={news.timeStamp}
                source={news.source}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
