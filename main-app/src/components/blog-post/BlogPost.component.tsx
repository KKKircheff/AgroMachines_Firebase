import { useEffect, useState } from "react";
import { db, storage } from "../../utils/firebase-utils";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getDoc, doc } from 'firebase/firestore'

// import i18next from "i18next";
import { useNavigate, useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import useComponentPath from "../../hooks/componentPath";

import './BlogPost.styles.scss'

interface BlogPost {
    blogID: string;
    title: string;
    author: string;
    authorImgUrl: string;
    authorImgAlt: string;
    created: number;
    year: number;
    month: number;
    imgsrc: string;
    imgalt: string;
    sections: BlogSection[];
};


interface BlogSection {
    type: string;
    content?: string;
    links?: string[];
    level?: number; // Only required for "heading" sections
    style?: 'unordered' | 'ordered'; // Only required for "list" sections
    items?: string[]; // Only required for "list" sections
    src?: string; // Only required for "image" sections
    alt?: string; // Only required for "image" sections
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BlogPost = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    // useComponentPath(`blog/${id}`)

    const [data, setData] = useState<BlogPost | null>(null);

    const getImageUrl = async (imageName: string) => {
        const fullPath = `blogs/${id}/${imageName}`
        try {
            const pathReference = ref(storage, fullPath);
            const url = await getDownloadURL(pathReference)
            const newUrl = new URL(url, import.meta.url).href
            return newUrl;
        } catch (error) {
            return 'https://firebasestorage.googleapis.com/v0/b/red-digit-ai.appspot.com/o/blogs%2FblogPost-empty%2Fred-digit-ai-default.webp?alt=media&token=290a56ea-1f0a-4eaa-8b80-bada0add9fa1'; // Return null if there's an error
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const docRef = doc(db, "blogs", id);
                    const docSnap = await getDoc(docRef);
                    const blogData = docSnap.data()!
                    const newAuthorUrl = await getImageUrl(blogData.authorImgUrl);
                    const newSections = await Promise.all(blogData.sections.map(async (section: any) => {
                        if (section.type === 'image') {
                            const src = await getImageUrl(section.src);
                            return { ...section, src };
                        }
                        return section;
                    }));
                    // @ts-ignore
                    setData({ ...blogData, authorImgUrl: newAuthorUrl, sections: [...newSections] })
                } else {
                    navigate("/blog");
                }
            } catch {
                navigate("/blog");
            }
        };

        fetchData();
    }, [id]);

    const renderFormattedContent = (content: string, links: string[] = []) => {
        const parts = content.split(/(###|!!!|%%%)/);
        const formattedContent = [];
        let isBold = false;
        let isItalic = false;
        let isLink = false;
        let linkIndex = 0;

        for (const part of parts) {
            if (part === "###") {
                isBold = !isBold;
            } else if (part === "!!!") {
                isItalic = !isItalic;
            } else if (part === "%%%") {
                isLink = !isLink;
            } else {
                if (isLink) {
                    formattedContent.push(
                        <a key={formattedContent.length} href={links[linkIndex++]} className="blog-page__link">
                            {part}
                        </a>
                    );
                } else if (isBold) {
                    formattedContent.push(
                        <strong key={formattedContent.length} className="blog-page__bold">
                            {part}
                        </strong>
                    );
                } else if (isItalic) {
                    formattedContent.push(
                        <em key={formattedContent.length} className="blog-page__italic">
                            {part}
                        </em>
                    );
                } else {
                    formattedContent.push(<span key={formattedContent.length}>{part}</span>);
                }
            }
        }

        return formattedContent;
    };

    return (
        <div className="blog-page">
            {data ? (
                <>
                    <h1 className="blog-page__title">{data.title}</h1>
                    <div className="blog-page__info">
                        {/* <img className="blog-page__info__profile-author-img" src={data.authorImgUrl} alt={data.authorImgAlt} /> */}
                        <img className="blog-page__info__profile-author-img"
                            // @ts-ignore
                            src={data.authorImgUrl!}
                            alt={data.authorImgAlt}
                        />
                        <div className="blog-page__blog">
                            <p className="blog-page__blog__author"><span>Author: </span>{data.author}</p>
                            <p className="blog-page__blog__date"><span>Created: </span>{months[data.month - 1]} {data.year}</p>
                        </div>
                    </div>
                    {data.sections.map((section, index) => {
                        const key = `section-${index}`;
                        if (section.type === 'paragraph') {
                            return (
                                <p key={key} className="blog-page__paragraph">
                                    {renderFormattedContent(section.content!, section.links)}
                                </p>
                            );
                        } else if (section.type === 'heading') {
                            const headingClass = `blog-page__heading blog-page__heading--level-${section.level}`;
                            return (
                                <h2 key={key} className={headingClass}>
                                    {section.content}
                                </h2>
                            );
                        } else if (section.type === 'list') {
                            const listClass = `blog-page__list blog-page__list--${section.style}`;
                            return (
                                <ul key={key} className={listClass}>
                                    {section.items!.map((item, itemIndex) => (
                                        <li key={`list-item-${itemIndex}`} className="blog-page__list-item">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            );
                        } else if (section.type === 'quote') {
                            return (
                                <blockquote key={key} className="blog-page__quote">
                                    {section.content}
                                </blockquote>
                            );
                        } else if (section.type === 'image' && section.src) {
                            return (
                                <img
                                    key={key}
                                    className="blog-page__image"
                                    // @ts-ignore
                                    src={section.src}
                                    alt={section.alt}
                                />
                            );
                        } else {
                            // Handle other section types as needed
                            return null;
                        }
                    })}
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default BlogPost;
