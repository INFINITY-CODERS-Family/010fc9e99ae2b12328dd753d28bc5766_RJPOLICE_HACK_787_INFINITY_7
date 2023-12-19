import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';
import Chip from 'components/@extended/Chip';
import { supabase } from '../../createClient';

function createData(trackingNo, name, fat, carbs, protein) {
  return { trackingNo, name, fat, carbs, protein };
}

const rows = [
  createData(84564564, 'Camera Lens', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Handset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'TV', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Chair', 100, 0, 14001)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'trackingNo',
    align: 'left',
    disablePadding: false,
    label: 'Transaction No.'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Sender ID'
  },
  {
    id: 'fat',
    align: 'right',
    disablePadding: false,
    label: 'Receiver ID'
  },
  {
    id: 'carbs',
    align: 'center',
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'amount',
    align: 'right',
    disablePadding: false,
    label: 'Amount'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case "0":
      color = 'success';
      title = 'Verified';
      break;
    case "1":
      color = 'error';
      title = 'Fraud';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Chip title={title} color={color} />
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.string
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState('asc');
  const [data, setData] = useState([]);
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;
  useEffect(() => {
    async function fetchData() {
      let { data: Recent_Transactions, error } = await supabase
      .from('Recent_Transactions')
      .select('*')
      .range(0, 8)
      if(Recent_Transactions)
      {
        setData(Recent_Transactions)
      }
      else if(error)
      {
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {data.map((row) => (
              <TableRow
                hover
                role="checkbox"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                tabIndex={-1}
                key={row.id}
              >
                <TableCell component="th" scope="row" align="left">
                  <Link color="secondary" component={RouterLink} to="">
                    {row.transactionId}
                  </Link>
                </TableCell>
                <TableCell align="left">{row.nameOrig}</TableCell>
                <TableCell align="right">{row.nameDest}</TableCell>
                <TableCell align="left">
                  <OrderStatus status={row.isFraud} />
                </TableCell>
                <TableCell align="right">
                  ₹ {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
