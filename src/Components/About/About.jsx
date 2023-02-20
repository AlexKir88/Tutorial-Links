
const About = () => {
    return (
        <div>
            <div>
                <p>This application is designed to store useful links and notes. 
                    In the item "links" it is possible to create groups and add links to these groups. 
                    In the item "notes" it is possible to create short notes. 
                    In the "backup" item, it is possible to upload and download previously saved data.
                </p>
            </div>
            <div>
                <input type="text" placeholder="input name..." />
                <input type="text" placeholder="input contact..." />
                <textarea placeholder="descript you problem..." />
            </div>
        </div>
    )
}

export default About;