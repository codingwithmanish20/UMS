import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Button, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Search, Settings, Sync } from '@mui/icons-material';
import './Fence.css';

const Fence = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
   

  const handleClose = () => {
    setOpen(false);
  };


const canvertFile = () => {
console.log("canvert file successfully")

}





  React.useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicmF3YXRhbW1pZSIsImEiOiJjbG5rNzgzN28wandvMnFwMm1qbWduZ25hIn0.zjWDLv9gL6YI1uIIwPgA7A'; 

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      zoom: 5,
      center: [30, 50],
    });

    map.on('onload', () => {
      map.setFog({});
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%', height: '100%' }}></div>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>

        <IconButton style={{ backgroundColor: 'white', marginRight: '10px' }} onClick={handleClickOpen}>
          <Settings />
        </IconButton>
      </div>
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1, display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '5px 10px', borderRadius: '5px' }}>
        <TextField variant="standard" placeholder="Search..." InputProps={{ disableUnderline: true }} />
        <IconButton>
          <Search />
        </IconButton>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Advanced Options</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the details below.
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="latitude"
              label="Latitude"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="longitude"
              label="Longitude"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="instance"
              label="Instance"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="difference"
              label="Difference"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="animeId"
              label="Anime ID"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
            margin="dense"
            id = "fileid"
            label = "Upload File"
            type="text"
            fullWidth
            variant="standard"
            />
            

            {/* <TextField
              margin="dense"
              id="browseFile"
              label="Browse File"
              type="file"
              fullWidth
              variant="standard"
            /> */}


          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={canvertFile} color="primary">
            Convert File
          </Button>
        </DialogActions>
      </Dialog>
      
      {/*  currently: */}
    </div>

  );
};

export default Fence;


