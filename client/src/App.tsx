import { List, ListItem, ListItemText, Typography } from '@mui/material';
import  {  useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    console.log('Fetching activities...');
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => {
        console.log('Activities received:', response.data);
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, [])

  const title = 'Reactivities';

  return (
    <>
      <Typography variant='h3'>{title}</Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}



export default App
