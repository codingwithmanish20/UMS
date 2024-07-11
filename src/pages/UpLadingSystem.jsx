import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// createData(5, 356, 16.0, 49, 3.9,67),
// createData(1, 159, 6.0, 24, 4.0, 55),
// createData(2, 237, 9.0, 37, 4.3,66),
// createData(3, 262, 16.0, 24, 6.0,23),
// createData(4, 305, 3.7, 67, 4.3,54),
// createData(5, 356, 16.0, 49, 3.9,67),
// createData(1, 159, 6.0, 24, 4.0, 55),
// createData(2, 237, 9.0, 37, 4.3,66),

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Drone_ID, Set_ID, Firmware, parameter, Animation, Fence) {
  return {Drone_ID, Set_ID, Firmware, parameter, Animation, Fence };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0, 55),
  createData(2, 237, 9.0, 37, 4.3,66),
  createData(3, 262, 16.0, 24, 6.0,23),
  createData(4, 305, 3.7, 67, 4.3,54),
 createData(5, 356, 16.0, 49, 3.9,67),
 createData(1, 159, 6.0, 24, 4.0, 55),
 createData(2, 237, 9.0, 37, 4.3,66),
 createData(3, 262, 16.0, 24, 6.0,23),
createData(4, 305, 3.7, 67, 4.3,54),
createData(5, 356, 16.0, 49, 3.9,67),
createData(1, 159, 6.0, 24, 4.0, 55),
createData(2, 237, 9.0, 37, 4.3,66),
];

const UpLadingSystem = () => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>  </StyledTableCell>
            <StyledTableCell align="center">Drone_ID</StyledTableCell>
            <StyledTableCell align="center">Set_ID</StyledTableCell>
            <StyledTableCell align="center">Firmware</StyledTableCell>
            <StyledTableCell align="center">parameter</StyledTableCell>
            <StyledTableCell align="center">Animation</StyledTableCell>
            <StyledTableCell align="center">Fence</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center"  style={{backgroundColor:'#EE5B5B'}}>{row.Drone_ID}</StyledTableCell>
              <StyledTableCell align="center"  >{row.Set_ID}</StyledTableCell>
              <StyledTableCell align="center"  style={{backgroundColor:"#96BDEB"}}>{row.Firmware}</StyledTableCell>
              <StyledTableCell align="center" style={{backgroundColor:"#94E4AB"}}>{row.parameter}</StyledTableCell>
              <StyledTableCell align="center" style={{backgroundColor:"#F9E95E"}}>{row.Animation}</StyledTableCell>
              <StyledTableCell align="center" style={{backgroundColor:"#EE5B5B"}}>{row.Fence}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
   
  )
}

export default UpLadingSystem
