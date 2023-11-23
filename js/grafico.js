let ctx = document.getElementsByClassName("line-chart");

let chartGraph = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00"],
  },
});
