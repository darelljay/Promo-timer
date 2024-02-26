import { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import theme from '../../theme';
import img from '../../public/next-white3.png'
import * as S from "./Main";
import * as h from '../header/Header';
import React from "react";
import TodoList from "../todoList/todolist";
import Explanation from "../promodoro/explanation";

export const Main = () => {
  const [isStart, setStart] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [currentState, setCurrentState] = useState('promodoro');
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [color, setColor] = useState(theme.palette.primary.main);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const switchStart = () => {
    if (isStart) {
      setStart(false);
    } else {
      setStart(true);
    }
  };

  useEffect(()=>{
   const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth');
        console.log(response); 
        if (response.status === 401) {
          setAuth(false);
        }
      } catch (error) {
        console.error('Error fetching authentication status:', error);
      }
    };

    fetchData();
  },[]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isStart && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }

      if (time === 0 && isStart) {
        handleSkip();
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isStart, time]);

  const handleSkip = () => {
    const nextState = currentState === 'promodoro' ? 'sb' : 'promodoro';
    setCurrentState(nextState);

    if (nextState === 'promodoro') {
      setTime(25 * 60);
      setStart(false);
      setColor(theme.palette.primary.main);
      setCurrentState(nextState);
    } else {
      setTime(5 * 60);
      setStart(false);
      setColor(theme.palette.secondary.main);
      setCurrentState(nextState);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // const isLoggedIn = async () => {
  //   const response = await fetch('http://localhost:3000/auth', {
  //     method: "GET",
  //   });

  //   const loggedIn = await response.json();
  //   console.log(loggedIn);
  //   return loggedIn === "User not authorized" ? false : settrue;
  // };

  const logout = () => {
    setAuth(false);
    handleClose();
  };

  const checkValue = (e): string => {
    const listArr: HTMLCollection = e.target.parentElement.children;

    for (let list of Array.from(listArr)) {
      if (list.classList.contains("active")) {
        list.classList.remove("active");
      }
    }

    e.target.classList.add("active");

    if (e.target.id === 'promodoro') {
      setTime(25 * 60);
      setStart(false);
      setColor(theme.palette.primary.main);
      setCurrentState(e.target.id);
    } else if (e.target.id === 'sb') {
      setTime(5 * 60);
      setStart(false);
      setColor(theme.palette.secondary.main);
      setCurrentState(e.target.id);
    } else {
      setTime(15 * 60);
      setStart(false);
      setColor(theme.palette.secondary.dark);
    }

    return e.target.id;
  };

  return (
    <>
      <h.HeaderStyled>
        <Box sx={{ flexGrow: 1 }} >
          <FormGroup>
            <FormControlLabel
              sx={{ display: 'none' }}
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
          <AppBar position="static" sx={{ backgroundColor: color, transition: '.8s all ease' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon cursor={"pointer"} />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                promodoro-timer
              </Typography>
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                    <MenuItem onClick={handleClose}>Setting</MenuItem>
                    <MenuItem onClick={logout}>{auth ? "Logout":"Login"}</MenuItem>
                  </Menu>
                </div>
            </Toolbar>
          </AppBar>
        </Box>
      </h.HeaderStyled>
      {/* body */}
      <S.MainBody bgColor={color}>
        <S.timerContainer>
          <S.timerBox>
            <S.menuBox>
              <S.menuItem className="li" id="promodoro" onClick={(e) => checkValue(e)}>Promodoro</S.menuItem>
              <S.menuItem className="li" id="sb" onClick={(e) => checkValue(e)}>Short break</S.menuItem>
              <S.menuItem className="li" id="lb" onClick={(e) => checkValue(e)}>Long break</S.menuItem>
            </S.menuBox>
            <S.timeWrap>
              <S.minuite>{formatTime(time)}</S.minuite>
            </S.timeWrap>
            <S.btnWrap>
              <S.emptyBox />
              <S.startBtn onClick={switchStart}>{isStart ? "Pause" : "Start"}</S.startBtn>
              <S.emptyBox>
                <S.skipImg src={img} isRunning={isStart} onClick={handleSkip} />
              </S.emptyBox>
            </S.btnWrap>
          </S.timerBox>
        </S.timerContainer>
        <S.TodoWrap>
          <TodoList />
        </S.TodoWrap>
        <Explanation />
      </S.MainBody>
    </>
  );
};
