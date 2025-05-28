import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Reports.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Reports() {
  const data = {
    labels: ['WEB Developer', 'Java', 'Python', 'Database', 'Full Stack'],
    datasets: [
      {
        label: 'Enrolled Students',
        data: [12, 19, 8, 15, 10],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Course-wise Enrollment' },
    },
  };

  return (
    <div className='report_container'>
      <h3 className="mb-3">Reports</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Reports;
