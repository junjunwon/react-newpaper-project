import {Router, Route, Routes } from 'react-router-dom';

import {Contents} from "./pages/contents/contents"
import {Scrab} from "./pages/contents/scrabPage"
import {NotFound} from "./pages/error/NotFound"

const pageRoutes = [
	{path: "/", component: <Contents /> },
	{path: "/scrab", component: <Scrab />}
];

export const pageRouter = () => {
	<Router>
		<Routes>
			{
				pageRoutes.map((route) => {
					<Route
						key={route.path}
						path={route.path}
						element={route.component}
					></Route>
				})
			}
			<Route path="/*" element={<NotFound></NotFound>}></Route>
		</Routes>
	</Router>
}