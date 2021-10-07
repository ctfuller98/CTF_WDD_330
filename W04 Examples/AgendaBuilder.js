export default class AgendaBuilder {
    constructor(dataPath) {
        this.dataPath = dataPath;
        this.data = {};
        this.mainElement = document.querySelector('main')
    }
    async init() {
        await this.getData()
        console.log(this.data)
        this.renderTracks(this.data.tracks)
    }
    async getData() {
        
        try {
            const response = await fetch(this.dataPath)
            if (response.ok){
                this.data = await response.json();
            }
            else {
                throw new Error('Server not found');
            }
        }
        catch(err){
            console.log(err)
        }    
    }
    renderTracks(tracks) {
        const section = document.createElement('section');
        section.innerHTML = "Tracks: "
        tracks.map(
        (track) => `<div class = "track track${track.trackNo}">${track.name}</div>`);
        section.innerHTML +=HTMLFormControlsCollection.join('');
        this.mainElement.appendChild(section);

    }
    renderCourses(courses) {

    }
        
}