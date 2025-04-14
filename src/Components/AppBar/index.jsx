import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Profile from './Profile';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAuth } from "./Account";
import { Link } from "react-router-dom";

const AppBarComponent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button component={Link} to="/" sx={{ p: 0 }}>
            <img
              src="https://res.cloudinary.com/ddmsl3meg/image/upload/v1733899748/cw96zg7py4xsxwdyanzy.png"
              style={{ height: "50px", marginRight: "16px" }}
              alt="Logo"
            />
          </Button>
          <Button component={Link} to="/account/OrderPlane" sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Máy Bay + K.sạn
          </Button>
          <Button component={Link} to="/account/Hotels" sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Chỗ ở
          </Button>
          <Button component={Link} to="#" sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Hoạt động
          </Button>
          <Button component={Link} to="#" sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Phiếu giảm giá và ưu đãi
          </Button>
          <Button component={Link} to="#" sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            eSim
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isAuthenticated ? (
            <>
              <Button component={Link} to="/account/shoppingcart" sx={{ color: "#000", textTransform: "none" }}>
                <ShoppingCartOutlinedIcon />
              </Button>
              <Profile fontSize="30px" />
            </>
          ) : (
            <>
              <Button component={Link} to="/account/login" sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
                Đăng Nhập
              </Button>
              <Button
                component={Link}
                to="/account/SignUp"
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: 16,
                  border: "1px solid #000",
                  marginLeft: "8px",
                  padding: "4px 16px",
                  borderRadius: "20px"
                }}
              >
                Đăng Ký
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
