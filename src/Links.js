import React from 'react';

var BeforeLogin = [{label:"login", link:"/loginscreen", id:1},{label:"register", link:"/register", id:2}]
var AfterLogin = [{label:"home", link:"/home"}, {label:"catalog", link:"/Catalogsearch"}]
var Links = BeforeLogin;
const navigationLinks = React.createContext(Links);
export {navigationLinks,BeforeLogin,AfterLogin,Links};