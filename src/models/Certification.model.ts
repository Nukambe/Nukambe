export class Certification {
    id: number;
    title: string = "NAME";
    issuer: string = "ISSUER";
    description: string = "DESCRIPTION";
    image: string = "IMAGE";
    issue: Date = new Date();
    expiration: Date = new Date();
    verifyUrl: string = "URL";

    constructor(id: number) {
        this.id = id;
    }
}
