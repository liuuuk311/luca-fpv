import React from 'react';
import { Link } from 'gatsby';

import {
    Container,
    PostList,
    PostListItem,
    Date,
    Tag,
    SubHeading,
    Preview
} from './styled';

const HomePostList = ({posts}) => {

    return (
        <Container>
            <PostList>
                {posts.map(( node, index ) => {
                    const { node : { frontmatter : { title, date, excerpt, tags}, fields : { slug } } } = node;
                    return (
                        <PostListItem>
                            <Link to={`${slug}`} key={index}>
                                <Date>
                                    {date} &nbsp;&middot;&nbsp; 
                                    {tags.map( (tag) => <Tag>#{tag} </Tag>)}
                                </Date>
                                <SubHeading>
                                    {title}
                                </SubHeading>
                                <Preview>
                                    {excerpt}
                                </Preview>
                           </Link>
                        </PostListItem>
                    )
                })}
            </PostList>
        </Container>
    );
}

export default HomePostList;
