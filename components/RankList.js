import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function setData(input) {
    input.sort(function(a, b) {
        if(a.score !== b.score)
            return b.score - a.score;
        else {
            if (a.setBonus !== b.setBonus)
                return b.setBonus - a.setBonus;
            else
                return b.idBonus - a.idBonus;
        }
    });
    return input.map(function(person, index) {
        return createData(person.name, person.score, person.setBonus, person.idBonus, index+1);
    });

}

function createData(name, score, setBonus, idBonus, rank) {
  return { name, score, setBonus, idBonus, rank };
}

const rows = setData([
    {
        "name": "Ritam Deb",
        "score": 5,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Sudeshchandra Mohana",
        "score": 3,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Saurabh Maurya",
        "score": 7,
        "setBonus": 0,
        "idBonus": 1
    },
    {
        "name": "Saatvik Upadhyay",
        "score": 6,
        "setBonus": 0,
        "idBonus": 2
    },
    {
        "name": "Sudhakar Gajendran",
        "score": 5,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Ankhuri Dubey",
        "score": 5,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Vikram Narayan Chidambaram",
        "score": 4,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Ronak Jain",
        "score": 7,
        "setBonus": 0,
        "idBonus": 2
    },
    {
        "name": "Sandeep Chekuri",
        "score": 4,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Anurag Balhra",
        "score": 5,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Gaurav Kushwaha",
        "score": 8,
        "setBonus": 1,
        "idBonus": 1
    },
    {
        "name": "Manoj Chavan",
        "score": 6,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Sarthak Sota",
        "score": 4,
        "setBonus": 0,
        "idBonus": 0
    },
    {
        "name": "Shreyansh Chhajed",
        "score": 6,
        "setBonus": 1,
        "idBonus": 0
    },
    {
        "name": "Sai Teja",
        "score": 5,
        "setBonus": 0,
        "idBonus": 0
    }
]);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function RankList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bored Panda</StyledTableCell>
            <StyledTableCell align="right">Boredom</StyledTableCell>
            <StyledTableCell align="right">Set Bonus</StyledTableCell>
            <StyledTableCell align="right">ID Bonus</StyledTableCell>
            <StyledTableCell align="right">Rank</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.score}</StyledTableCell>
              <StyledTableCell align="right">{row.setBonus}</StyledTableCell>
              <StyledTableCell align="right">{row.idBonus}</StyledTableCell>
              <StyledTableCell align="right">{row.rank}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}