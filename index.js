import express from "express";

const app = express();

const hoje = new Date();
console.log(hoje.toLocaleDateString()); // 1/1/2022

app.get("/holidays", (req, res) => {
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "4/17/2022", name: "Páscoa" },
        { date: "4/21/2022", name: "Tiradentes" },
        { date: "5/1/2022", name: "Dia do trabalho" },
        { date: "6/16/2022", name: "Corpus Christi" },
        { date: "9/7/2022", name: "Independência do Brasil" },
        { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
        { date: "11/2/2022", name: "Finados" },
        { date: "11/15/2022", name: "Proclamação da República" },
        { date: "12/25/2022", name: "Natal" }
      ];
    res.send(holidays);
})

app.get("/is-today-holiday", (req, res) => {
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "4/17/2022", name: "Páscoa" },
        { date: "4/21/2022", name: "Tiradentes" },
        { date: "5/1/2022", name: "Dia do trabalho" },
        { date: "6/16/2022", name: "Corpus Christi" },
        { date: "9/7/2022", name: "Independência do Brasil" },
        { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
        { date: "11/2/2022", name: "Finados" },
        { date: "11/15/2022", name: "Proclamação da República" },
        { date: "12/25/2022", name: "Natal" }
      ];


    
      const result = holidays.find(dia => dia.date === hoje);
      
      if(result === undefined){
        res.send("Não, hoje não é feriado");
      }else{
        res.send(`Sim, hoje é ${result.name}`);
      }
      
})



app.listen(4000);

