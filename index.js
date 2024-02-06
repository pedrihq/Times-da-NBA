const conferenciaLeste = [
  {
    nome: "Atlanta Hawks",
    imagem: "./assets/logo-Atlanta_Hawks.png",
    classe: "atlanta_hawks",
  },
  {
    nome: "Boston Celtics",
    imagem: "./assets/logo-Boston_Celtics.png",
    classe: "boston_celtics",
  },
  {
    nome: "Brooklyn Nets",
    imagem: "./assets/logo-Brooklyn_Nets.png",
    classe: "brookliyn_nets",
  },
  {
    nome: "Charlotte Hornets",
    imagem: "assets/logo-Charlotte_Hornets.png",
    classe: "charlotte_hornet",
  },
  {
    nome: "Chicago Bulls",
    imagem: "assets/logo-Chicago_Bulls.png",
    classe: "chicago_bulls",
  },
  {
    nome: "Cleveland Cavaliers",
    imagem: "assets/logo-Cleveland_Cavaliers.png",
    classe: "cleveland_cavalier",
  },
  {
    nome: "Detroit Pistons",
    imagem: "assets/logo-Detroit_Pistons.png",
    classe: "detroit_pistons",
  },
  {
    nome: "Indiana Pacers",
    imagem: "assets/logo-Indiana_Pacers.png",
    classe: "indiana_pacers",
  },
  {
    nome: "Mimi Heat",
    imagem: "assets/logo-Miami_Heat.png",
    classe: "miami_heat",
  },
  {
    nome: "Milwaukee Bucks",
    imagem: "assets/logo-Milwaukee_Bucks.png",
    classe: "milwaukee_bucks",
  },
  {
    nome: "New York Knicks",
    imagem: "assets/logo-New_York_Knicks.png",
    classe: "new_york_knicks ",
  },{
    nome: "Orlando Magic",
    imagem: "assets/logo-Orlando_Magic.png",
    classe: "orlando_magic",
  },{
    nome: "Philadelphia 76ers",
    imagem: "assets/logo-Philadelphia_76ers.png",
    classe: "philadelphia_76ers",
  },{
    nome: "Toronto Raptors",
    imagem: "assets/logo-Toronto_Raptors.png",
    classe: "toronto_raptors",
  },{
    nome: "Washington Wizards",
    imagem: "assets/logo-Washington_Wizards.png",
    classe: "washington_wizards",
  },
];
const conferenciaOeste = [
  {
    nome: "Dallas Mavericks",
    imagem: "./assets/logo-Dallas_Mavericks.png",
    classe: "dallas_mavericks",
  },
  {
    nome: "Denver Nuggets",
    imagem: "./assets/logo-Denver_Nuggets.png",
    classe: "miami_heat",
  },
  {
    nome: "Golden State Warriors",
    imagem: "./assets/logo-Golden_State_Warriors.png",
    classe: "indiana_pacers",
  },
  {
    nome: "Houston Rockets",
    imagem: "assets/logo-Houston_Rockets.png",
    classe: "houston_rockets",
  },
  {
    nome: "Los Angeles Clippers",
    imagem: "assets/logo-Los_Angeles_Clippers.png",
    classe: "los_angeles_clippers",
  },
  {
    nome: "Los Angeles Lakers",
    imagem: "assets/logo-Los_Angeles_Lakers.png",
    classe: "los_angeles_lakers",
  },
  {
    nome: "Memphis Grizzlies",
    imagem: "assets/logo-Memphis_Grizzlies.png",
    classe: "memphis_grizzlies ",
  },
  {
    nome: "Minnesota",
    imagem: "assets/logo-Minnesota_Timberwolves.png",
    classe: "minnesota",
  },
  {
    nome: "New Orleans Pelicans",
    imagem: "assets/logo-New_Orleans_Pelicans.png",
    classe: "new_orleans_pelicans ",
  },
  {
    nome: "Oklahoma City Thunder",
    imagem: "assets/logo-Oklahoma_City_Thunder.png",
    classe: "oklahoma_city_thunder",
  },
  {
    nome: "Phonix Suns",
    imagem: "assets/logo-Phonix_Suns.png",
    classe: "phonix_suns",
  },
  {
    nome: "Portland Trail Blazers",
    imagem: "assets/logo-Portland_Trail_Blazers.png",
    classe: "portland_trail_blazers ",
  },
  {
    nome: "Sacramento Kings",
    imagem: "assets/logo-Sacramento_Kings.png",
    classe: "sacramento_kings",
  },
  {
    nome: "San Antonio Spurs",
    imagem: "assets/logo-San_Antonio_Spurs.png",
    classe: "san_antonio_spurs",
  },
  {
    nome: "Utah Jazz",
    imagem: "assets/logo-Utah_Jazz.png",
    classe: "utah_jazz",
  },
];

const conteudo = document.querySelector("#ecolha_times");
const conferenciaLesteBotao = document.querySelector("#cl");
const conferenciaOesteBotao = document.querySelector("#co");
const tituloPrincipal = document.querySelector("#titulo-principal")

conferenciaLesteBotao.addEventListener("click", () => {
  renderizarLista(conferenciaLeste);
});

conferenciaOesteBotao.addEventListener("click", () => {
  renderizarLista(conferenciaOeste);
});

renderizarLista(conferenciaLeste);

function selecionarItem(itemClicado) {
  var todosOsIntens = document.querySelectorAll(".time_escolhido");
  todosOsIntens.forEach((item) => {
    item.classList.remove("escolhido");
  });
  itemClicado.classList.add("escolhido");
}

function renderizarLista(lista) {
  conteudo.innerHTML = "";
  for (const time of lista) { 
    const moldura = document.createElement("div"); // Cria moldura
    moldura.setAttribute("class", "time_escolhido animacao"); // Seta classes da moldura

    // Adiciona evento de clique
    moldura.addEventListener("click", (e) => {
      document.body.setAttribute("class", time.classe)// Seta classe da cor no body
      selecionarItem(moldura) // Add classe do marcador
      tituloPrincipal.innerText = time.nome; // add nome time a titulo Principal
    });
    
    const imagem = document.createElement("img"); // Cria elemento da imagem
    imagem.setAttribute("src", time.imagem); // Seta imagem
    imagem.setAttribute("class", "times"); // Seta classe time

    const titulo = document.createElement("h2");
    titulo.setAttribute("class", "nomes_times");
    titulo.innerText = time.nome;

    moldura.appendChild(imagem);
    moldura.appendChild(titulo);

    conteudo.appendChild(moldura);
  }
}