import React from 'react';
import CommentsForm from './CommentsForm';
import SearchBar from '../Core/SearchBar';
import PostList from './PostList';
import '../../CSS/managepost.css';

//controls all crud functionality 
class ManageAPI extends React.Component {

    state = { posts: [] };

    componentDidMount=()=> {

        const db = 
            JSON.parse(localStorage.getItem("EllaDatabase") || "[]");

        this.setState({ posts: db});
    }

    savePost = async (post) => {

        const db = 
            JSON.parse(localStorage.getItem("EllaDatabase") || "[]");

        db.push({
            email:post.email,
            message: post.message
        });

        localStorage.setItem("EllaDatabase", JSON.stringify(db));

        this.setState({
            posts: [...this.state.posts, { email: post.email, message: post.message }]
        });
    }

    searchWord = (word) => {

        let filtered =
          JSON.parse(localStorage.getItem("EllaDatabase") || "[]")
            .filter(post =>
              post.message.toLowerCase().includes(word.toLowerCase()));
    
        this.setState({ posts: filtered });
    }

    render() {
        debugger;
        return (
            <>
                <div className="postPageContainer">
                    <CommentsForm
                        savepost={this.savePost}>
                    </CommentsForm>
                    <div className="bottomContainer">
                        <div className="searchbarContainer">
                        <SearchBar searchWord={this.searchWord}/>
                        </div>
                        <PostList
                            posts={this.state.posts}>
                        </PostList>
                    </div>
                </div>
            </>
        )
    }
};

export default ManageAPI;