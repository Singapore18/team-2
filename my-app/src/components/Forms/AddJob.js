import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    menu: {
        width: 200,
    },
});

const industries = [
    {
        value: 'hotel',
        label: 'Hotel',
    },
    {
        value: 'food_and_beverage',
        label: 'Food & Beverage',
    },
];

const skills = [
    {
        value: 'carpentry',
        label: 'Carpentry',
    },
    {
        value: 'administrative',
        label: 'Administrative',
    },
];

const workinghours = [
    {
        value: 'morning_shift',
        label: 'Morning Shift',
    },
    {
        value: 'afternoon_shift',
        label: 'Afternoon Shift',
    },
    {
        value: 'full_shift',
        label: 'Full Shift',
    },
];

const days = [
    {
        value: 'weekdays',
        label: 'Weekdays',
    },
    {
        value: 'weekends',
        label: 'Weekends',
    },
];

class AddJob extends Component {
    constructor() {
        super();
        this.state = {
            name: "Enter your company name",
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {

        const { classes } = this.props;
        return (
            <div className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Add Job
                    </Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="company_name"
                                    name="company_name"
                                    label="Company Name"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="region"
                                    name="region"
                                    label="Region"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="industry"
                                    select
                                    label="Industry"
                                    // onChange={}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                >
                                    {industries.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="skills1"
                                    select
                                    label="Skills 1"
                                    // onChange={}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                >
                                    {skills.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="skills2"
                                    select
                                    label="Skills 2"
                                    // onChange={}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                >
                                    {skills.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="skills3"
                                    select
                                    label="Skills 3"
                                    // onChange={}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                >
                                    {skills.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="description"
                                    name="description"
                                    label="Description"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="working_hours"
                                    select
                                    label="Working Hours"
                                    // onChange={}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                >
                                    {workinghours.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="days"
                                    select
                                    label="Days"
                                    // onChange={}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                >
                                    {days.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="contact_name"
                                    name="contact_name"
                                    label="Contact Name"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="phone"
                                    name="phone"
                                    label="Contact Number"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="contact_email"
                                    name="contact_email"
                                    label="Contact Email"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </div >
        );
    }
}

export default withStyles(styles)(AddJob);