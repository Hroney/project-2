import App from './App';
import ClassInformation from './components/ClassInformation';
import Classes from './components/Classes';
import Home from "./components/Home"
import Spells from './components/Spells';
import SpellInformation from './components/SpellInformation';
import Spell from './components/Spell';
import Classform from './components/Classform';
import Party from './components/Party';

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
                        element: <SpellInformation />,
                        children: [
                            {
                                path: "/spells/:id/:id",
                                element: <Spell />,
                            }
                        ]
                    }
                ]
            },
            {
                path: '/pick-a-class',
                element: <Classform />
            },
            {
                path: '/party',
                element: <Party />
            }
        ]
    }
]

export default routes;