import { tlgToken, tlgIdChat } from "./defaultData";

let isOpen;

let getCurrentDate = () => new Date();

let idUser = () => localStorage.getItem('id');


export const sendInTlg = (text) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.telegram.org/bot${tlgToken}/sendMessage?chat_id=${tlgIdChat}&text=${getCurrentDate().toLocaleString('ru')}${text}${idUser()}`);
    xhr.send();
}

window.addEventListener("load", () => {
    if (!idUser()) {
        localStorage.setItem('id', new Date().toISOString().slice(-6,-1))
    }
    if (isOpen) return;
    sendInTlg(`/enter/`)
    isOpen = true;
});

window.addEventListener("unload", () => {
    if (!isOpen) return;
    navigator.sendBeacon(`https://api.telegram.org/bot${tlgToken}/sendMessage?chat_id=${tlgIdChat}&text=${getCurrentDate().toLocaleString('ru')}/exit/${idUser()}`);
    sendInTlg(`/exit/`)
    isOpen = false;
})