

import ChartBar from './ChartBar'

import './Chart.css'

const Chart = (props) =>{

    const values = props.dataPoints.map((datapoint)=>datapoint.value);

    const totalMax = Math.max(...values);

    return <div className="chart">
        {props.dataPoints.map((datapoint)=>(
            <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMax}
            label={datapoint.label}
            />)
        )}
    </div>
}

export default Chart;