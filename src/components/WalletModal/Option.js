import {
  Avatar, 
  ListItem,
  ListItemAvatar,
  ListItemText, 
  makeStyles
} from "@material-ui/core";
import React  from 'react'; 
import PropTypes from 'prop-types'; 

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '4.9574px 4.9574px 4.9574px rgba(0, 0, 0, 0.33);',
    padding: theme.spacing(2),
  },

}));

function Option({ header,key, icon, onClick, className, ...rest }) {
  const classes = useStyles();

  return (
    <ListItem button key={key} onClick = {onClick}>
    <ListItemAvatar>
      <Avatar  src={icon} className={classes.avatar}>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={header} />
  </ListItem>
  );
}

Option.propTypes = {
  className: PropTypes.string,
};

export default Option;
