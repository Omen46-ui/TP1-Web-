window.onload = () => {
  document.querySelector("header").innerHTML +=
    `<a href="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal">Lien Wikipédia (FR)</a>`;

  const txt = document.getElementById("texte"), btn = document.querySelector("button");
  btn.onclick = () => {
    const v = txt.value.trim().toLowerCase();
    if (v !== "oui" && v !== "non") txt.value = "Il faut mettre Oui ou Non";
  };

  const r = document.querySelectorAll("input[type='radio']");
  [" HP", " Casque", " Bluetooth"].forEach((t, i) => r[i].nextSibling.textContent = t);

  const vol = document.querySelector("input[type='range']"), p = document.createElement("p");
  vol.after(p); vol.max = 100; console.log("Max volume :", vol.max);
  vol.oninput = () => p.textContent = "Volume : " + vol.value;
  r.forEach(x => x.onchange = () => p.textContent = "Volume " + x.nextSibling.textContent.trim() + " : " + vol.value);

  const mute = document.querySelector("input[type='checkbox']");
  mute.previousSibling.textContent = "Muet ";
  mute.onchange = () => vol.disabled = mute.checked;

  const img = document.createElement("img");
  img.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg"; img.width = 200;
  document.querySelector("section").appendChild(img);

  document.querySelector("input[type='date']").onchange = e =>
    console.log("Année :", new Date(e.target.value).getFullYear());


};
