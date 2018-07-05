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

    constructor(props) {
        // THIS IS A COMMENT
        super(props);
        this.state = {
        };
        this._selectTicket = this._selectTicket.bind(this);

    }

  _selectTicket(ticket){
    this.props.setTicket(ticket);
    this.props.onOpen()
    this.props.getCCopySuggestions(ticket)
    this.props.toggleCCopyOpen(false);
    this.props.setCCopyTicket({})
  }

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

                {this.props.ticketsList
                    .map((ticket) => {
                  return(
                    <TableRow
                    onClick={()=>{this._selectTicket(ticket)}}
                    >
                    <TableCell>INC{ticket.ticket_number}</TableCell>
                    <TableCell>{ticket.status}</TableCell>
                    <TableCell>{ticket.date_created}</TableCell>
                    <TableCell>{ticket.problem_abstract}</TableCell>
                    <TableCell>{ticket.problem_type}</TableCell>
                    </TableRow>
                  )
                })}
                    </TableBody>

                      </Table>
          </Paper>
      </Grid>
    );
  }
}

export default MyTables

