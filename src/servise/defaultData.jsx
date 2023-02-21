export const nameDB = 'dataBase' ;
export const defaultGroup = {
    name: 'HTML & CSS',
    color: 'orange',
    content: [
        {
            nameLink: 'html5css.ru',
            url: 'https://html5css.ru/',
            comment: 'all tags HTML & CSS'
        },
        {
            nameLink: 'BEM',
            url: 'https://ru.bem.info/methodology/',
            comment: 'description BEM methodology'
        }
    ]
};

export const defaultNotes = [
    {
        name: 'Create new project +react +redux +sass',
        content: `
        1. >npx create-react-app name
        2. >npm install redux
        3. >npm install --save react-redux
        4. >npm install sass`
    },
    {
        name: 'Deploy progect on github page',
        content: `
        1. >npx install gh-pages --save-dev;
        2. in 'package.json' add {"homepage": "https://nameUser.github.io/nameRepository/",...;
        3. in 'package.json' in '"scripts": {' add   "predeploy": "npm run build", "deploy": "gh-pages -d build"...;
        4. >npm run build;
        5. push in github;
        6. in gitHub show new branche 'gh-pages'. On setting/pages/branch add 'gh-pages' and click 'save';
        7. >npm run deploy;
        8. wait 3 - 5 minutes for updating github`
    }
]

export const tlgToken = '6212081657:AAEwQjeJqleK9oGej_cAlchTYPH4TazWWn8';
export const tlgIdChat = '-889961446';


