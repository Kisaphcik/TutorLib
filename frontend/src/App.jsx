import Header from './components/Header/Header'
import FocusCard from './components/FocusCard/FocusCard'
import Metrics from './components/Metrics/Metrics'

function App() {
  return (<>
    <Header />
    <FocusCard name="Nikita" />
    <Metrics metrics={[
      { title: 'Active students', value: '12', icon: 'students', trend: '+2 this month', trendColor: 'green' },
      { title: 'To review', value: '3', icon: 'review', trend: '1 due today', trendColor: 'red' }, 
      { title: 'Avg. progress', value: '83%', icon: 'progress', trend: '+6 this term', trendColor: 'green' }, 
      { title: 'Hours this week', value: '18.5', icon: 'clock', trend: "4.5h remaining",  trendColor: 'green'}
    ]} />
  </>
  )
}

export default App