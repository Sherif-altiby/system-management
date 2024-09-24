import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import CutDrawer from "../Drawer/CutDrawer";
import AppBarComponent from "../Appbar/AppBar";
import { Outlet } from "react-router-dom";

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

const Home = () => {
  const [open, setOpen] = useState(false);

  const [nameSearch, setNameSearch] = useState("");
  const [serialSearch, setSerialSearch] = useState("");
  const [filteredUsingName, setFilteredUsingName] = useState([]);

  useEffect(() => {
    setFilteredUsingName(
      productsData.filter((item) =>
        item.name.toLowerCase().includes(nameSearch)
      )
    );
  }, [nameSearch]);

  useEffect(() => {
    setFilteredUsingName(
      productsData.filter((item) =>
        item.serial.toString().includes(serialSearch)
      )
    );
  }, [serialSearch]);

  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="main-app">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarComponent
          open={open}
          setOpen={setOpen}
          nameSearch={nameSearch}
          serialSearch={serialSearch}
          setNameSearch={setNameSearch}
          setSerialSearch={setSerialSearch}
        />
        <CutDrawer open={open} setOpen={setOpen} />
      </Box>
       <div className={`main-container ${open ? 'l-240' : 'l-65'}`}>
           <Outlet />
       </div>


      {/* search valuse */}
      <div className="filtered-products">
        {(nameSearch.length > 0 || serialSearch.length > 0) &&
        filteredUsingName.length > 0 ? (
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
                {filteredUsingName.map((row) => (
                  <StyledTableRow key={row.name} onClick={handleClickOpen}>
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
        ) : null}
      </div>

      {/* modal */}

      <>
        <Dialog
          open={openModal}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        ></Dialog>
      </>
    </div>
  );
};

export default Home;
