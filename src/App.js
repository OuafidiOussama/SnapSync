import {BrowserRouter, Route} from 'react-router-dom'
import routes from './routes';
function App(){
  return (
    <BrowserRouter>
      {routes.map(({path, element})=><Route exact path={path} component={element} />)}
    </BrowserRouter>
  )
}
export default App;
