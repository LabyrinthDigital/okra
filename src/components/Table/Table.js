import React from 'react';
import Table from '@material-ui/core/Table';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

const styles = {

};

const TableComponent = props => {
  const { classes } = props;

  return (
    <Table>
      <TableBody>
        <TableRow role="checkbox">
          <TableCell padding="checkbox">
            Edit <Checkbox checked />
          </TableCell>
          <TableCell component="th" scope="row">
            Name
          </TableCell>
          <TableCell numeric>Description</TableCell>
          <TableCell numeric>Days Planned</TableCell>
        </TableRow>
        <TableRow role="checkbox">
        <TableCell padding="checkbox">
          <Checkbox checked />
        </TableCell>
        <TableCell component="th" scope="row">
          Sewing
        </TableCell>
        <TableCell numeric>Sewing class for 08/2018</TableCell>
        <TableCell numeric>23</TableCell>
      </TableRow>
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(TableComponent);
