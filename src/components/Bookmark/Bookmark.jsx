import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PostList } from "components";
import { fetchAllBookmarks } from "slices";

const Bookmark = () => {
  const { allPosts, bookmarks } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBookmarks());
  }, [dispatch]);

  const bookmarkPost = allPosts?.filter((post) =>
    bookmarks.find((bookmarkPost) => bookmarkPost._id === post._id)
  );

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-deepBlue mb-2">Bookmarks</p>
      {bookmarkPost.length !== 0 ? (
        <PostList posts={bookmarkPost} />
      ) : (
        <p className="text-secondary-300 text-2xl text-center font-semibold">
          Bookmark posts to see them here!
        </p>
      )}
    </div>
  );
};

export { Bookmark };
