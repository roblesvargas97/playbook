const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((element) => console.log(element.name));

// Imprime el stack de cada explorer, usa FOR EACH

explorers.forEach((element) => console.log(element.stack));

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

const stackExplorersList = explorers.map((element) => {
  return {
    name: element.name,
    stack: element.stack,
  };
});

console.log(stackExplorersList);

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

const explorersWhoUseJS = stackExplorersList.filter((element) =>
  element.stack.includes("js")
);

console.log(explorersWhoUseJS);

// Busca el primer explorer que sea de la CDMX, usa FIND

console.log(explorers.find((element) => element.city === "CDMX"));

// Obtén la suma de todos los exercises_completed, usa REDUCE

const exercisesCompleted = explorers.reduce((firstValue, secondValue) => {
  return firstValue + secondValue.exercises_completed;
}, 0);

console.log(exercisesCompleted);

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

const explorerExerciseFinished = explorers.some(
  (element) => element.missions.frontend.exercisesFinished
);
console.log(explorerExerciseFinished);

const explorersOnBoardingFinished = explorers.every(
  (element) => element.missions.onboarding.isFinished
);

console.log(explorersOnBoardingFinished);
