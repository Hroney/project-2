import App from './App';
import ClassInformation from './components/ClassInformation';
import Classes from './components/Classes';
import Home from "./components/Home"

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/classes',
                element: <Classes />,
                children: [
                    {
                        path: "/classes/:id",
                        element: <ClassInformation />
                    }
                ]
            }
        ]
    }
]

export default routes;