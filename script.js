function roll() {
  return Math.ceil(Math.random()*100)
}

function show(id = 1) {
  try {
    return fetch(`https://api.adviceslip.com/advice/${id}`)
      .then((res) => res.json())
      .then((res) => ({
        id: res.slip.id,
        advice: res.slip.advice,
      }));
  } catch (e) {
    console.log("Error!!", e);
  }

  // console.log(result);
}

document.querySelector('.card__dice').addEventListener('click', () => {

  show(roll()).then(res => {
      
      document.querySelector(".card__title").textContent = `Advice #${res.id}`;
      document.querySelector(".card__quote").textContent = `"${res.advice}"`;
  });
})

//call by default
show(117).then(res => {
    
    document.querySelector(".card__title").textContent = `Advice #${res.id}`;
    document.querySelector(".card__quote").textContent = `"${res.advice}"`;
});
