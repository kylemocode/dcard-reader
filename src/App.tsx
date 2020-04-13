import React, { useState, useRef, useCallback, useMemo } from 'react';
import { FixedSizeList as List } from "react-window";
import useMedia from 'use-media';

import PostsContainer from './components/PostsContainer';
import PostItem from './components/PostItem';
import LoadingPlaceHolder from './components/LoadingPlaceHolder';
import useFetchPost from './hooks/useFetchPost';
import { FetchPostHook } from './hooks/useFetchPost'
import { size } from './utils/media';

const App: React.FC = () => {
  const [lastId, setLastId] = useState<number | null>(null);
  const { loading, error, posts, hasMore }: FetchPostHook = useFetchPost(lastId);

  // handle FixedSizeList width
  const isMobileL = useMedia({ maxWidth: size.mobileL })
  const isTablet = useMedia({ maxWidth: size.tablet })
  const listWidth = useMemo(() => {
    if (!isMobileL && !isTablet) {
      return 625;
    } else if (!isMobileL && isTablet) {
      return 450;
    } else {
      return 300;
    }
  }, [isMobileL, isTablet]);

  // IntersectionObserver API to handle infinite scroll
  const observer = useRef<IntersectionObserver>();
  const lastPostRef = useCallback(node => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setLastId(node.dataset.id);
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return (
    <PostsContainer>
      <List
        className="List"
        height={window.innerHeight}
        width={listWidth}
        itemCount={posts.length}
        itemSize={isTablet ? 250 : 200}
        itemData={posts}
      >
        {({ index, style }) => {
          if (posts.length === index + 1) {
            return <div style={style} ref={lastPostRef} data-id={posts[index].id}>
              <PostItem
                postTitle={posts[index].title}
                postExcerpt={posts[index].excerpt}
                topics={posts[index].topics}
                likeCount={posts[index].likeCount}
                commentCount={posts[index].commentCount}
                key={index}
              />
              {loading ? <LoadingPlaceHolder /> : null}
              {error ? <div>Fetching posts failed...</div> : null}
            </div>
          } else {
            return <div style={style}>
              <PostItem
                postTitle={posts[index].title}
                postExcerpt={posts[index].excerpt}
                topics={posts[index].topics}
                likeCount={posts[index].likeCount}
                commentCount={posts[index].commentCount}
                key={index}
              />
            </div>
          }
        }}
      </List>
    </PostsContainer>
  );
}

export default App;