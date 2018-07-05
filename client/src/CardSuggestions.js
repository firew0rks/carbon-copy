import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


export default class CardSuggestions extends React.Component {
    constructor(props) {
        super(props);
    }

    suggestionSelected(suggestion){
        this.props.setCCopyTicket(suggestion)
        this.props.toggleCCopyOpen(true)
    }

    render() {
        return <Card style={{marginRight: '10px', padding: 0}}>
            <CardContent style={{padding: '10px',height:'150px'}}>
                <Grid container justify="space-between" direction="row">
                    <div style={{fontSize: 8, color: '#C6C6C6', marginBottom: '10px'}}>
                        Suggested
                    </div>
                    <div style={{fontSize: 15, color: '#54C242'}}>
                        {Math.round(this.props.suggestion.score)}%
                    </div>
                </Grid>
                <div style={{fontSize: 9, color: '#C6C6C6'}}>
                    Short Description
                </div>
                <div style={{fontSize: 12}}>
                    {this.props.suggestion.ticket.problem_abstract}
                </div>
                <div style={{fontSize: 9, color: '#C6C6C6', marginTop: '10px'}}>
                    Application
                </div>
                <div style={{fontSize: 12}}>
                    SAP Human Resources
                </div>
            </CardContent>
            <CardActions style={{padding: 0}}>
                <Grid container justify="flex-end">
                    <Button size="small"
                            onClick={()=>this.suggestionSelected(this.props.suggestion)}
                    >Show More</Button>
                </Grid>
            </CardActions>
        </Card>
    }
}
CardSuggestions.propTypes = {};