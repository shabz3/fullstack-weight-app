import './App.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { AppRouter } from './AppRouter';
import Navbar from './components/Navbar';

import { LoginProvider } from './components/LoginContext';


function App() {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<LoginProvider>
				<div>
					<Navbar />
					<AppRouter />
				</div>
			</LoginProvider>
		</MuiPickersUtilsProvider>
	);
}

export default App;
