import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import useFetch from './hooks/useFetch';
import Main from './components/Main';
const URL = 'https://api.github.com/users/alexc957';
function App() {
  const {data, loading, error} = useFetch(URL);

  if(loading){
    return <div>loading...</div>
  }

  if (error){
    return <div>something went wrong</div>
  }

  console.log(data);
  return (
    <div className="page">
      <nav className="navbar"></nav>

      <Header user={data} />

      <Main/>

      <footer className="footer" >Copyright: alexcoronel1995@gmail.com </footer>

    </div>
  );
}

export default App;
