import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selecros';
import { Box, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { UserMenuWrapper } from './UserMenu.styled';

//This component is created with Material UI

const UserMenu = () => {
  const [isUserMenu, setIsUserMenu] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleOpenUserMenu = e => {
    setIsUserMenu(e.currentTarget);
  };

  const handlerCloseUserMenu = () => {
    setIsUserMenu(null);
  };

  return (
    <UserMenuWrapper>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={isUserMenu}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(isUserMenu)}
          onClose={handlerCloseUserMenu}
        >
          <MenuItem onClick={handleLogOut}>
            <Typography textAlign="center">Log Out</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </UserMenuWrapper>
  );
};

export default UserMenu;
