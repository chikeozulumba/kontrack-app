import { Bar } from 'vue-chartjs'

export default {
  name: 'BarChart',
  extends: Bar,
  props: ['labels', 'dataset'],
  mounted() {
    this.renderChart(
      { labels: this.labels, datasets: this.dataset },
      {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#121f3e',
          bodyFontColor: '#121f3e',
          displayColors: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: true,
              },
              display: false,
            },
          ],
        },
      }
    )
  },
}
