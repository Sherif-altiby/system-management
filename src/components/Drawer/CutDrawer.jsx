import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const CutDrawer = ({ open, setOpen }) => {
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* start icons */}

           <ListItem disablePadding sx={{ display: "block" }} >
                 <ListItemButton
                   component={Link}
                   to={"/"}
                   sx={[ { minHeight: 48, px: 2.5, },
                    open ? { justifyContent: "initial", } : { justifyContent: "center", },
                      ]}
                 >
                      <ListItemIcon sx={[ { minWidth: 0, justifyContent: "center", },
                                    open ? { mr: 3, } : { mr: "auto", }, ]} >
                                    <DashboardCustomizeIcon sx={{color: "#0d6efd"}} />
                      </ListItemIcon>
                      <ListItemText primary={"لوحة التحكم"}
                              sx={[ open ? { opacity: 1, } : { opacity: 0, }, {color: "#0d6efd", fontSize: "20px"}]}
                            />
                 </ListItemButton>
           </ListItem>

           <Divider />

           <ListItem disablePadding sx={{ display: "block" }} >
                 <ListItemButton
                   component={Link}
                   to={"/add-item"}
                   sx={[ { minHeight: 48, px: 2.5, },
                    open ? { justifyContent: "initial", } : { justifyContent: "center", },
                      ]}
                 >
                      <ListItemIcon sx={[ { minWidth: 0, justifyContent: "center", },
                                    open ? { mr: 3, } : { mr: "auto", }, ]} >
                                    <AddBoxIcon sx={{color: "#0d6efd"}} />
                      </ListItemIcon>
                      <ListItemText primary={"أضف منتج"}
                              sx={[ open ? { opacity: 1, } : { opacity: 0, }, {color: "#0d6efd", fontSize: "20px"}]}
                            />
                 </ListItemButton>
           </ListItem>

           <Divider />

           <ListItem disablePadding sx={{ display: "block" }} >
                 <ListItemButton
                   component={Link}
                   to={"/sell-item"}
                   sx={[ { minHeight: 48, px: 2.5, },
                    open ? { justifyContent: "initial", } : { justifyContent: "center", },
                      ]}
                 >
                      <ListItemIcon sx={[ { minWidth: 0, justifyContent: "center", },
                                    open ? { mr: 3, } : { mr: "auto", }, ]} >
                                    <ShoppingCartIcon sx={{color: "#0d6efd"}} />
                      </ListItemIcon>
                      <ListItemText primary={"بيع منتج"}
                              sx={[ open ? { opacity: 1, } : { opacity: 0, }, {color: "#0d6efd", fontSize: "20px"}]}
                            />
                 </ListItemButton>
           </ListItem>

           <Divider />

           <ListItem disablePadding sx={{ display: "block" }} >
                 <ListItemButton
                   component={Link}
                   to={"/categories"}
                   sx={[ { minHeight: 48, px: 2.5, },
                    open ? { justifyContent: "initial", } : { justifyContent: "center", },
                      ]}
                 >
                      <ListItemIcon sx={[ { minWidth: 0, justifyContent: "center", },
                                    open ? { mr: 3, } : { mr: "auto", }, ]} >
                                    <CategoryIcon sx={{color: "#0d6efd"}} />
                      </ListItemIcon>
                      <ListItemText primary={"الاقسام"}
                              sx={[ open ? { opacity: 1, } : { opacity: 0, }, {color: "#0d6efd", fontSize: "20px"}]}
                            />
                 </ListItemButton>
           </ListItem>

           <Divider />

           <ListItem disablePadding sx={{ display: "block" }} >
                 <ListItemButton
                   component={Link}
                   to={"/salles"}
                   sx={[ { minHeight: 48, px: 2.5, },
                    open ? { justifyContent: "initial", } : { justifyContent: "center", },
                      ]}
                 >
                      <ListItemIcon sx={[ { minWidth: 0, justifyContent: "center", },
                                    open ? { mr: 3, } : { mr: "auto", }, ]} >
                                    <AnalyticsIcon sx={{color: "#0d6efd"}} />
                      </ListItemIcon>
                      <ListItemText primary={"المبيعات"}
                              sx={[ open ? { opacity: 1, } : { opacity: 0, }, {color: "#0d6efd", fontSize: "20px"}]}
                            />
                 </ListItemButton>
           </ListItem>

           <Divider />
        
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </div>
  );
};

export default CutDrawer;
