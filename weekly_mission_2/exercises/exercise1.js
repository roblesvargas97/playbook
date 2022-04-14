const repo = {
  name: "LaunchX",
  author: "Jesus Uriel Robles Vargas",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 23,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const Issue = {
  title: "05 Live 2 Semana 2 [Miércoles 13 de Abril]",
  repositoryNameAssociated: "MissionNodeJS",
  status: "open",
  numberOfComments: "888",
  labels: ["LIVE 2 ", "Semana-2", "PRÓXIMO LIVE"],
  author: "Carlo Gilmar",
  dateCreated: "13/04/2022",
  lastUpdate: "13/04/2022",
  getTitleAndAuthor() {
    return `The autor of this respository is ${this.author}`;
  },
  getGeneralInfo() {
    return ` Tittle: ${this.title}, Status: ${this.status}, Labels: ${this.labels}, Author:${this.author}`;
  },
};
console.log(Issue.getTitleAndAuthor());
console.log(Issue.getGeneralInfo());

const PullRequest = {
  title: "Añadi nuevas funcionalidades",
  brancName: "Main",
  dateCreated: "13/04/2022",
  status: "Pending",
  repositoryNameAssociated: "Proyecto1",
  getStatus() {
    return `Status: ${this.status}`;
  },
  getTitleAndAuthor() {
    return `Pull request: ${this.title}, status: ${this.status}`;
  },
};
console.log(PullRequest.getStatus());
console.log(PullRequest.getTitleAndAuthor());

// Twitter Properties

const userTwitter = {
  user: "Uriel",
  username: "roblesvargas97",
  bio: "Hola Twitter",
  age: 24,
  image: "https://image.jpg",
};
const trendingTopingTwitter = {
  position: "1",
  subject: "Tecnologia",
  hashtag: "#LaunchX",
  tweetsNumbers: "50000",
};

const hashtagTwitter = {
  name: "LaunchX",
};
console.table(userTwitter);
console.table(trendingTopingTwitter);
console.table(hashtagTwitter);

// Facebook Properties

const userFacebook = {
  id: "1",
  name: "Jesus Uriel Robles Vargas",
  age: "24",
  birthday: "08/12/97",
  email: "roblesvargas97@gmail.com",
  picture: "http://image.jpg",
};

const postFacebook = {
  post: "Hola Facebook",
  datePost: "08/12/2022",
  visibility: "public",
  likes: "4",
  comments: "",
  numberOfShare: "4",
};

biographyFacebook = {
  publications: ["Hola", "Hola1"],
  information: {
    birthday: "08/12/97",
    ocupation: "Student",
    phoneNumber: "5534234332",
    residencePlace: "Mexico",
  },
  friends: ["friend1", "friend1", "friend2"],
  pictures: ["image1.jpg", "image2.jpg"],
  videos: [],
  interets: ["Programming , Music"],
};

console.table(userFacebook);
console.table(postFacebook);
console.table(biographyFacebook);
