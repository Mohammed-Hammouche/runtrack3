function jourtravaille(date) {
    const joursFeries2020 = [
        new Date(2020, 0, 1), new Date(2020, 3, 13), new Date(2020, 4, 1),
        new Date(2020, 4, 8), new Date(2020, 4, 21), new Date(2020, 5, 1),
        new Date(2020, 6, 14), new Date(2020, 7, 15), new Date(2020, 10, 1),
        new Date(2020, 10, 11), new Date(2020, 11, 25)
    ];

    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();

    if (joursFeries2020.some(d => d.getTime() === date.getTime())) {
        console.log(`Le    est un jour férié`);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non,    est un week-end`);
    } else {
        console.log(`Oui,    est un jour travaillé`);
    }
}