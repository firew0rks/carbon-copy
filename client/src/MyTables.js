import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { tickets } from './ticketData';
import TablePagination from '@material-ui/core/TablePagination';
import Chip from '@material-ui/core/Chip';


class MyTables extends React.Component{

    constructor(props) {
        // THIS IS A COMMENT
        super(props);
        this.state = {
        };
        this._selectTicket = this._selectTicket.bind(this);


        this._generateRandomPredictions();
        this._generateRandomSimilarity();

    }

  _selectTicket(ticket){
    this.props.setTicket(ticket);
    this.props.onOpen()
    this.props.getCCopySuggestions(ticket)
    this.props.toggleCCopyOpen(false);
    this.props.setCCopyTicket({})
  }

  _generateRandomPredictions() {
      this.random = [];

      for (let i = 0; i < 10; i++) {
        this.random.push((Math.floor(Math.random() * 51) + 50));
      }
  }

  _generateRandomSimilarity() {
    this.similar = [];

    for (let i = 0; i < 10; i++) {
      this.similar.push((Math.floor(Math.random() * 51) + 50));
    }
  }

  _randomPrediction(rand) {
      // Between 50 and 100
      // const rand = Math.floor(Math.random() * 51) + 50;

    if (rand > 80) {
      return <Chip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#66bb6a', color: 'white'}}/>
    } else if (rand > 70) {
      return <Chip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#9ccc65', color: 'white'}}/>
    } else if (rand > 60) {
      return <Chip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#d4e157', color: 'white'}}/>
    } else if (rand > 50) {
      return <Chip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#ffca28', color: 'white'}}/>
    } else {
      return <Chip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#ff7043', color: 'white'}}/>
    }
  }

  _randomSimilarity() {
    // Between 50 and 100
    const rand = Math.floor(Math.random() * 51) + 50;

    if (rand > 80) {
      return <SimilarityChip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#5c6bc0', color: 'white'}}/>
    } else if (rand > 70) {
      return <SimilarityChip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#42a5f5', color: 'white'}}/>
    } else if (rand > 60) {
      return <SimilarityChip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#29b6f6', color: 'white'}}/>
    } else if (rand > 50) {
      return <SimilarityChip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#26c6da', color: 'white'}}/>
    } else {
      return <SimilarityChip label={<b>{rand + '%'}</b>} style={{backgroundColor: '#26a69a', color: 'white'}}/>
    }
  }

  render() {
      console.log('rendering');
      return(
      <Grid container justify="center" alignItems="center" style={{marginTop: 30}}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Prediction</TableCell>
                  <TableCell>Similarity</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date created</TableCell>
                  <TableCell>Problem abstract</TableCell>
                  <TableCell>Problem type</TableCell>
                  <TableCell>Application</TableCell>
                </TableRow>
              </TableHead>
                <TableBody>

                {this.props.ticketsList
                    .map((ticket, i) => {
                  return(
                    <TableRow hover style={{cursor: 'pointer'}}
                    onClick={()=>{this._selectTicket(ticket)}}
                    >
                      <TableCell>{this._randomPrediction(this.random[i])}</TableCell>
                      <TableCell>{this._randomSimilarity(this.similar[i])}</TableCell>
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
            <TablePagination
              component="div"
              count={348}
              rowsPerPage={10}
              page={0}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={() => {}}
              onChangeRowsPerPage={() => {}}
            />
          </Paper>
      </Grid>
    );
  }
}

class SimilarityChip extends React.Component {
  render() {
    return <Chip label={this.props.label} style={{...this.props.style, borderRadius: '10px'}}/>
}
}

export default MyTables

