import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from "react-window";

import PostsContainer from './components/PostsContainer';
import PostItem from './components/PostItem';
import useFetchPost from './hooks/useFetchPost';
import { FetchPostHook } from './hooks/useFetchPost'

const App: React.FC = () => {
  const [lastId, setLastId] = useState<number | null>(null);

  const { loading, error, posts, hasMore }: FetchPostHook = useFetchPost(lastId);

  return (
    <PostsContainer>
      <List
        className="List"
        height={window.innerHeight}
        width={600}
        itemCount={posts.length}
        itemSize={200}
        itemData={posts}
      >
        {({ index, style }) => (
          <div style={style}>
            <PostItem
              postTitle={posts[index].title}
              postExcerpt={posts[index].excerpt}
              topics={posts[index].topics}
              likeCount={posts[index].likeCount}
              commentCount={posts[index].commentCount}
              key={index}
            />
          </div>
        )}
      </List>
    </PostsContainer>
  );
}

export default App;