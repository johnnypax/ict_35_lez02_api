const studenti = [
    {
        codice: "stud1",
        nome: "Giulia",
        cognome: "Rossi",
        email: "giulia.rossi@example.it",
        corso: "Informatica"
    },
    {
        codice: "stud2",
        nome: "Marco",
        cognome: "Bianchi",
        email: "marco.bianchi@example.it",
        corso: "Ingegneria gestionale"
    },
    {
        codice: "stud3",
        nome: "Andrea",
        cognome: "Conti",
        email: "andrea.conti@example.it",
        corso: "Informatica"
    },
    {
        codice: "stud4",
        nome: "Elena",
        cognome: "Greco",
        email: "elena.greco@example.it",
        corso: "Ingegneria gestionale"
    },
    {
        codice: "stud5",
        nome: "Luca",
        cognome: "Romano",
        email: "luca.romano@example.it",
        corso: "Matematica"
    },
    {
        codice: "stud6",
        nome: "Sofia",
        cognome: "Gallo",
        email: "sofia.gallo@example.it",
        corso: "Economia"
    },
    {
        codice: "stud7",
        nome: "Matteo",
        cognome: "Costa",
        email: "matteo.costa@example.it",
        corso: "Informatica"
    },
    {
        codice: "stud8",
        nome: "Aurora",
        cognome: "Fontana",
        email: "aurora.fontana@example.it",
        corso: "Ingegneria gestionale"
    },
    {
        codice: "stud9",
        nome: "Davide",
        cognome: "Moretti",
        email: "davide.moretti@example.it",
        corso: "Matematica"
    },
    {
        codice: "stud10",
        nome: "Chiara",
        cognome: "Barbieri",
        email: "chiara.barbieri@example.it",
        corso: "Economia"
    },
    {
        codice: "stud11",
        nome: "Lorenzo",
        cognome: "Ricci",
        email: "lorenzo.ricci@example.it",
        corso: "Informatica"
    },
    {
        codice: "stud12",
        nome: "Alice",
        cognome: "Marino",
        email: "alice.marino@example.it",
        corso: "Ingegneria gestionale"
    },
    {
        codice: "stud13",
        nome: "Tommaso",
        cognome: "Leone",
        email: "tommaso.leone@example.it",
        corso: "Matematica"
    },
    {
        codice: "stud14",
        nome: "Beatrice",
        cognome: "Ferri",
        email: "beatrice.ferri@example.it",
        corso: "Economia"
    },
    {
        codice: "stud15",
        nome: "Riccardo",
        cognome: "Caruso",
        email: "riccardo.caruso@example.it",
        corso: "Informatica"
    },
    {
        codice: "stud16",
        nome: "Vittoria",
        cognome: "Lombardi",
        email: "vittoria.lombardi@example.it",
        corso: "Ingegneria gestionale"
    },
    {
        codice: "stud17",
        nome: "Federico",
        cognome: "Santoro",
        email: "federico.santoro@example.it",
        corso: "Matematica"
    },
    {
        codice: "stud18",
        nome: "Ginevra",
        cognome: "Rinaldi",
        email: "ginevra.rinaldi@example.it",
        corso: "Economia"
    },
    {
        codice: "stud19",
        nome: "Samuele",
        cognome: "De Luca",
        email: "samuele.deluca@example.it",
        corso: "Informatica"
    },
    {
        codice: "stud20",
        nome: "Camilla",
        cognome: "Serra",
        email: "camilla.serra@example.it",
        corso: "Ingegneria gestionale"
    },
    {
        codice: "stud21",
        nome: "Pietro",
        cognome: "Colombo",
        email: "pietro.colombo@example.it",
        corso: "Matematica"
    },
    {
        codice: "stud22",
        nome: "Emma",
        cognome: "Villa",
        email: "emma.villa@example.it",
        corso: "Economia"
    }
];

const esami = [
    {
        codice: "esam1",
        nome: "Programmazione",
        data: "20/10/2026",
        corso: "Informatica",
        aula: "Aula 1"
    },
    {
        codice: "esam2",
        nome: "Analisi matematica",
        data: "12/11/2026",
        corso: "Ingegneria gestionale",
        aula: "Aula 2"
    }
];

const iscrizioni = [];

const prossimoCodice = {
    studenti: 23,
    esami: 3,
    iscrizioni: 1
};

module.exports = { studenti, esami, iscrizioni, prossimoCodice };
