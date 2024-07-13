import React, { useEffect, useState } from 'react';
import {
    Drawer, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary,
    AccordionDetails, Button, IconButton, Dialog, DialogTitle, DialogContent,
    DialogActions, TextField
} from '@mui/material';
import { ExpandMore, Upload, Settings, Refresh, Sync, FlightTakeoff } from '@mui/icons-material';
import '../component/Sidebar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Sidebar = () => { 
 const [open, setOpen] = useState(false);
 const [filePaths, setFilePaths] = useState({
        Firmware: '',
        Parameter: '',
        Animation: '',
        Fence: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const handleFileChange = (event, item) => {
        if (event.target.files.length > 0) {
            const filePath = event.target.files[0].name;
            setFilePaths({
                ...filePaths,
                [item]: filePath
            });
        }
    };

    const handleUploadClick = (item) => {
        console.log("item",item)
        document.getElementById(`upload-input-${item}`).click();
    };


    const detectDrones =  async () => {
    alert("detectDrone function")
    const response = await fetch ("//https:")
    console.log("response", response)
    const jsonData = await response.json()
    console.log("jsonData", jsonData)
     
    }

   
    return (
        <>
            <Drawer
                variant="permanent"
                anchor="left"
                classes={{ paper: 'drawer-paper' }}
            >
                <Button
                    variant="outlined"
                    startIcon={<Upload />}
                    style={{ width: '100%', backgroundColor: "white", color: "black", padding: "10px 0px", marginBottom: "20px" }}
                    onClick={handleClickOpen}
                >
                    Upload Path
                </Button>

                <List className="sidebar-list">
                    {/* <Accordion style={{ backgroundColor: "#A8A8A8", marginBottom: "20px" }}> */}
                    <Accordion style={{  marginBottom: "20px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ fontSize: '1.2rem' }} />} // Adjust icon size
                            sx={{ padding: '0 3px', }} // Adjust padding if necessary
                        >
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Upload Options" />
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItem button>
                                <ListItemText primary="Upload Firmware" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Upload Parameter" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Upload Animation" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Upload Fence" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Set ID" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{  marginBottom: "20px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ fontSize: '1.2rem' }} />} // Adjust icon size
                            sx={{ padding: '0 3px', }} // Adjust padding if necessary
                        >
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Advance Options" />
                        </AccordionSummary>
                        <AccordionDetails>
                        <ListItem button>
                        <ListItemText primary="Clear Logs" />
                        </ListItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ fontSize: '1.2rem' }} />} 
                            sx={{ padding: '0 3px', }} 
                        >
                            <ListItemIcon>
                                <FlightTakeoff />
                            </ListItemIcon>
                            <ListItemText primary="Monocast Options" />
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItem button>
                                <ListItemText primary="Firmware" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Parameter" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Animation" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Fence" />
                            </ListItem>

                        </AccordionDetails>
                    </Accordion>

                    
                </List>
                
                <ListItem  style={{marginTop:"11rem"}}>
                        <IconButton>
                            <Refresh />
                        </IconButton>
                        <ListItemText primary="Refresh" />
                    </ListItem>

                    <ListItem>
                        <IconButton>
                            <Sync />
                        </IconButton>
                        <ListItemText primary="Reload" />
                    </ListItem>
                <Button onClick={detectDrones}  variant="contained" color="primary" className="detect-button">
                    Detect Drones
                </Button>

            </Drawer>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>Upload Path Options</DialogTitle>
                <DialogContent style={{ backgroundColor: "#5b5b5b", padding: "20px" }}>
                    {['Firmware', 'Parameter', 'Animation', 'Fence'].map((item) => (
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }} key={item}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginRight: "10px", backgroundColor: "#3d3d3d", color: "white" }}
                                onClick={() => handleUploadClick(item)}
                            >
                                Browse {item}
                            </Button>
                            <TextField
                                variant="outlined"
                                fullWidth
                                value={filePaths[item]}
                                InputProps={{
                                    style: {
                                        backgroundColor: "white"
                                    }
                                }}
                                readOnly
                            />
                            <input
                                type="file"
                                id={`upload-input-${item}`}
                                style={{ display: 'none' }}
                                onChange={(e) => handleFileChange(e, item)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginLeft: "10px", backgroundColor: "#13294b", color: "white" }}
                                onClick={() => handleUploadClick(item)}
                            >
                                Upload
                            </Button>
                        </div>
                    ))}
                </DialogContent>
                <DialogActions style={{ justifyContent: "center", backgroundColor: "#5b5b5b", paddingBottom: "20px" }}>
                    <Button onClick={handleClose} variant="contained" color="primary" style={{ backgroundColor: "#13294b", color: "white" }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Sidebar;


  













