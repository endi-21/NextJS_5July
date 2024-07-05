import { useState } from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './Components/Display';
import SearchUser from './Components/SearchUser';
import Details from './Components/Details';

function App() {

	const [users, setUsers] = useState([]);


	return (
		<>
			<BrowserRouter>

				<Navbar />

				<Routes>
					<Route path="/" element={<Display users={users} setUsers={setUsers} />} />
					<Route path="/details/:username" element={<Details users={users} />} />
					<Route path="/searchPage" element={<SearchUser />} />
					
				</Routes>

			</BrowserRouter>

		</>
	)
}

export default App
