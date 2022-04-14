class Repo {
  constructor({
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close,
  }) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close;
  }

  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`;
  }
}

const repoJesusUriel = new Repo({
  name: "LaunchX",
  author: "Jesus Uriel Robles Vargas",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 23,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
});

console.log(repoJesusUriel.getTotalIssues());
console.log(repoJesusUriel.getGeneralInfo());
console.log("------");

class Issue {
  constructor({
    title,
    repositoryNameAssociated,
    status,
    numberOfComments,
    labels,
    author,
    dateCreated,
    lastUpdate,
  }) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdate = lastUpdate;
  }
  getTitleAndAuthor() {
    return `The autor of this respository is ${this.author}`;
  }
  getGeneralInfo() {
    return ` Tittle: ${this.title}, Status: ${this.status}, Labels: ${this.labels}, Author:${this.author}`;
  }
}

const issue = new Issue({
  title: "05 Live 2 Semana 2 [Miércoles 13 de Abril]",
  repositoryNameAssociated: "MissionNodeJS",
  status: "open",
  numberOfComments: "888",
  labels: ["LIVE 2 ", "Semana-2", "PRÓXIMO LIVE"],
  author: "Carlo Gilmar",
  dateCreated: "13/04/2022",
  lastUpdate: "13/04/2022",
});

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
console.log("----");

class PullRequest {
  constructor({
    title,
    brancName,
    dateCreated,
    status,
    repositoryNameAssociated,
  }) {
    this.title = title;
    this.brancName = brancName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
  }
  getStatus() {
    return `Status: ${this.status}`;
  }
  getTitleAndAuthor() {
    return `Pull request: ${this.title}, status: ${this.status}`;
  }
}

const newPR = new PullRequest({
  title: "Añadi nuevas funcionalidades",
  brancName: "Main",
  dateCreated: "13/04/2022",
  status: "Pending",
  repositoryNameAssociated: "Proyecto1",
});

console.log(newPR.getStatus());
console.log(newPR.getTitleAndAuthor());
console.log("-----")