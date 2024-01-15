import App from './App';
import ClassInformation from './components/ClassInformation';
import Classes from './components/Classes';
import Home from "./components/Home"
import Spells from './components/Spells';
import SpellInformation from './components/SpellInformation';

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
            },
            {
                path: '/spells',
                element: <Spells />,
                children: [
                    {
                        path: "/spells/:id",
                        element: <SpellInformation />
                    }
                ]
            }
        ]
    }
]

export default routes;