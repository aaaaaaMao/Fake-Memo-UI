const {ipcRenderer} = require('electron');
const $ = require('jquery');

$('div#status-bar img#collapse').on('click', () => {
    ipcRenderer.send('window-min');
});

$('div#status-bar img#close').on('click', () => {
    ipcRenderer.send('window-close');
});