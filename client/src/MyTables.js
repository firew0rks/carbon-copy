import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { tickets } from './ticketData';



class MyTables extends React.Component{
  render() {
    return(
      <Grid container justify="center" alignItems="center" style={{height: 'calc(100vh - 150px)'}}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize:20, fontWeight: 'bold'}}>Ticket number</TableCell>
                  <TableCell style={{fontSize:20, fontWeight: 'bold'}}>Status</TableCell>
                  <TableCell style={{fontSize:20, fontWeight: 'bold'}}>Date created</TableCell>
                  <TableCell style={{fontSize:20, fontWeight: 'bold'}}>Problem abstract</TableCell>
                  <TableCell style={{fontSize:20, fontWeight: 'bold'}}>Problem type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{tickets[0]._source.ticket_number}</TableCell>
                  <TableCell>{tickets[0]._source.status}</TableCell>
                  <TableCell>{tickets[0]._source.date_created}</TableCell>
                  <TableCell>{tickets[0]._source.problem_abstract}</TableCell>
                  <TableCell>{tickets[0]._source.problem_type}</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>{tickets[1]._source.ticket_number}</TableCell>
                  <TableCell>{tickets[1]._source.status}</TableCell>
                  <TableCell>{tickets[1]._source.date_created}</TableCell>
                  <TableCell>{tickets[1]._source.problem_abstract}</TableCell>
                  <TableCell>{tickets[1]._source.problem_type}</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>{tickets[1]._source.ticket_number}</TableCell>
                  <TableCell>{tickets[1]._source.status}</TableCell>
                  <TableCell>{tickets[1]._source.date_created}</TableCell>
                  <TableCell>{tickets[1]._source.problem_abstract}</TableCell>
                  <TableCell>{tickets[1]._source.problem_type}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
      </Grid>
    );
  }
}

export default MyTables

