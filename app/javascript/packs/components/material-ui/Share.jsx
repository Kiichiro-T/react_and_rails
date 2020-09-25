import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CopyToClipBoard from 'react-copy-to-clipboard';

import {
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const useStyles = makeStyles((theme) => ({
  copyToCripboardButton: {
    backgroundColor: theme.status.danger
  },
}));

const Share = () => {
  const shareUrl = "https://www.teatimes.tokyo";
  const title = "Tea Times Tokyo";
  const classes = useStyles();
  return (
    <>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className={classes.snsShareButton}>
          <TwitterIcon
            size={48}
            round />
      </TwitterShareButton>
      <CopyToClipBoard text={shareUrl} onCopy={() => alert('コピーしました')}>
        <Button
          variant="contained"
          color="primary"
          className={classes.copyToCripboardButton}
        >
          URLをコピー
        </Button>
      </CopyToClipBoard>
    </>
  );
}

export default Share;
