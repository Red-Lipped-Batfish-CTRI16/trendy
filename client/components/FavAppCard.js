import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ShareButton = ({ shareUrl }) => {
  const handleShareClick = () => {
    const socialMediaUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/share?url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}`,
    };

    // Open social media sharing links in new tabs
    // window.open(socialMediaUrls.facebook, '_blank');
    // window.open(socialMediaUrls.twitter, '_blank');
    // window.open(socialMediaUrls.linkedin, '_blank');
    window.open(shareUrl);
  };

  return (
    <IconButton aria-label="share" onClick={handleShareClick}>
      <ShareIcon />
    </IconButton>
  );
};

export default function FavAppCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log('expanded click');
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleMoreVertClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardHeader
        
        action={
          <>
          <IconButton aria-label="settings" onClick={handleMoreVertClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              
              <MenuItem onClick={handleMenuClose}>Save for later</MenuItem>
            </Menu>
          </>
        }
        title={props.title}
        subheader={props.score}
      />
      <CardMedia component="img" height="154" image={props.image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleFavoriteClick} aria-label="add to favorites">
          {isFavorite ? (
            <FavoriteIcon sx={{ color: red[500] }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <ShareButton shareUrl={props.url} /> {/* Pass the share URL as a prop */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Info:</Typography>
          <Typography paragraph>
            Address: {props.address}
            
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
