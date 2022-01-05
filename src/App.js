import React, {useState, useContext} from 'react';

import img from './flaticon (1).png'
import {Container, MainContainer, Img, Line, ItemTitle, Item, ImgTitle, ImgDesc, IconNav, Icon, ImgContent, DarkButton } from './AppStyle'
import {ThemeContext} from './context'

const App = () => {
  const [mode, setMode] = useState(false)
  const [change, setChange] = useState(true)
  const  [theme, setTheme] = useContext(ThemeContext)

  const dark = {
    icon: 'white',
    title: 'white',
    background: 'black'
  }
  const light = {
    icon: 'black',
    title: 'black',
    background: 'whitesmoke'
  }
  

  const onChange=()=>{
    setMode(!mode);
    setTheme(mode ? light : dark);
    setChange(!change);

  }

  return (
    <div className="App">
      <Container >
      <MainContainer color={theme.background}>
          <IconNav>
              <Icon.Arrow color={theme.icon}/>
              <Icon.Switch color={theme.icon}/>
          </IconNav>
          <ImgContent>
           <Img src={img} alt="flaticon" />
           <ImgTitle color={theme.title}> Flaticon Web  </ImgTitle>
           <ImgDesc color={theme.title}>Welcome To Our Website</ImgDesc>
          </ImgContent>
          {/* Dark */}
          <Item>
            <Icon.Sun change={change}/>
            <Icon.Moon change={change}/>
            <ItemTitle color={theme.title} > {change ? 'Light Mode': 'Dark Mode' } </ItemTitle>
            <DarkButton onClick={onChange}
            
            >{change ? 'Light': 'Dark' }</DarkButton>
          </Item>
          {/* Story */} 
          <Item>
            <Icon.Story/>
            <ItemTitle color={theme.title}>Story</ItemTitle>
          </Item>
          {/* Chat */}
          <Item>
            <Icon.Chat/>
            <ItemTitle color={theme.title}>Chat heads</ItemTitle>
          </Item>
           {/* Group */}
           <Item>
            <Icon.Group/>
            <ItemTitle color={theme.title}>Groups</ItemTitle>
          </Item>
          <Line/>
          {/* Media */}
          <Item>
            <Icon.Media/>
            <ItemTitle color={theme.title}>Media and Photos</ItemTitle>
          </Item>
          {/* Settings */}
          <Item>
            <Icon.Settings/>
            <ItemTitle color={theme.title}>Settings and privacy</ItemTitle>
          </Item>
          {/* Help center */}
          <Item>
            <Icon.Help/>
            <ItemTitle color={theme.title}>Help centre</ItemTitle>
          </Item>
          {/* Notification */}
          <Item>
            <Icon.Bell/>
            <ItemTitle color={theme.title}>Notification</ItemTitle>
          </Item>
          

       </MainContainer>
      </Container>
     </div>
  );
}
export default App;
//+998905502798
// import React, {useState} from "react";
// import DarkModeToggle from "react-dark-mode-toggle";

// export default () => {
//   const [isDarkMode, setIsDarkMode] = useState(() => false);
//   return (
//     <DarkModeToggle
//       onChange={setIsDarkMode}
//       checked={isDarkMode}
//       size={80}
//     />
//   );
// };