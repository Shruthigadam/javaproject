import logo from './logo.svg';
import './App.css';
	import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

	function App() {
  	return (
    	<div>
			<HeaderComponent/>
			<Router>
			<div className='container'>
			<Routes>
            <Route exact path='/' element={<ListEmployeeComponent/>}/>
            <Route path='/employees' element={<ListEmployeeComponent/>}/>
			<Route path="/add-employee" element={<CreateEmployeeComponent/>}/>
			<Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}/>
        </Routes>
			</div>
            </Router>
			<FooterComponent/>
			</div>
	);
	}

	export default App;
