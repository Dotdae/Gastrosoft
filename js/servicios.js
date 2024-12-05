let chart; // Variable global para la gráfica

function calculateRecovery() {
  // Obtener los valores ingresados por el usuario
  const investment = parseFloat(document.getElementById('investment').value);
  const years = parseInt(document.getElementById('years').value);

  // Validar los campos
  if (isNaN(investment) || isNaN(years) || investment <= 0 || years <= 0) {
    document.getElementById('output').innerText = "Por favor, ingresa valores válidos.";
    return;
  }

  // Calcular la recuperación anual uniforme
  const annualRecovery = investment / years; // Monto recuperado cada año
  const labels = []; // Años
  const data = [];   // Cantidad acumulada recuperada
  let totalRecovered = 0;

  for (let year = 1; year <= years; year++) {
    totalRecovered += annualRecovery; // Incrementar la cantidad recuperada
    labels.push(`Año ${year}`);
    data.push(totalRecovered.toFixed(2)); // Guardar el monto acumulado con 2 decimales
  }

  // Mostrar el resultado final
  document.getElementById('output').innerText = `Se recuperará $${annualRecovery.toFixed(2)} cada año. En ${years} años, habrás recuperado $${investment.toFixed(2)}.`;

  // Crear o actualizar la gráfica
  updateChart(labels, data);
}

function updateChart(labels, data) {
  const ctx = document.getElementById('recoveryChart').getContext('2d');

  // Destruir la gráfica anterior si ya existe
  if (chart) {
    chart.destroy();
  }

  // Crear una nueva gráfica
  chart = new Chart(ctx, {
    type: 'line', // Tipo de gráfica
    data: {
      labels: labels, // Años
      datasets: [{
        label: 'Dinero Recuperado Acumulado ($)',
        data: data, // Monto acumulado recuperado
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `$${tooltipItem.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Años'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Monto Recuperado ($)'
          },
          beginAtZero: true
        }
      }
    }
  });
}

