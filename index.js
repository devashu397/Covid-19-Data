function worldstats() {
  const url = "https://disease.sh/v3/covid-19/all";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let worldstats = document.getElementById("worldstats");
      worldstats.innerHTML = `Total Cases: ${data.cases.toLocaleString()}<br>Today Cases: ${data.todayCases.toLocaleString()}<br>Total Deaths: ${data.deaths.toLocaleString()}<br>Today Deaths: ${data.todayDeaths.toLocaleString()}<br>Total Recovered: ${data.recovered.toLocaleString()}<br>Today Recovered: ${data.todayRecovered.toLocaleString()}<br>Active Cases: ${data.active.toLocaleString()}<br>Critical Cases: ${data.critical.toLocaleString()}`;
    });
}
