import React,{useEffect,useState} from 'react'
import { Line } from 'react-chartjs-2'
import data from "./data.json";


const Chart = () => {

    const [months,setMonths] = useState([]);
    const [amounts , setAmounts] = useState([])
    useEffect(() => {
        var arr = new Array(12);
        arr.fill(0);
        setMonths(['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September' , 'October','November','Decmber']);
        
        for(var i=0;i<data.length;i++)
        {
            var index = data[i].date.split("-")
            arr[parseInt(index[1])-1] += parseInt(data[i].amount);
        }
        
        setAmounts(arr);
    }, [])


return (
    <div>
      <Line
        data={{
          labels: months,
          datasets: [
            {
              label: 'Amount spent',
              data: amounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1.2,
            },
           
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default Chart;