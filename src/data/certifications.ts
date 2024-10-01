import { Certification } from "../models/Certification.model";

const aws: Certification = new Certification(0);
aws.title = "AWS Certified Cloud Practitioner";
aws.issuer = "Amazon Web Services";
aws.description = "The AWS Certified Cloud Practitioner examination is intended for individuals who have the knowledge and skills necessary to effectively demonstrate an overall understanding of the AWS Cloud, independent of specific technical roles addressed by other AWS Certifications.";
aws.image = "/images/aws.png";
aws.issue = new Date("2021-01-01");
aws.expiration = new Date("2024-01-01");
aws.verifyUrl = "https://www.youracclaim.com/badges/1d3d5e1c-9b4e-4e9e-bb8d-7e2f3f1e3d9d";

const aPlus: Certification = new Certification(1);
aPlus.title = "CompTIA A+";
aPlus.issuer = "CompTIA";
aPlus.description = "CompTIA A+ is the industry standard for establishing a career in IT. CompTIA A+ is the preferred qualifying credential for technical support and IT operational roles.";
aPlus.image = "/images/aPlus.png";
aPlus.issue = new Date("2020-01-01");
aPlus.expiration = new Date("2023-01-01");
aPlus.verifyUrl = "https://www.youracclaim.com/badges/1d3d5e1c-9b4e-4e9e-bb8d-7e2f3f1e3d9d";

const pojectPlus = new Certification(2);
pojectPlus.title = "CompTIA Project+";
pojectPlus.issuer = "CompTIA";
pojectPlus.description = "CompTIA Project+ is designed for business professionals who coordinate or manage small-to-medium-size projects.";
pojectPlus.image = "/images/projectPlus.png";
pojectPlus.issue = new Date("2020-01-01");
pojectPlus.expiration = new Date("2023-01-01");
pojectPlus.verifyUrl = "https://www.youracclaim.com/badges/1d3d5e1c-9b4e-4e9e-bb8d-7e2f3f1e3d9d";

const securityPlus = new Certification(3);
securityPlus.title = "CompTIA Security+";
securityPlus.issuer = "CompTIA";
securityPlus.description = "CompTIA Security+ is a global certification that validates the baseline skills you need to perform core security functions and pursue an IT security career.";
securityPlus.image = "/images/securityPlus.png";
securityPlus.issue = new Date("2020-01-01");
securityPlus.expiration = new Date("2023-01-01");
securityPlus.verifyUrl = "https://www.youracclaim.com/badges/1d3d5e1c-9b4e-4e9e-bb8d-7e2f3f1e3d9d";

const itil = new Certification(4);
itil.title = "ITIL Foundation";
itil.issuer = "AXELOS";
itil.description = "ITIL Foundation is the first level of certification for ITIL, the world’s most popular IT service management framework.";
itil.image = "/images/itil.png";
itil.issue = new Date("2020-01-01");
itil.expiration = new Date("2023-01-01");
itil.verifyUrl = "https://www.youracclaim.com/badges/1d3d5e1c-9b4e-4e9e-bb8d-7e2f3f1e3d9d";

export const certificationData: Certification[] = [aws, aPlus, pojectPlus, securityPlus, itil];
