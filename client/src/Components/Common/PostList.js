import React from "react";
import { List } from "semantic-ui-react";
// import '../../CSS/postlist.css'
import PostItem from "./PostItem";

const PostList = (props) => {
  return (
    <List divided className="postListContainer">
        {props.posts && props.posts.map((post, index) => (
          <PostItem key={index} post={post} ></PostItem>
        ))}
    </List>
  );
};

export default PostList;