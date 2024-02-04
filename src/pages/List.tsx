import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import styles from "./index.module.css";
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function AlignItemsList() {
  return (
    <>
    <h1 className={styles.title} style={{ textAlign: 'center', marginBottom: '20px', backgroundColor: '#A9A9A9' }}>
    Buddy Burg
    </h1>
    <h2 className={styles.title1} style={{marginLeft: '20px'}}>
    Student Communities
    </h2>
    <List sx={{ width: '80%', maxWidth: 600, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        
        <Image src="/images/the-edge.jpeg" alt="Description of the image" width={200} height={200} />
        <ListItemText
          primary={
            <Typography
              sx={{ display: 'inline', fontSize: 24, fontWeight: 'bold' }} // Apply fontWeight: 'bold'
              component="span"
              variant="body2"
              color="text.primary"
            >
              The Edge
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: 16}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Dani
              </Typography>
              {" — Women’s Wednesday- all women are welcome! Our group is meeting at 7pm to watch the bachelor."}
            </React.Fragment>
          }
           sx={{ margin: '10px' }} // Adjust the margin value for spacing
        />
      </ListItem>
      <Button variant="outlined" size="small" sx={{ marginLeft: '25px' }}>
          Join Chat
        </Button>
      <Divider variant="inset" component="li" sx={{ margin: '10px' }}/>
      <ListItem alignItems="flex-start">
        <Image src="/images/the-hub.png" alt="Description of the image" width={200} height={200} />
        <ListItemText
          primary={
            <Typography
              sx={{ display: 'inline', fontSize: 24, fontWeight: 'bold' }} // Apply fontWeight: 'bold'
              component="span"
              variant="body2"
              color="text.primary"
            >
              The Hub
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: 16}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Kevin
              </Typography>
              {" — Anyone want to play billiards in the lounge? I'll be there until 8 pm with 2 friends."}
            </React.Fragment>
          }
           sx={{ margin: '10px' }} // Adjust the margin value for spacing
        />

      </ListItem>
      <Button variant="outlined" size="small" sx={{ marginLeft: '25px' }}>
          Join Chat
        </Button>
      <Divider variant="inset" component="li" sx={{ margin: '10px' }}/>
      <ListItem alignItems="flex-start">
      <Image src="/images/union.png" alt="Description of the image" width={200} height={200} />
        <ListItemText
          primary={
            <Typography
              sx={{ display: 'inline', fontSize: 24, fontWeight: 'bold' }} // Apply fontWeight: 'bold'
              component="span"
              variant="body2"
              color="text.primary"
            >
              Union
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: 16}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Mitchell
              </Typography>
              {" — Don't forget, BBQ this Saturday at the union outdoor area! Bring your friends and a dish to share. Let's make it a great day for everyone!"}
            </React.Fragment>
          }
           sx={{ margin: '10px' }} // Adjust the margin value for spacing
        />
      </ListItem>
      <Button variant="outlined" size="small" sx={{ marginLeft: '25px' }}>
          Join Chat
        </Button>
      <Divider variant="inset" component="li" sx={{ margin: '10px' }}/>
    </List>
    </>
  );
}
