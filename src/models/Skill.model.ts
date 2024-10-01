export enum tag {
    frontend,
    backend,
    database,
    devops,
    mobile,
    desktop,
    cloud,
    testing,
    security,
    OOP,
    ORM,
}

export class Skill {
    id: number;
    name: string = "NAME";
    description: string = "DESCRIPTION";
    image: string = "IMAGE";
    tags: tag[] = [];

    constructor(id: number) {
        this.id = id;
    }
}
