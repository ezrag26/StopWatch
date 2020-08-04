import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

const Time = (milliseconds) => {
  const ms      = milliseconds % 1000
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours   = Math.floor(minutes / 60)
  const days    = Math.floor(hours / 24)

  return {
    ms,
    seconds,
    minutes,
    hours,
    days
  }
}

const LeadingZeros = (num, digits) => {
  let zeros = ''

  while (--digits) {
    zeros += '0'
    if (num < (1 + zeros)) num = '0' + num
  }

  return num
}

const Clock = ({ milliseconds }) => {
  const time = Time(milliseconds)

  const ms      = time.ms
  const seconds = time.seconds % 60
  const minutes = time.minutes % 60
  const hours   = time.hours % 24
  const days    = time.days % 365

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '3em' }}>
        <table border={'solid 1px black'} style={{ textAlign: 'center' }}>
          <tbody>
            <tr>
              <td>{LeadingZeros(days, 3)}</td>
              <td>{LeadingZeros(hours, 2)}</td>
              <td>{LeadingZeros(minutes, 2)}</td>
              <td>{LeadingZeros(seconds, 2)}</td>
              <td>{LeadingZeros(ms, 3)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>DAYS</td>
              <td>HOURS</td>
              <td>MINS</td>
              <td>SECS</td>
              <td>MS</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

const StopWatch = () => {
  const [timestamps, setTimestamps] = useState([])
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  const isEven = (num) => num % 2 === 0

  const addTimestamp = () => { setTimestamps(timestamps.concat(Date.now())) }
  
  const startPauseButtonText = () => isEven(timestamps.length) ? 'Start' : 'Pause'

  const startPauseBackgroundColor = () => isEven(timestamps.length) ? 'green' : 'red'

  const removeAllTimestamps = () => { setTimestamps([]) }

  const start = () => {
    const acc = timestamps.reduce((acc, val, i) => isEven(i) ? acc - val : acc + val, 0)

    setIntervalId(setInterval(() => {
      setTime(acc + Date.now())
    }, 10))
  }

  const pause = () => { clearInterval(intervalId) }

  const reset = () => {
    clearInterval(intervalId)
    setTime(0)
  }

  useEffect(() => {
    if (!isEven(timestamps.length)) start()
    else if (timestamps.length > 0) pause()
    else reset()
  },[timestamps])

  return (
    <>
      <Clock milliseconds={time}/>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '30px' }}>
        <button onClick={addTimestamp} style={{ backgroundColor: startPauseBackgroundColor()}}>{startPauseButtonText()}</button>
        <button onClick={removeAllTimestamps} style={{ backgroundColor: 'lightblue' }}>Reset</button>
      </div>
    </>
  )
}

ReactDOM.render(<StopWatch />, document.querySelector('#root'))