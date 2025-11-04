import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardHeader } from './components/DashboardHeader'; 
import { DashboardPage } from './components/DashboardPage';
import { FiMenu } from 'react-icons/fi'; 

function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen bg-brand-gray-100">
        
        {/* --- 1. Desktop Sidebar --- */}
        <Sidebar className="hidden md:flex" />

        {/* --- 2. Main content area --- */}
        <div className="flex-grow flex flex-col">
          
          {/* --- 3. Desktop Header --- */}
          <div className="hidden md:block">
            <DashboardHeader />
          </div>

          {/* --- 4. Mobile Header --- */}
          <div className="md:hidden bg-white shadow-card rounded-lg p-4 m-4 flex justify-between items-center">
            <button 
              onClick={() => setIsMobileSidebarOpen(true)} 
              className="text-brand-gray-700 p-2 -ml-2"
              aria-label="Open sidebar"
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <div className="text-right">
              <h1 className="text-lg font-semibold text-brand-gray-900">Welcome back, Olivia</h1>
              <p className="text-xs text-brand-gray-400">Manage your vendor security.</p>
            </div>
          </div>
          
          {/* --- 5. Page Content (Widgets) --- */}
          <main className="flex-grow p-4 pt-0 md:p-8 md:pt-0">
            <DashboardPage />
          </main>

        </div>
      </div>

      {/* --- 6. Mobile Sidebar (Overlay) --- */}
      {isMobileSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
            aria-hidden="true"
          ></div>
          
          {/* Mobile Sidebar */}
          <Sidebar 
            className="flex fixed inset-y-0 left-0 z-50 md:hidden" 
          />
        </>
      )}
    </>
  );
}

export default App;