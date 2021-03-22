import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UsersStore from "../../store/UsersStore";
import PostsStore from "../../store/PostsStore";
import { observer } from "mobx-react-lite";
import { Helmet } from "react-helmet";
import { Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  body1: {
    fontSize: 18,
    marginTop: 20,
    width: 800,
  },
  outlined: {
    marginTop: 20,

  },
  link: {
    textDecoration: 'none'
  },
  skeleton: {
    marginTop: 50
  }
});

type ParamType = {
  id: string
}


const PostDetails: React.FC = observer(() => {
  const classes = useStyles();
  const { id } = useParams<ParamType>();

  const { loadPost, postSelected } = PostsStore;
  const { userSelected, loading } = UsersStore;

  useEffect(() => {
    loadPost(parseInt(id));
  }, [id, loadPost]);

  if (loading) {
    return (
      <div className={classes.skeleton}>
        <Skeleton height={25} />
        <Skeleton height={50} />
        <Skeleton height={200} />
      </div>
    )
  }

  return (
    <>
      <Link to="/" className={classes.link}>
        <Button
          size="small"
          variant="contained"
          className={classes.outlined}
        >
          Back
        </Button>
      </Link>
      <Card className={classes.root}>
        <CardContent>
          <Helmet>
            <title>{postSelected?.title}</title>
          </Helmet>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {userSelected?.name}
          </Typography>
          <Typography variant="h4" component="h2">
            {postSelected?.title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.body1}
          >
            {postSelected?.body}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
});

export default PostDetails;

