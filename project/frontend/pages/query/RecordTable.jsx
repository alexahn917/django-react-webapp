import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    paper: {
        // marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {},
});

let id = 0;

function createData(season, ip, h, r, er, hr, bb, so, w, l, pgs, whip, baa,
                    era) {
    id += 1;
    return {id, season, ip, h, r, er, hr, bb, so, w, l, pgs, whip, baa, era}
}

const data = [
    createData('2017 Regular Season', 2.31, 175.0, 136, 49, 45, 23, 30, 202, 18,
        4, 93.4, 0.95, .212),
    createData('2017 Postseason', 3.82, 33.0, 21, 14, 14, 8, 10, 33, 3, 0, 90.6,
        0.94, .179),
    createData('Career', 2.36, 1935.0, 1431, 554, 508, 128, 507, 2120, 144, 64,
        101.0, 1.00, .206),
];


// [{"a":8,"b":8},{"a":3,"b":3}]
function update(props) {
    console.log(props.data);
    this.setState({
        keys: Object.keys(props.data[0]),
        rows: props.data,
    });
};


class RecordTable extends React.Component {
    constructor() {
        super();
        this.state = {
            keys: [],
            rows: [],
        };

    }

    getTableKeys(keys) {
        const uniqueKey = JSON.stringify(keys);
        let header = [<TableCell key={'header no'}> {'no.'}</TableCell>];
        keys.map((key, idx) => {
            header.push(<TableCell key={uniqueKey + idx.toString()}> {key}</TableCell>);
        });
        return header;
    }

    getTableRows(data) {
        const keys = Object.keys(data[0]);
        let num = 0;
        const uniqueKey = JSON.stringify(data);
        return (
            data.map((row, idx) => {
                return (
                    <TableRow key={uniqueKey + idx.toString()}>
                        <TableCell key={uniqueKey + 'no'}> {num++} </TableCell>
                        {keys.map((key) => {
                            return (<TableCell key={uniqueKey + row[key]}> {row[key]} </TableCell>)
                        })}
                    </TableRow>
                )
            })
        )
    }

    render() {
        const {classes, data} = this.props;
        if (!data) {
            return <div></div>
        }

        return (
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {this.getTableKeys(Object.keys(data[0]))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.getTableRows(data)}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

RecordTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(RecordTable);