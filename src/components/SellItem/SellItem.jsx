import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";

import { ProductContext } from "../context/Context";

const SellItem = () => {

  const { products, addProduct, updateProduct } = useContext(ProductContext); 

  const handleButtonClick = () => {
    addProduct(); 
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProduct = { ...products[index], [name]: value };
    updateProduct(index, updatedProduct); 
  };

  return (
    <div>
      <div className="main-container">
        <div className="main-card">
          <div className="card-title">بيع منتج</div>
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-md-6">
              <Box
                sx={{ "& > :not(style)": { width: "100%" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="number-field"
                  label="رقم التلفون"
                  variant="filled"
                  type="number"
                  inputProps={{
                    style: {
                      textAlign: "right",
                      fontSize: "18px",
                      color: "#198754",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      right: 0,
                      left: "auto",
                      textAlign: "right",
                      paddingRight: "20px",
                      fontSize: "20px",
                      paddingBottom: "20px",
                    },
                  }}
                />
              </Box>
            </div>
            <div className="col-12 col-md-6">
              <Box
                sx={{ "& > :not(style)": { width: "100%" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="إسم المشتري"
                  variant="filled"
                  inputProps={{
                    style: {
                      textAlign: "right",
                      fontSize: "18px",
                      color: "#198754",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      right: 0,
                      left: "auto",
                      textAlign: "right",
                      paddingRight: "20px",
                      fontSize: "20px",
                      paddingBottom: "20px",
                    },
                  }}
                />
              </Box>
            </div>
          </div>
          <form>
            <div className="selled_product_info">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="row mb-4 align-items-center content_rtl"
                >
                  <div className="col-12 col-md-6 col-lg-3">
                    <Box
                      sx={{ "& > :not(style)": { width: "100%" } }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="name"
                        value={product.name}
                        onChange={(e) => handleInputChange(e, index)}
                        label="إسم المنتج"
                        variant="filled"
                        inputProps={{
                          style: {
                            textAlign: "right",
                            fontSize: "18px",
                            color: "#198754",
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            right: 0,
                            left: "auto",
                            textAlign: "right",
                            paddingRight: "20px",
                            fontSize: "20px",
                            paddingBottom: "20px",
                          },
                        }}
                      />
                    </Box>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <Box
                      sx={{ "& > :not(style)": { width: "100%" } }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="amount"
                        value={product.amount}
                        onChange={(e) => handleInputChange(e, index)}
                        label="الكمية"
                        variant="filled"
                        type="number"
                        inputProps={{
                          style: {
                            textAlign: "right",
                            fontSize: "18px",
                            color: "#198754",
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            right: 0,
                            left: "auto",
                            textAlign: "right",
                            paddingRight: "20px",
                            fontSize: "20px",
                            paddingBottom: "20px",
                          },
                        }}
                      />
                    </Box>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <Box
                      sx={{ "& > :not(style)": { width: "100%" } }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="price"
                        value={product.price}
                        onChange={(e) => handleInputChange(e, index)}
                        label="سعر المنتج"
                        variant="filled"
                        type="number"
                        inputProps={{
                          style: {
                            textAlign: "right",
                            fontSize: "18px",
                            color: "#198754",
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            right: 0,
                            left: "auto",
                            textAlign: "right",
                            paddingRight: "20px",
                            fontSize: "20px",
                            paddingBottom: "20px",
                          },
                        }}
                      />
                    </Box>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <Box
                      sx={{ "& > :not(style)": { width: "100%" } }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="serial"
                        value={product.serial}
                        onChange={(e) => handleInputChange(e, index)}
                        label="رقم السريال"
                        variant="filled"
                        type="number"
                        inputProps={{
                          style: {
                            textAlign: "right",
                            fontSize: "18px",
                            color: "#198754",
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            right: 0,
                            left: "auto",
                            textAlign: "right",
                            paddingRight: "20px",
                            fontSize: "20px",
                            paddingBottom: "20px",
                          },
                        }}
                      />
                    </Box>
                  </div>
                </div>
              ))}
            </div>

            <div className="content_rtl row align-items-center">
              <div className="col-2">
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={handleButtonClick}
                  style={{
                    backgroundColor: "#1976d2",
                    color: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <span style={{ marginLeft: "10px" }}>أضف منتج</span>
                  <AddBoxIcon />
                </IconButton>
              </div>
              <div className="col-2">
                <IconButton
                  component={Link}
                  to="/invoice"
                  color="inherit"
                  edge="start"
                  style={{
                    backgroundColor: "#1976d2",
                    color: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <span style={{ marginLeft: "10px" }}>الفاتورة</span>
                  <ReceiptRoundedIcon />
                </IconButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellItem;
