const stableName = "Moonlight Horse";
const lateFeeRate = 0.20;
const lateMutiplier = 1 + lateFeeRate

const welcomeMessage = `Welcome to ${stableName}! We hope you enjoy visiting our horses.`;

console.log (welcomeMessage);

// First day

const luna = {
    name: "Luna",
    nickname: "Lulu", 
    favoriteTreat: "Carrots",
    age: 6,
    monthlyRent: 600,
    isInside: true,
    isFriendly: true,
    speed: 8
};

const bella = {
    name: "Bella",
    nickname: "Bells", 
    favoriteTreat: "Apples",
    age: 7,
    monthlyRent: 500,
    isInside: true,
    isFriendly: true,
    speed: 6
};

const coco = {
    name: "Coco",
    nickname: "Coconut", 
    favoriteTreat: "Banana",
    age: 8,
    monthlyRent: 400,
    isInside: true,
    isFriendly: false,
    speed: 5
};

const horses = [luna, bella, coco];

// I will add a new horse 

const daisy = {
    name: "Daisy",
    nickname: "Day", 
    favoriteTreat: "Strawberries",
    age: 4,
    monthlyRent: 550,
    isInside: true,
    isFriendly: false,
    speed: 7
};

horses.push(daisy);

// I will now add hungry and late payment

for (const horse of horses) {
    horse.isHungry = true;
    horse.lateFee = horse.monthlyRent * lateMutiplier;
}

// Available and total of stalls

const totalStalls = 6;

function checkAvailableStalls() {
    const availableStalls = totalStalls - horses.length;

    console.log(`There are ${availableStalls} stalls at ${stableName}.`);
}

checkAvailableStalls();

// Calculate late rent for an individual horse.

function calculateLatePayment(horse) {
  console.log(`${horse.name} owes $${horse.lateFee.toFixed(2)} because the monthly rent is late.`);
}

calculateLatePayment(luna);

// Store a late payment message.

const latePaymentMessage = `${luna.name}'s payment is late. The amount owing is $${luna.lateFee.toFixed(2)}.`;

console.log(latePaymentMessage);

// Return a horse's nickname.

function getNickname(horse) {
  return horse.nickname;
}

const chosenNickname = getNickname(bella);

console.log(`Bella's nickname is ${chosenNickname}.`);

// Day to day operations (Project) //

// Find a horse that likes a particular treat.

const chosenTreat = "Apple";

for (const horse of horses) {
  if (horse.favoriteTreat !== chosenTreat) {
    console.log(`${horse.name} does not like ${chosenTreat}.`);
    continue;
  }

  console.log(`${horse.name} loves ${chosenTreat}!`);
  break;
}

// Check a unique property of each horse.

function checkFriendliness(horse) {
  if (horse.isFriendly) {
    console.log(`${horse.name} is friendly and loves visitors!`);
  } else {
    console.log(`${horse.name} prefers some quiet time.`);
  }
}

for (const horse of horses) {
  checkFriendliness(horse);
}

// Move one or multiple horses outside or inside.

function moveHorses(isDark, ...selectedHorses) {
  for (const horse of selectedHorses) {
    if (isDark && !horse.isInside) {
      horse.isInside = true;
      console.log(`It is getting dark. ${horse.name} has been moved inside.`);
    } else if (!isDark && horse.isInside) {
      horse.isInside = false;
      console.log(`${horse.name} has been moved outside to enjoy the sun!`);
    }
  }
}

// Morning: Move horses outside.

console.log("Good morning! Time to enjoy the sunshine.");

const isMorningDark = false;

moveHorses(isMorningDark, luna, bella, coco, daisy);

// Feed all horses and bring outside horses inside.

function feedHorses(horseList) {
  for (const horse of horseList) {
    if (!horse.isInside) {
      horse.isInside = true;
      console.log(`${horse.name} has been called inside for food.`);
    }

    if (horse.isHungry) {
      console.log(`${horse.name} is eating ${horse.favoriteTreat}.`);
      horse.isHungry = false;
    } else {
      console.log(`${horse.name} is not hungry right now.`);
    }
  }
}

console.log("It is feeding time!");

feedHorses(horses);

// Afternoon: Let some horses outside again.

console.log("Time for some afternoon sunshine!");

moveHorses(false, luna, bella);

// Bedtime: Bring outside horses back inside.

console.log("It is getting dark. Time for bed!");

const isDark = true;

moveHorses(isDark, ...horses);

// Bonus //

// Add a method to each horse that switches its location.

for (const horse of horses) {
  horse.toggleLocation = function () {
    this.isInside = !this.isInside;

    if (this.isInside) {
      console.log(`${this.name} has moved inside.`);
    } else {
      console.log(`${this.name} has moved outside.`);
    }
  };
}

// Test the method.

console.log("Testing the horse location method:");

luna.toggleLocation();
luna.toggleLocation();

// Final stable status.

console.log(`Final status of ${stableName}:`);

for (const horse of horses) {
  const location = horse.isInside ? "Inside" : "Outside";
  const hunger = horse.isHungry ? "Hungry" : "Not hungry";

  console.log(`${horse.name}: ${location}, ${hunger}`);
}