import { Doughnut } from 'vue-chartjs'

export default {
  name: 'PieChart',
  extends: Doughnut,
  props: ['labels', 'dataset'],
  mounted() {
    this.renderChart(
      { labels: this.labels, datasets: this.dataset },
      {
        legend: {
          display: false,
        },
        cutoutPercentage: 65,
        responsive: true,
        maintainAspectRatio: false,
      }
    )
  },
}
