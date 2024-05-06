import DashboardPage from './Components/Dashboard/DashboardPage';
import SideBar from './Components/Sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <div className='flex'>
        <SideBar />
        <DashboardPage />
      </div>
    </div>
  );
}

export default App;
