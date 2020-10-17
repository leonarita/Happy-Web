const Database = require('./db')
const saveOrphanage = require('./saveDatabase')

Database.then(async db => {

    /*
    await saveOrphanage(db, {
        name: 'Lar do Amor',
        description: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

        images: [
            "https://source.unsplash.com/random?id=1",
            "https://source.unsplash.com/random?id=2",
            "https://source.unsplash.com/random?id=3"
        ].toString(),

        lat: "-23.6614778",
        lng: "-46.6568139",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "1"
    })
    */

    const selectedOrphanages = await db.all("SELECT * FROM orphanages;")
    console.log(selectedOrphanages)

    const orphanage = await db.all("SELECT * FROM orphanages WHERE id=3;")
    console.log(orphanage)

    await db.run("DELETE FROM orphanages WHERE id=4")
})

