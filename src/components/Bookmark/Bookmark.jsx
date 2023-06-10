import { PostList } from "components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBookmarks } from "slices";


export const Bookmark = () => {
  const { allPosts,bookmarks } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBookmarks());
  }, [dispatch]);

  const bookmarkPost = allPosts?.filter((post) =>
    bookmarks.find((bookmarkPost) => bookmarkPost._id === post._id)
  );

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
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
