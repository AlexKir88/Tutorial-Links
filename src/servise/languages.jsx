let langBrowser = window.navigator.language;
export let defoultLang = () => {
    if (langBrowser.startsWith('ru')) return RU;
    return EN;
}

export const EN = {
    id: 'EN',
    TutorialLinks: 'Tutorial Links',
    buttonCreateGroup: 'Create group',
    buttonLinks: 'Links',
    buttonNotes: 'Notes',
    buttonBackUp: 'Back up',
    buttonAbout: 'About',
    promtAddLink: 'add link',
    promtDeldGroup: 'delete group',
    group: 'Group',
    name: 'Name',
    URL: 'url',
    comments: 'Comments',
    buttonEdit: 'Edit',
    buttonDelete: 'Delete',
    content: 'Сontent',
    textSave: 'To save the data to a file, click the "Save" button',
    buttonSave: 'Save',
    textDownload: 'To load a previously saved file, click the "Download" button',
    buttonDownload: 'Download',
    messageComplete: 'Download complete',
    feedback: 'Feedback',
    about: ` This application is designed to store useful links and notes. 
    In the item "links" it is possible to create groups and add links to these groups. 
    In the item "notes" it is possible to create short notes.
    In the "backup" item, it is possible to upload and download previously saved data.
    You can also leave your feedback or describe the problem in the form below. 
    Be sure to leave your contact information for feedback.`,
    buttonSend: 'Send',
    contact: 'Contact',
    descript: 'Description',
    placeholderName: '  name...',
    placeholderContact: ' telephone, email, anything...',
    placeholderDescript: '   describe you problem or offer...',
    nameColor: 'name & color for group',
    buttonDone: 'done',
    color: 'color',
    inputData: 'Input data',
}

export const RU = {
    id: 'RU',
    TutorialLinks: 'Учебные ссылки',
    buttonCreateGroup: 'Создать группу',
    buttonLinks: 'Ссылки',
    buttonNotes: 'Записки',
    buttonBackUp: 'Резервное копирование',
    buttonAbout: 'О приложении',
    promtAddLink: 'добавить ссылку',
    promtDeldGroup: 'удалить группу',
    group: 'Группа',
    name: 'Имя ',
    URL: 'url',
    comments: 'Комментарии',
    buttonEdit: 'Изменить',
    buttonDelete: 'Удалить',
    content: 'Содержание',
    textSave: 'Чтобы сохранить данные в файл, нажмите кнопку «Сохранить».',
    buttonSave: 'Сохранить',
    textDownload: 'Чтобы загрузить ранее сохраненный файл, нажмите кнопку «Загрузить»',
    buttonDownload: 'Загрузить',
    messageComplete: 'Загрузка завершена',
    feedback: 'Обратная связь',
    about: ` Это приложение предназначено для хранения полезных ссылок и заметок.
     В пункте «ссылки» есть возможность создавать группы и добавлять ссылки в эти группы.
     В пункте «заметки» можно создавать короткие заметки.
     В пункте «резервное копирование» есть возможность загрузить и скачать ранее сохраненные данные.
     Вы также можете оставить свой отзыв или описать проблему в форме ниже.
     Обязательно оставьте свои контактные данные для обратной связи.`,
    buttonSend: 'Отправить',
    contact: 'Контакт',
    descript: 'Описание',
    placeholderName: '  имя...',
    placeholderContact: ' телефон, email, что угодно...',
    placeholderDescript: '   опишите вашу проблему или предложение...',
    nameColor: 'имя и цвет группы',
    buttonDone: 'Готово',
    color: 'цвет',
    inputData: 'введите данные',
}