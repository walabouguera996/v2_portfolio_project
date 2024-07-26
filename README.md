version 2 portfolio
---------------------------------------------------------------
color with rgb(228,165,152)
---------------------------------------------------------------
#icons from https://boxicons.com/
<box-icon type='logo' name='facebook'></box-icon>
<box-icon name='instagram' type='logo' ></box-icon>
<box-icon type='logo' name='github'></box-icon>
<box-icon name='linkedin' type='logo' ></box-icon>
---------------------------------------------------------------


25:07
#ECFF9F color
_____________________________________________________________________
line 200
.text-animation span::after{
    content: "";
    background-color: var(--bg-color);
    position: absolute;
    width: calc(100% + 8px);
    height: 100%;
    border-left: 3px solid var(--bg-color);
    right: -8px;
    animation: cursor 0.6s infinite, typing 22s steps(14) infinite;
}