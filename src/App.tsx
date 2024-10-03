import './App.css';
import Header from './components/Header.tsx';
import Grid from './components/Grid.tsx';
import Sidebar from './components/Sidebar.tsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f1d4b3]">
      <main className="relative h-[636px] w-[972px]">
        <div className="title absolute -top-28 left-1/2 -translate-x-1/2">
          <h1 className="text-[120px] font-bold uppercase tracking-[0.2em] text-black/5">
            TodoApp
          </h1>
        </div>
        <div className="context relative z-[1] grid h-full grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden rounded-[8px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.08)]">
          <Header />
          <Grid />
          <Sidebar />
        </div>
      </main>
      <footer className="mt-2 flex w-[972px] items-start text-[11px] opacity-30">
        <small className="text-[11px]">&copy; 2024. Copyright by Dude.</small>
      </footer>
    </div>
  );
}

export default App;
