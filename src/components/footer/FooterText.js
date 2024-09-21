import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp'; // Import the download icon

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'absolute',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    display: 'flex',
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const FooterText = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerText}>
      <Tooltip title="Download Resume" arrow>
        <IconButton
          className={classes.downloadButton}
          href="/Saurabh_resume.pdf" // Update with the correct name of your resume
          download // This attribute prompts download
        >
          <GetAppIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};
