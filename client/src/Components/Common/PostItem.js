import { List, Header, Grid, Image} from "semantic-ui-react";
import '../../CSS/postitem.css';

const PostItem = (props) => {
  const { post } = props;
  return (
    <div className="item">
    <List.Item className="listItem" >
      <Grid>
        <Grid.Column width={3}>
          <Image src= {post.image} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as="h5">{post.email}</Header>
          <List.Description className="listDescription">
            {post.message}
          </List.Description>
        </Grid.Column>
      </Grid>
    </List.Item>
    </div>
  );
};

export default PostItem;