import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom"



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

      <Paper elevation={3} 
             component={Link}
             to={"/1"}
             className="category-link"
      >
          <div className="category-name"> إسم القسم: قسم التلاجات </div>
          <div className="category-amount"> عدد المنتجات: 100 منتج </div>
      </Paper>

      <Paper elevation={3} 
             component={Link}
             to={"/1"}
             className="category-link"
      >
          <div className="category-name"> إسم القسم: قسم التلاجات </div>
          <div className="category-amount"> عدد المنتجات: 100 منتج </div>
      </Paper>

      <Paper elevation={3} 
             component={Link}
             to={"/1"}
             className="category-link"
      >
          <div className="category-name"> إسم القسم: قسم التلاجات </div>
          <div className="category-amount"> عدد المنتجات: 100 منتج </div>
      </Paper>

      <Paper elevation={3} 
             component={Link}
             to={"/1"}
             className="category-link"
      >
          <div className="category-name"> إسم القسم: قسم التلاجات </div>
          <div className="category-amount"> عدد المنتجات: 100 منتج </div>
      </Paper>
             
     </div>
  );
};

export default AllItems;
