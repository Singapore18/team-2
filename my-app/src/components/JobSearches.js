import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = (theme) => ({
    card: {
        minWidth: 275,
        maxWidth: 300,
        display: 'inline-block',
        width: '200%',
        margin: '16px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


class JobSearches extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
            <Typography component="h2" variant="display2" align="center" style={{ color: '#6969B3' }} gutterBottom >
            Job Matches
            </Typography>
            <Typography variant="title">Job: Retail Assistent</Typography>
            <Typography variant="title">Skills required: Customer Service, Cashier, Cleaning</Typography>
            <Typography variant="title">Employer: Uniqlo</Typography>
                <Grid>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Johnny Sim
                        </Typography>
                        <Typography component="p">
                        Cleaning, Cooking, Customer Service
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small" align="center">View Resume</Button>
                    </CardActions> */}
                </Card>
                </Grid>
                
                <Grid>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Terry Wong
                        </Typography>
                        <Typography component="p">
                        Admin, Customer Service, Cleaning
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small" align="center">View Resume</Button>
                    </CardActions> */}
                </Card>
                </Grid>

                <Grid>

                                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Joey Tay
                        </Typography>
                        <Typography component="p">
                            Shelving, Cashier, Cleaning
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small" align="center">View Resume</Button>
                    </CardActions> */}
                </Card>
                </Grid>

                </div>

        );
    }
}

export default withStyles(styles)(JobSearches);