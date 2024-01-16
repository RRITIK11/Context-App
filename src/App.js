import { useContext, useEffect } from 'react';
import './App.css';
import { Blogs } from './components/Blogs';
import { Header } from './components/Header';
import { Pageination } from './components/Pageination';
import { AppContext } from './context/AppContext';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return (
    <div className='relative w-screen min-h-screen bg-slate-100 overflow-x-hidden'>
      <Header/>
      <Blogs/>
      <Pageination/>
    </div>
  );
}

export default App;
