import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#0d6efd",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
const FilteredProduct = ({data}) => {
  return (
    <div className="filtered-products">
                   {data.length > 0 ? (
                      <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 400, textAlign: "right" }} aria-label="customized table">
                          <TableHead  >
                          <TableRow >
                              <StyledTableCell sx={{width: 500}} align="right"> إسم النتج </StyledTableCell>
                              <StyledTableCell align="right"> الكمية </StyledTableCell>
                              <StyledTableCell align="right"> سعر المنتج </StyledTableCell>
                              <StyledTableCell align="right"> الاجمالي </StyledTableCell>
                              <StyledTableCell align="right"> رقم السريال </StyledTableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {data.map((row) => (
                              <StyledTableRow key={row.name}>
                                  <StyledTableCell align="right" component="th" scope="row"> {row.name} </StyledTableCell>
                                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                  <StyledTableCell align="right">  {row.price} جنيه</StyledTableCell>
                                  <StyledTableCell align="right">{row.price * row.amount}</StyledTableCell>
                                  <StyledTableCell align="right">{row.serial}</StyledTableCell>
                              </StyledTableRow>
                          ))}
                          </TableBody>
                      </Table>
           </TableContainer>
                   ) : (null)}
    </div>
  )
}

export default FilteredProduct