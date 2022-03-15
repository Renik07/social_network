import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Messages from './components/Messages/Messages';

const App = (props) => {
  return (
		<BrowserRouter>
			<div className={style.app}>
				<Header />
				<Background />
				<div className={style.container}>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/messages/*' element={ <Messages state = {props.state} /* dataM = {props.dataM} */ />} />
					</Routes>

				</div>
			</div>
		</BrowserRouter>

  );
}

export default App;
