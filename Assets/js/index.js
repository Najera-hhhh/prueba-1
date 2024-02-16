var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'KPI',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                lineTension: 0.4,
                pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                pointBorderColor: 'rgba(0, 123, 255, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });