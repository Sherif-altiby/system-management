import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from '@mui/material/Button';

const AddItem = () => {
  const selectData = [
    { title: "قسم الغسالات" },
    { title: "قسم الثلجات" },
    { title: "قسم التكيفات" },
    { title: "قسم المراوح" },
  ];

  const defaultProps = {
    options: selectData,
    getOptionLabel: (option) => option.title,
  };

  return (
    <div>
      <div className="main-container">
        <div className="main-card">
          <div className="card-title"> إضافة منتج </div>
          <form action="">
            <div className="row align-items-center mb-4">
              <div className="col-12 col-md-6">
                <Autocomplete
                  {...defaultProps}
                  id="clear-on-escape"
                  clearOnEscape
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="أضف القسم"
                      variant="filled"
                      InputProps={{
                        ...params.InputProps,
                        sx: {
                          flexDirection: "row-reverse",
                        },
                      }}
                      inputProps={{
                        ...params.inputProps,
                        style: {
                          textAlign: "right",
                          fontSize: "18px",
                          color: "#198754",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "20px",
                        },
                      }}
                      sx={{
                        direction: "rtl",
                      }}
                    />
                  )}
                />
              </div>
              <div className="col-12 col-md-6">
                <Box
                  sx={{ "& > :not(style)": { width: "100%" } }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="filled-basic"
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
            </div>
            <div className="row align-items-center mb-4">
              <div className="col-12 col-md-6">
                <Box
                  sx={{ "& > :not(style)": { width: "100%" } }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="number-field"
                    label="كمية المنتج"
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
                    id="number-field"
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
            </div>
            <div className="row align-items-center mb-4">
              <div className="col-12 col-md-6">
                <Box
                  sx={{ "& > :not(style)": { width: "100%" } }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="number-field"
                    label="  رقم السريال"
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
                  sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                  noValidate
                  autoComplete="off"
                >
                  <input
                    id="image-field"
                    type="file"
                    accept="image/*"
                    style={{
                      display: "none",
                    }}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                        console.log(file);
                      }
                    }}
                  />
                  <label htmlFor="image-field">
                    <TextField
                      variant="filled"
                      label="إرفع صورة"
                      sx={{
                        width: "100%",
                        cursor: "pointer",
                        textAlign: "right",
                      }}
                      InputProps={{
                        readOnly: true,
                        onClick: (e) => {
                          e.preventDefault();
                          document.getElementById("image-field").click();
                        },
                      }}
                    />
                  </label>
                </Box>
              </div>
            </div>

            <div className="main_frm__btn"> <Button type="submit" variant="contained" sx={{ fontSize: "20px" }} > أضف المنتج </Button> </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
