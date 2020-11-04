import React from 'react';
import articleContent from './articleContent';
import ArticlesList from '../components/articlesList';

const ArticlesListPage = () => (
    <React.Fragment>
        <h1>List of Articles</h1>
        <ArticlesList articles={articleContent} />
    </React.Fragment>
);

export default ArticlesListPage;