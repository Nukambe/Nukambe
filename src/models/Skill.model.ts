export enum tag {
  frontend = 'Frontend',
  backend = 'Backend',
  database = 'Database',
  devops = 'DevOps',
  mobile = 'Mobile',
  desktop = 'Desktop',
  cloud = 'Cloud',
  testing = 'Testing',
  security = 'Security',
  OOP = 'OOP',
  ORM = 'ORM',
  EVENT = 'Event Streaming',
  GAMING = 'Gaming',
  VC = 'Version Control',
}

export class Skill {
  id: number;
  name: string = 'NAME';
  description: string = 'DESCRIPTION';
  image: string = 'IMAGE';
  tags: tag[] = [];

  constructor(id: number) {
    this.id = id;
  }
}
