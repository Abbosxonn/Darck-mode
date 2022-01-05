import styled from 'styled-components';

import {KeyboardArrowLeft} from '@styled-icons/material/KeyboardArrowLeft';
import {Switch} from '@styled-icons/icomoon/Switch';
import {Moon} from '@styled-icons/bootstrap/Moon';
import {Sun} from '@styled-icons/bootstrap/Sun';
import {Grid} from '@styled-icons/bootstrap/Grid';
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck';
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus';
import {Settings} from '@styled-icons/ionicons-sharp/Settings';
import {PermMedia} from '@styled-icons/material-outlined/PermMedia';
import {CommentDots} from '@styled-icons/boxicons-regular/CommentDots';
import {BellFill} from '@styled-icons/bootstrap/BellFill';



export const Container = styled.div`
width: 100wh;
height: 100%;
box-sizing: border-box;
display:flex;
justify-content:center;
align-item:center;
margin:0;
padding:0
`

export const MainContainer = styled.div`
width: 400px;
height: 640px;
box-sizing: border-box;
box-shadow: 5px 5px 12px .5px rgba(0, 0, 0.72);
background: ${({color})=>color} ;
padding:30px
`
 export const IconNav = styled.div`
 width:100%;
 height: 40px;
 display:flex;
 `

 export const Icon = styled.div``

 Icon.Arrow = styled(KeyboardArrowLeft)`
 color:  ${({color})=>color};
 cursor: pointer;
 width:30px;
 `

 Icon.Switch = styled(Switch)`
 color: ${({color})=>color};
 cursor: pointer;
 width:20px;
 margin-left:auto;
 `

 export const ImgContent = styled.div`
 margin-top:20px;
 display:flex;
 justify-content:center;
 flex-direction:column;
 align-items:center;
 `

 export const Img = styled.img`
 width: 100px;
 height: 100px;
 border-radius: 50%;
 border: .5px solid grey;
 `

 export const ImgTitle = styled.div`
 font-size: 22px;
 font-style: bold;
 font-family: sans-serif;
 margin: 20px 0 10px 0;
 color: ${({color})=>color};

 `
 export const ImgDesc = styled.div`
 font-size: 14px;
 font-family: sans-serif;
 margin-bottom:20px;
 color: ${({color})=>color};

 `

 export const Item = styled.div`
 width:100%;
 display: flex;
 padding: 10px 0 10px 0;
 `
 export const ItemTitle = styled.div`
 font-size: 16px;
 font-style: bold;
 font-family: sans-serif;
 margin-left: 25px;
 color: ${({color})=>color};
 `
 Icon.Moon = styled(Moon)`
 cursor: pointer;
 width: 20px;
 color: white;
 display:${({change}) => change? 'none' : 'block'}

 `
 Icon.Sun = styled(Sun)`
 cursor: pointer;
 width: 20px;
 color: orange;
 display:${({change}) => change? 'block' : 'none'}
 `
 Icon.Story = styled(Grid) `
 width: 20px;
 cursor: pointer;
 color: #FBB65C
 `
 Icon.Chat = styled(UserCheck) `
 width: 20px;
 cursor: pointer;
 color: #FF7EB0;
 `
 Icon.Group = styled(UserPlus) `
 width: 20px;
 cursor: pointer;
 color: #36E3FF;
 `

 export const Line = styled.hr`
 width:100%;
 `

 Icon.Media = styled(PermMedia) `
 width: 20px;
 cursor: pointer;
 color: #5476FF;
 `
 Icon.Settings = styled(Settings) `
 width: 20px;
 cursor: pointer;
 color: #0BC630;
 `
 Icon.Help = styled(CommentDots) `
 width: 20px;
 cursor: pointer;
 color: #0BC630;
 `
 Icon.Bell = styled(BellFill) `
 width: 20px;
 color: #A394C2;
 cursor: pointer;
 `

 export const DarkButton = styled.button`
 margin:0;
 madding:0;
 border-radius:2px;
 border: .1px solid black;
 outline: none;
 font-size: 14px;
 font-style: bold;
 font-family: sans-serif;
 cursor: pointer;
 margin-left: auto;
 `
//  Icon.Sun = styled(Sun) `
//  width: 20px;
//  color: orange;
 


