// let firstName = prompt("First Name");
// let secondName = prompt("Second Name");

let flames = {
  f: "Friends",
  l: "Lovers",
  a: "Affection",
  m: "Married",
  e: "Emeny",
  s: "Sister",
};

const flames_text = {
  f: function (fn, sn) {
    let texte = `${fn} and ${sn} are supposed to be friends, nothing more, nothing less.
    `;
    return texte;
  },
  l: function (fn, sn) {
    let texte = `${fn} and ${sn} are meant to love each other till the end of times.`;
    return texte;
  },
  a: function (fn, sn) {
    let texte = `${fn} and ${sn} have a special bond and are designed to be affectionate toward one another`;
    return texte;
  },
  m: function (fn, sn) {
    let texte = `${fn} and ${sn} are supposed to enjoy an happy married life.
    `;
    return texte;
  },
  e: function (fn, sn) {
    let texte = `whatever life time it may be ${fn} and ${sn} are meant to be enemies.`;
    return texte;
  },
  s: function (fn, sn) {
    let texte = `${fn} and ${sn} have a close relationship, similar to siblings.`;
    return texte;
  },
};

let text = ["f", "l", "a", "m", "e", "s"];

const comence = function (firstName, secondName) {
  // firstName = "roshan";
  // secondName = "pradhiksha";

  // for (let x = 0; x < 6; x++) {
  //   // console.log(`.${text[x]}`);
  //   document.querySelector(`.${text[x]}`).classList.contains("flames-color")
  //     ? document.querySelector(`.${text[x]}`).classList.remove("flames-color")
  //     : null;
  // }
  console.log(firstName);
  console.log(secondName);

  const phaseOne = function (name) {
    const holder = [...name];
    for (let i = 0; i < holder.length; i++) {
      if (holder[i] === " ") holder.splice(i, 1);
    }
    return holder;
  };
  const phaseTwo = function () {
    for (let i = 0; i < fN.length; i++) {
      for (let j = 0; j < sN.length; j++) {
        if (fN[i] == sN[j]) {
          fN.splice(i, 1);
          sN.splice(j, 1);
          break;
        }
      }
    }
    const Cname = [...fN, ...sN];
    return Cname.length;
  };
  const fN = phaseOne(firstName.toLowerCase());
  const sN = phaseOne(secondName.toLowerCase());
  reqNum = phaseTwo();

  const phaseThree = function () {
    let sp = 0;

    console.log(text);
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < reqNum; i++) {
        //console.log(`${i + 1} in ${sp}`);
        if ((i + 1) % reqNum == 0) {
          text.splice(sp, 1);
          //console.log("break" + sp);
          if (sp != text.length) {
            sp--;
          }
        }
        sp >= text.length - 1 ? (sp = 0) : sp++;
      }
    }
    //console.log(text);
  };

  phaseThree();
  console.log(reqNum);
  console.log(text[0]);

  // document.querySelector(".flames").textContent = flames[text[0]];

  document.querySelector(".flames-text").textContent = flames_text[text[0]](
    firstName,
    secondName
  );
  text = ["f", "l", "a", "m", "e", "s"];
};

document.querySelector(".clickme").addEventListener("click", function () {
  if (
    document.getElementById("firstName").value != "" &&
    document.getElementById("secondName").value != ""
  ) {
    console.log("working");

    comence(
      document.getElementById("firstName").value,
      document.getElementById("secondName").value
    );

    document.querySelector(".flames-card").classList.remove("hidden");
    document.querySelector(".content").classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (
    e.key === "Escape" &&
    !document.querySelector(".flames-card").classList.contains("hidden")
  ) {
    document.querySelector(".flames-card").classList.add("hidden");
    document.querySelector(".content").classList.remove("hidden");
  }
});

document.querySelector(".icon").addEventListener("click", function () {
  // console.log(e.key);

  document.querySelector(".flames-card").classList.add("hidden");
  document.querySelector(".content").classList.remove("hidden");
});

// modal
