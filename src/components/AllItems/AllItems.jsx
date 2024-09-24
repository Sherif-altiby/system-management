import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";



const productsData = [
  { name: "غسالة", amount: 1, price: 120, serial: 1145 },
  { name: "تلاجة", amount: 12, price: 120, serial: 1415 },
  { name: "خلاط", amount: 11, price: 120, serial: 1451 },
  { name: "مكنسة", amount: 10, price: 120, serial: 1452 },
  { name: "تكييف", amount: 1, price: 120, serial: 1425 },
  { name: "مروحة", amount: 5, price: 120, serial: 1245 },
  { name: "بتجاز", amount: 3, price: 120, serial: 2145 },
  { name: "فرن", amount: 8, price: 120, serial: 3145 },
  { name: "مكن القهوة", amount: 1, price: 120, serial: 1345 },
  { name: "دفايات", amount: 9, price: 120, serial: 1435 },
  { name: "فريزر", amount: 10, price: 120, serial: 1453 },
  { name: "مكوة", amount: 13, price: 120, serial: 14454 },
  { name: "سخان", amount: 11, price: 10, serial: 4145 },
];

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AllItems = () => {
  return (
    <div className="content_rtl acc-container">

      <Card sx={{width: 300, paddingBottom: 0, marginBottom: 2}} >
          <CardContent>
            <Typography gutterBottom sx={{ color: "#fff", fontSize: 18,textAlign: "center" }}>
               جميع الأقسام
            </Typography>
          </CardContent>
      </Card>

      <Accordion sx={{marginBottom: "20px"}}  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor: "#2c8dec"}}
        >
          <Typography sx={{color: "#fff", fontSize: "18px"}} >قسم التلاجات </Typography>
        </AccordionSummary>
        <AccordionDetails>
           
  
        <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400, textAlign: "right" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right"> إسم النتج </StyledTableCell>
                  <StyledTableCell align="right"> الكمية </StyledTableCell>
                  <StyledTableCell align="right"> سعر المنتج </StyledTableCell>
                  <StyledTableCell align="right"> الاجمالي </StyledTableCell>
                  <StyledTableCell align="right"> رقم السريال </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsData.map((row) => (
                  <StyledTableRow key={row.name}  >
                    <StyledTableCell align="right" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price} جنيه
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price * row.amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.serial}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginBottom: "20px"}}  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor: "#2c8dec"}}
        >
          <Typography sx={{color: "#fff", fontSize: "18px"}} >قسم التلاجات </Typography>
        </AccordionSummary>
        <AccordionDetails>
           
  
        <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400, textAlign: "right" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right"> إسم النتج </StyledTableCell>
                  <StyledTableCell align="right"> الكمية </StyledTableCell>
                  <StyledTableCell align="right"> سعر المنتج </StyledTableCell>
                  <StyledTableCell align="right"> الاجمالي </StyledTableCell>
                  <StyledTableCell align="right"> رقم السريال </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsData.map((row) => (
                  <StyledTableRow key={row.name}  >
                    <StyledTableCell align="right" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price} جنيه
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price * row.amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.serial}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginBottom: "20px"}}  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor: "#2c8dec"}}
        >
          <Typography sx={{color: "#fff", fontSize: "18px"}} >قسم التلاجات </Typography>
        </AccordionSummary>
        <AccordionDetails>
           
  
        <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400, textAlign: "right" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right"> إسم النتج </StyledTableCell>
                  <StyledTableCell align="right"> الكمية </StyledTableCell>
                  <StyledTableCell align="right"> سعر المنتج </StyledTableCell>
                  <StyledTableCell align="right"> الاجمالي </StyledTableCell>
                  <StyledTableCell align="right"> رقم السريال </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsData.map((row) => (
                  <StyledTableRow key={row.name}  >
                    <StyledTableCell align="right" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price} جنيه
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price * row.amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.serial}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            
        </AccordionDetails>
      </Accordion>

       
    </div>
  );
};

export default AllItems;
