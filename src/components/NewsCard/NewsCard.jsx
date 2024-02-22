import { RxDividerVertical } from 'react-icons/rx';
import { MdReadMore } from 'react-icons/md';
import classes from './newscard.module.scss';

const NewsCard = ({ title, thumbnail, timeStamp, source }) => {
  return (
    <article className={classes.news}>
      <div className={classes.news__thumbnail}>
        <img
          src={`./assets/news-articles/news-${thumbnail}.png`}
          alt={thumbnail}
        />
      </div>
      <div className={classes.news__info}>
        <h6>{title}</h6>
        <div className={classes.news__info__footer}>
          <div>
            <span>{timeStamp} ago</span>
            <RxDividerVertical size={25} color='#474747' />
            <span>{source}</span>
          </div>
          <MdReadMore size={30} color='#0F4634' />
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
