import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {IPost, IUser} from "../../../interfaces";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginBottom: 4,
    marginTop: 10,
  },
  link: {
    textDecoration: 'none'
  },
  title: {
    fontSize: 14,
  },
});

type PostProps = {
  post: IPost
  user: IUser | undefined
}

const Post: React.FC<PostProps> = ({ post, user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {user?.username}
        </Typography>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/post/${post.id}`}
          className={classes.link}
        >
          <Button size="small">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
