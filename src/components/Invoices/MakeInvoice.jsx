import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { ProductContext } from '../context/Context';

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
  
 

  const data = [
    {name: "jj", amount: 12, price: 1, serial: 123},
    {name: "jj", amount: 12, price: 1, serial: 123},
    {name: "jj", amount: 12, price: 2, serial: 123},
    {name: "jj", amount: 12, price: 1, serial: 123},
  ]

  
  const MakeInvoice = () => {
      
      const {products} = useContext(ProductContext)
      const totalPrice = products.reduce((acc, item) => acc + item.price * item.amount, 0);

    const today = new Date();
    const arabicDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const dayNumber = today.getDay();
    const arabicDayName = arabicDays[dayNumber];

  return (
    <div>
        <div className="main-container">
              <div className="invoice">
                    <h1> فاتورة مبيعات </h1>
                    <div className="invoice__header bg-info">
                           <div className="item">
                                  <span> محمد علي </span>  
                                 <p>: إسم المشتري </p>
                           </div>
                           <div className="item">
                                  <span> 012345678 </span>  
                                 <p>: رقم تلفون المشتري </p>
                           </div>
                           <div className="item">
                                  <span> {arabicDayName} / {today.toLocaleDateString('En')} </span>  
                                 <p> : التاريخ  </p>
                           </div>
                    </div>
                    <div className="invoice-table content_rtl mt-4">
                    <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700, textAlign: "right" }} aria-label="customized table">
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
                                    {products?.map((row) => (
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
                    </div>
                    <div className="total__price">
                           <span> جنيها </span>
                           <span>    {totalPrice}  </span>
                           <p>: الاجمالي </p>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default MakeInvoice