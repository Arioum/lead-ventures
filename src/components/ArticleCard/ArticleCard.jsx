import { RxDividerVertical } from 'react-icons/rx';
import { MdReadMore } from 'react-icons/md';
import classes from './articlecard.module.scss';

const ArticleCard = ({ title, desc, thumbnail, readTime, author }) => {
  return (
    <article className={classes.article}>
      <div className={classes.article__thumbnail}>
        <img src={`./assets/news-articles/${thumbnail}.png`} alt={thumbnail} />
      </div>
      <div className={classes.article__info}>
        <h6>{title}</h6>
        <p>{desc}</p>
        <div className={classes.article__info__footer}>
          <div>
            <span>{readTime} ago</span>
            <RxDividerVertical size={25} color='#474747' />
            <span>{author}</span>
          </div>
          <MdReadMore size={30} color='#0F4634' />
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
