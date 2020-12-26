import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BookmarkBorder } from "@material-ui/icons";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
}));

const ArticleSection = () => {
  const articleUI = useStyles();

  return (
    <Container maxWidth="lg" className={articleUI.blogContainer}>
      <Typography variant="h4" className={articleUI.blogTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={articleUI.card}>
            <CardActionArea>
              <CardMedia
                className={articleUI.media}
                image="/img/20.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={articleUI.cardActions}>
              {/* Box 1 */}
              <Box className={articleUI.author}>
                <Avatar src="/img/authors/kk.jpg" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Maria Clemens
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    May 14, 2020
                  </Typography>
                </Box>
              </Box>
              {/* Box 2 */}
              <Box>
                <BookmarkBorder />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={articleUI.card}>
            <CardActionArea>
              <CardMedia
                className={articleUI.media}
                image="/img/20.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={articleUI.cardActions}>
              {/* Box 1 */}
              <Box className={articleUI.author}>
                <Avatar src="/img/authors/kk.jpg" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Maria Clemens
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    May 14, 2020
                  </Typography>
                </Box>
              </Box>
              {/* Box 2 */}
              <Box>
                <BookmarkBorder />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={articleUI.card}>
            <CardActionArea>
              <CardMedia
                className={articleUI.media}
                image="/img/20.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={articleUI.cardActions}>
              {/* Box 1 */}
              <Box className={articleUI.author}>
                <Avatar src="/img/authors/kk.jpg" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Maria Clemens
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    May 14, 2020
                  </Typography>
                </Box>
              </Box>
              {/* Box 2 */}
              <Box>
                <BookmarkBorder />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={articleUI.card}>
            <CardActionArea>
              <CardMedia
                className={articleUI.media}
                image="/img/20.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={articleUI.cardActions}>
              {/* Box 1 */}
              <Box className={articleUI.author}>
                <Avatar src="/img/authors/kk.jpg" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Maria Clemens
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    May 14, 2020
                  </Typography>
                </Box>
              </Box>
              {/* Box 2 */}
              <Box>
                <BookmarkBorder />
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticleSection;
