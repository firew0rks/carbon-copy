import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ArrowFoward from '@material-ui/icons/ArrowForward'
import IconButton from '@material-ui/core/IconButton';

export default class FormField extends React.Component {
  render() {
    return <Grid container direction="row" style={{marginBottom: '10px'}}>
      <Grid item xs={2} style={{fontSize: 11, margin: '10px 0 0 0'}}>
        {this.props.label}
      </Grid>
      <Grid item xs={9}>
        <TextField value={this.props.value}
                   onChange={(e) => this.props.onChange(this.props.key, e.target.value)}
                   fullWidth={true}
        />
      </Grid>
      <IconButton aria-label="Add an alarm" style={{height: '24px', width: '24px'}}
      onClick={()=>this.props.copyField()}
      >
        <ArrowFoward style={{fontSize: '16px'}}
        />
      </IconButton>
    </Grid>
  }
}