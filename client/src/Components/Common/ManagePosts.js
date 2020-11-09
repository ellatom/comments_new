import React from 'react';
import CommentsForm from './CommentsForm';
import SearchBar from '../Core/SearchBar';
import PostList from './PostList';
import '../../CSS/managepost.css';
import api from '../../Utils/api';

//controls all crud functionality 
class ManageAPI extends React.Component {

    state = { posts: [] };

    componentDidMount = () => {

        const db =
            JSON.parse(localStorage.getItem("EllaDatabase") || "[]");

        this.setState({ posts: db });
    }

    savePost = async (post) => {

        const db =
            JSON.parse(localStorage.getItem("EllaDatabase") || "[]");

        let foundImage = this.isLocalStorageUser(post.email);

        let imageUser = await api.getData();

        db.push({
            email: post.email,
            message: post.message,
            image: foundImage === undefined ? imageUser.results["0"].picture.medium : foundImage
        });
        
        localStorage.setItem("EllaDatabase", JSON.stringify(db));
        this.setState({
            posts: db
        });
    }

    isLocalStorageUser = (emailPost) => {
        
        const db =
            JSON.parse(localStorage.getItem("EllaDatabase") || "[]");

        let emailFound = db.find(item => item.email.toLowerCase() === emailPost.toLowerCase());
        if(emailFound===undefined) return undefined;

        return emailFound.image;
    }

    searchWord = (word) => {

        let filtered =
            JSON.parse(localStorage.getItem("EllaDatabase") || "[]")
                .filter(post =>
                    post.message.toLowerCase().includes(word.toLowerCase()));

        this.setState({ posts: filtered });
    }

    render() {
        // 
        return (
            <>
                <div className="postPageContainer">
                    <CommentsForm
                        savepost={this.savePost}>
                    </CommentsForm>
                    <div className="bottomContainer">
                        <div className="searchbarContainer">
                            <SearchBar searchWord={this.searchWord} />
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