export class Project {
    public id: number;
    public title: string = "Title";
    public type: string = "Type";
    public subType: string = "SubType";
    public liveUrl: string = "https://www.wesleychappell.com";
    public sourceUrl: string = "https://www.github.com/Nukambe";
    public description: string = "Description";
    public image: string = "images/default.jpg";
    public technologies: string[] = [];
    public color: string = "#000000";

    constructor(id: number) {
        this.id = id;
    }
}
