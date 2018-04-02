import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import {List} from "material-ui";
import AnswerCard from "./AnswerCard";
import Records from "./Records";

const styles = theme => ({
    searchBar: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        width: 'calc(90%)',
    },
    card: {
        minWidth: 'calc(80%)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    action: {
        display: 'flex',
    },
});

class Query extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
            stack: [],
                // 'query': 'What is the avg ERA for Clayton Kershaw?',
                // 'data': 'Chart'
            // ],
        }
    }

    _onQueryChange = (event) => {
        this.setState({query: event.target.value});
    };

    _onKeyPress = (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            if (this.state.query !== '') {
                // Make query to backend and get results
                fetch('/api/query', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'query': this.state.query,
                    })
                })
                    .then(response => response.json())
                    .then(response => JSON.parse(response))
                    .then(data => {
                        var stack = this.state.stack.slice();
                        stack.unshift({
                            'query': this.state.query,
                            "data": JSON.parse(data.data),
                            'type': data.type,
                        });
                        this.setState({stack});
                    });
            }
        }
    };

    getAnswerCards = () => {
        return (
            this.state.stack.map((ans, idx) => <Records key={idx} query={ans.query} data={ans.data}/>)
        )
    };

    render() {
        const {classes, theme} = this.props;
        return (
            <Grid container spacing={16} className={classes.container_grid}>
                <Grid item xs={11} md={11} lg={11}>
                    <TextField
                        id="search"
                        label="Q:"
                        type="search"
                        className={classes.searchBar}
                        margin="normal"
                        onChange={this._onQueryChange}
                        onKeyPress={this._onKeyPress}
                    />
                    <List>
                        {this.state.stack.length === 0 ? '' : this.getAnswerCards()}
                    </List>
                </Grid>
            </Grid>
        );
    }
}

Query.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Query);