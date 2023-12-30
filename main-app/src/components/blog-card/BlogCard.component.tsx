
// import { BlogPost as BlogPostProps } from "../../application-data/blogs/blogPostTypes";
import './BlogCard.styles.scss'
import { FaArrowRight } from 'react-icons/fa6';

type BlogProps = {
    blog: BlogPostProps
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BlogCard = ({ blog }: BlogProps) => {
    const { title, authorImgUrl, authorImgAlt, author, created, imgsrc, imgalt } = blog;
    const month = new Date(created).getMonth();
    const year = new Date(created).getFullYear();
    return (
        <article className="blog-card">
            <img className="blog-card__image" src={imgsrc} alt={imgalt} />
            <div className="blog-card__content">
                <h2 className="blog-card__content__title">{title}</h2>
                <div className="blog-card__content__author-section">
                    <img className="blog-card__content__author-section-image" src={authorImgUrl} alt={authorImgAlt} />
                    <div>
                        <p className="blog-card__content__author-section-text">{author}</p>
                        <p className="blog-card__content__author-section-text">{months[month - 1]} {year}</p>
                    </div>
                </div>
                <div className="blog-card__read-more">
                    <p>Read more </p>
                    <FaArrowRight />
                </div>
            </div>
        </article>
    );
}

export default BlogCard;