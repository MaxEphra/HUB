// Dados dos colaboradores (organizados por Hub)
const contacts = {
  VLO: [
    // Técnicas
    { name: "Beatriz Pereira", phone: "11935025189", gender: "female" },
    { name: "Bianca Aragão", phone: "11935026973", gender: "female" },
    { name: "Crislaine Magna", phone: "22995281381", gender: "female" },
    { name: "Cristiane Miranda", phone: "11935352438", gender: "female" },
    { name: "Geovana Nascimento", phone: "4192442478", gender: "female" },
    { name: "Glauca Dias", phone: "11935026970", gender: "female" },
    { name: "Jhenifer Silva", phone: "11996246020", gender: "female" },
    { name: "Jessica Miranda", phone: "21935001823", gender: "female" },
    { name: "Juliana Fernades", phone: "11932413098", gender: "female" },
    { name: "Kauany", phone: "21935001823", gender: "female" },
    { name: "Katia Ferraz", phone: "11956055468", gender: "female" },
    { name: "Larissa Giovanna de Oliveira Fernandes", phone: "27997219783", gender: "female" },
    { name: "Luciana Dos Santos", phone: "11935025377", gender: "female" },
    { name: "Lourdes Maria", phone: "11935025162", gender: "female" },
    { name: "Luana Rosa", phone: "11996930989", gender: "female" },
    { name: "Luma Neves", phone: "11996806313", gender: "female" },
    { name: "Maria Kelly", phone: "11935026823", gender: "female" },
    { name: "Milena Reis", phone: "21999638337", gender: "female" },
    { name: "Monique Silva Neves", phone: "11935030438", gender: "female" },
    { name: "Rafaella Sousa", phone: "21935003489", gender: "female" },
    { name: "Renata Vieira Claro", phone: "11935025263", gender: "female" },
    { name: "Salete", phone: "11935015586", gender: "female" },
    { name: "Silvana Menezes", phone: "11935030833", gender: "female" },
    { name: "Tamires Venicer", phone: "11943650076", gender: "female" },
    { name: "Tarsila Oliveira", phone: "11996671092", gender: "female" },
    { name: "Taynnara Sales", phone: "11935354731", gender: "female" },
    { name: "Vanessa Ferreira", phone: "11996293310", gender: "female" },
    { name: "Viviane Cristina de Campos", phone: "11920858505", gender: "female" },
    // Motoristas
    { name: "Aldo Belarmino dos Santos", phone: "11988954693", gender: "male" },
    { name: "Daniel Santos do Vale", phone: "11993188898", gender: "male" },
    { name: "Diego Ferreira Cangussu", phone: "11980968550", gender: "male" },
    { name: "Diogo Pereira da Silva", phone: "11954445750", gender: "male" },
    { name: "Emerson de Oliveira Silva", phone: "11956090609", gender: "male" },
    { name: "Guilherme Lima Mesquita", phone: "11966967869", gender: "male" },
    { name: "Lucas Kaique Castro de Souza Tomaz", phone: "11964397665", gender: "male" },
    { name: "Lucas Reginaldo Rabelo", phone: "11977061306", gender: "male" },
    { name: "LUCIANO DOS SANTOS MONTEIRO", phone: "11986677613", gender: "male" },
    { name: "MARCO ANTONIO IRINEU JUNIOR", phone: "11967443476", gender: "male" },
    { name: "KAUE FERREIRA DOS REIS", phone: "11961374862", gender: "male" },
    { name: "HELIO DO NASCIMENTO TAVARES", phone: "11914615351", gender: "male" },
    { name: "IRVIN IRVIGNI GOMES DA SILVA", phone: "11952614730", gender: "male" },
    { name: "JEFFERSON FERREIRA LIMA", phone: "11988661795", gender: "male" },
    { name: "JEFFERSON LEOCASSIO SILVA DO CARMO", phone: "11964484540", gender: "male" },
    { name: "Michel Francisco Faustino", phone: "11989036729", gender: "male" },
    { name: "Marcos Paulo da Rocha Rodrigues", phone: "11994708473", gender: "male" },
    { name: "Rafael Silva Santos", phone: "11985545658", gender: "male" },
    { name: "Rodrigo da Silva Santos", phone: "11961529002", gender: "male" },
    { name: "Rogerio Papiani", phone: "11974492377", gender: "male" },
    { name: "ROGERIO DE JESUS MORAIS", phone: "11949859495", gender: "male" },
    { name: "Rogério Santos Silva", phone: "11995558817", gender: "male" },
    { name: "Vinicius Gomes da Silva", phone: "11941363008", gender: "male" },
    { name: "Vinicius Santana Souza", phone: "11964616842", gender: "male" },
    { name: "Vitor Arimatheia de Souza", phone: "11976127940", gender: "male" },
    { name: "Gustavo Barbosa Souza", phone: "11985517122", gender: "male" },
    { name: "Luiz Henrique", phone: "11958566868", gender: "male" },
    { name: "Vitoria Laís Souza da Silva", phone: "21935003489", gender: "female" },
  ],
  Alpha: [
    // Motoristas
    { name: "Adilson Alves", phone: "11979756939", gender: "male" },
    { name: "Anderson Silva Matos", phone: "11985264126", gender: "male" },
    { name: "Benjamin Ferreira", phone: "11947576826", gender: "male" },
    { name: "Bruno Gomes da Silva", phone: "11981804127", gender: "male" },
    { name: "Elias Ferrira", phone: "11991791409", gender: "male" },
    { name: "Geovane da Silva Santos", phone: "11939352220", gender: "male" },
    { name: "Ivan Silva Cardoso", phone: "11914744775", gender: "male" },
    { name: "Rosivaldo dos Santos", phone: "11973756059", gender: "male" },
    // Técnicas
    { name: "Agatha Pereira Borges", phone: "11935010282", gender: "female" },
    { name: "ADRIANA AMORIM RODRIGUES", phone: "11935354757", gender: "female" },
    { name: "Caroline de Carvalho", phone: "11935015594", gender: "female" },
    { name: "Danielle Soares Diogo", phone: "21996460515", gender: "female" },
    { name: "Damiana Aparecida", phone: "11935025264", gender: "female" },
    { name: "Gisele Jeangros", phone: "21935001647", gender: "female" },
    { name: "Graciele Porto", phone: "11934922240", gender: "female" },
    { name: "Livian Santos", phone: "11942707017", gender: "female" },
    { name: "Luana de Holanda", phone: "11952808978", gender: "female" },
    { name: "Maria Luiza Papa Gomes", phone: "11935030444", gender: "female" },
    { name: "Patrícia De Oliveira", phone: "11935030888", gender: "female" },
    { name: "Sâmela Kethellyn", phone: "11996382440", gender: "female" },
    { name: "Stefany Souza Alves", phone: "11935015575", gender: "female" },
    { name: "THAIS BALDAN RIBAS", phone: "11996718710", gender: "female" },
    { name: "Beatriz Vieira", phone: "11935010110", gender: "female" },
  ],
  TTP: [
    // Motoristas
    { name: "ARNALDO DA SILVA", phone: "11993315245", gender: "male" },
    { name: "CLEZIO DA CONCEIÇÃO ARAUJO DIAS", phone: "11977022904", gender: "male" },
    { name: "DEILSON TIAGO MARCELINO", phone: "11970168771", gender: "male" },
    { name: "DIEGO MACIEL SANCHES", phone: "11975740838", gender: "male" },
    { name: "EDINEI SANTANA DOS SANTOS", phone: "11967010081", gender: "male" },
    { name: "FRANCISCO STEFFERSON ROCHA", phone: "11958023995", gender: "male" },
    { name: "HELIO QUIXABA DE OLIVEIRA JUNIOR", phone: "11967090545", gender: "male" },
    { name: "JACKSON SANTOS", phone: "11964509438", gender: "male" },
    { name: "JAIR RODRIGUES PINTO JUNIOR", phone: "11940021451", gender: "male" },
    { name: "LUCAS NUNES TEREZA", phone: "11954867981", gender: "male" },
    { name: "VICTOR HUGO SILVA", phone: "11982476125", gender: "male" },
    { name: "JOHNNATA APARECIDO GOMES", phone: "11981913268", gender: "male" },
    { name: "ALEXANDER DIOGO MORENO SANTOS SILVA", phone: "11986567920", gender: "male" },
    { name: "JAIRO MARQUES DA SILVA", phone: "11985209973", gender: "male" },
    // Técnicas
    { name: "ALESSANDRA BERALDO", phone: "11937032658", gender: "female" },
    { name: "ANA CAROLINE SOARES GOMES", phone: "11935020518", gender: "female" },
    { name: "CLERI VALERIA SOARES", phone: "11971162400", gender: "female" },
    { name: "JENYFFER APARECIDA MORILLAS BRITO", phone: "19971649727", gender: "female" },
    { name: "JESSICA MARIA DA SILVA", phone: "11996391658", gender: "female" },
    { name: "KAREN CAMPOI ELIAS", phone: "11935020474", gender: "female" },
    { name: "KAREN REGINA DA SILVA", phone: "11935025062", gender: "female" },
    { name: "LEILA PEREIRA SILVA", phone: "11996666470", gender: "female" },
    { name: "LILIANE FERREIRA DE LUCENA MELO", phone: "11935026679", gender: "female" },
    { name: "TAINARA CALDAS SOUZA", phone: "27998896775", gender: "female" },
    { name: "TALITA CRISTINA DE OLIVEIRA LEMOS FERNANDES", phone: "11935025114", gender: "female" },
    { name: "VIVIANE ALVES DOS SANTOS", phone: "11935352738", gender: "female" },
    { name: "MELISSA LILITH DE SOUZA ROMÃO", phone: "11935030578", gender: "female" },
    { name: "ELISANGELA GONÇALVES DA SILVA", phone: "11935352797", gender: "female" },
  ],
  SBC: [
    // Motoristas
    { name: "Alberto Santana", phone: "11930146903", gender: "male" },
    { name: "Claudiomar Celestino", phone: "11970277929", gender: "male" },
    { name: "Clayton Alves", phone: "11980895022", gender: "male" },
    { name: "Fabrizio Souza", phone: "11934389033", gender: "male" },
    { name: "Fagner Oliveira", phone: "11951478442", gender: "male" },
    { name: "Gilson Miranda", phone: "11976582026", gender: "male" },
    { name: "Guilherme Barboza", phone: "11978060431", gender: "male" },
    { name: "Jorge Jesus", phone: "11983902036", gender: "male" },
    { name: "Leandro Ferreira", phone: "11963595032", gender: "male" },
    { name: "Lucas Tadeu", phone: "11947709340", gender: "male" },
    { name: "Manuel da Silva", phone: "11982123151", gender: "male" },
    { name: "Muller Vieira", phone: "11988106930", gender: "male" },
    { name: "Pedro Yvo", phone: "11938004207", gender: "male" },
    { name: "Renê Gomes", phone: "11987884690", gender: "male" },
    { name: "Romário Gama", phone: "11940758371", gender: "male" },
    { name: "Vinicius Gabriel", phone: "11978745402", gender: "male" },
    { name: "Wesley Santana", phone: "11959374288", gender: "male" },
    { name: "Welington Arten", phone: "11997279772", gender: "male" },
    // Técnicas
    { name: "Ana Paula", phone: "21967774013", gender: "female" },
    { name: "Beatriz Silva", phone: "21935001697", gender: "female" },
    { name: "Daiane Cristina Campos", phone: "219995624455", gender: "female" },
    { name: "Elaine Vioto", phone: "219996024076", gender: "female" },
    { name: "Gabrielle Souza", phone: "11935029057", gender: "female" },
    { name: "Glauca Dias", phone: "11935026970", gender: "female" },
    { name: "Jaqueline Alves", phone: "11961963737", gender: "female" },
    { name: "Joyce Sanches", phone: "11937393980", gender: "female" },
    { name: "Julia Velloso", phone: "11935020475", gender: "female" },
    { name: "Larissa Giovanna", phone: "27997219783", gender: "female" },
    { name: "Laryssa Cardoso", phone: "21997773025", gender: "female" },
    { name: "Letícia Gomes Barroso", phone: "11932929902", gender: "female" },
    { name: "Luana Vieira", phone: "21998399019", gender: "female" },
    { name: "Mayara Gonçalves", phone: "11935354940", gender: "female" },
    { name: "Patrícia Dias", phone: "11935352857", gender: "female" },
    { name: "Raquel Alves", phone: "19999887979", gender: "female" },
    { name: "Renata Carvalho", phone: "11912911937", gender: "female" },
    { name: "Rosana Rosa Dias", phone: "11935352600", gender: "female" },
  ],
};

// Função para capitalizar nomes
function capitalizeName(name) {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Função para carregar os contatos
function loadContacts(hub = "all", search = "") {
  const contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = ""; // Limpa a lista

  let allContacts = [];
  if (hub === "all") {
    // Combina todos os contatos de todos os Hubs, incluindo a sigla do Hub
    allContacts = Object.entries(contacts).flatMap(([hubSigla, colaboradores]) =>
      colaboradores.map((colaborador) => ({ ...colaborador, hubSigla }))
    );
  } else {
    // Filtra por Hub selecionado e adiciona a sigla do Hub
    allContacts = (contacts[hub] || []).map((colaborador) => ({
      ...colaborador,
      hubSigla: hub,
    }));
  }

  // Filtra por nome (se houver pesquisa)
  if (search) {
    allContacts = allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Separa Técnicas e Motoristas
  const tecnicas = allContacts
    .filter((contact) => contact.gender === "female")
    .sort((a, b) => a.name.localeCompare(b.name)); // Ordena Técnicas alfabeticamente

  const motoristas = allContacts
    .filter((contact) => contact.gender === "male")
    .sort((a, b) => a.name.localeCompare(b.name)); // Ordena Motoristas alfabeticamente

  // Adiciona Técnicas à lista
  tecnicas.forEach((contact) => {
    const button = document.createElement("button");
    button.className = "contact-button tecnicas"; // Classe para Técnicas
    button.innerHTML = `<span>${capitalizeName(contact.name)}</span> - Técnica (${contact.hubSigla})`;
    button.addEventListener("click", () => {
      window.open(`https://wa.me/55${contact.phone}`, "_blank");
    });
    contactsList.appendChild(button);
  });

  // Adiciona Motoristas à lista
  motoristas.forEach((contact) => {
    const button = document.createElement("button");
    button.className = "contact-button motoristas"; // Classe para Motoristas
    button.innerHTML = `<span>${capitalizeName(contact.name)}</span> - Motorista (${contact.hubSigla})`;
    button.addEventListener("click", () => {
      window.open(`https://wa.me/55${contact.phone}`, "_blank");
    });
    contactsList.appendChild(button);
  });
}

// Evento de mudança no seletor de Hub
document.getElementById("hubSelector").addEventListener("change", (e) => {
  const searchTerm = document.getElementById("searchInput").value.trim();
  loadContacts(e.target.value, searchTerm);
});

// Evento de digitação no campo de pesquisa
document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.trim();
  const selectedHub = document.getElementById("hubSelector").value;
  loadContacts(selectedHub, searchTerm);
});

// Carrega todos os contatos ao iniciar
loadContacts();
