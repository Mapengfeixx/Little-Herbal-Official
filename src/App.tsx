import { useState } from 'react';
import Login from './views/Login';
import Home from './views/Home';
import AiUpload from './views/AiUpload';
import AiResult from './views/AiResult';
import AiResult2 from './views/AiResult2';
import AiResult3 from './views/AiResult3';
import AiResult4 from './views/AiResult4';
import AiResult5 from './views/AiResult5';
import AiResult6 from './views/AiResult6';
import AiResult7 from './views/AiResult7';
import AiAssistant from './views/AiAssistant';
import Atlas from './views/Atlas';
import Library from './views/Library';
import Reader from './views/Reader';
import Games from './views/Games';
import GameLevel from './views/GameLevel';
import GameSuccess from './views/GameSuccess';

import Profile from './views/Profile';

export default function App() {
  const [currentView, setCurrentView] = useState<string>("login");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  return (
    <div className="w-full h-full min-h-screen">
      {currentView === "login" && <Login navigate={setCurrentView} />}
      {currentView === "home" && <Home navigate={setCurrentView} />}
      {currentView === "upload" && <AiUpload navigate={setCurrentView} uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />}
      {currentView === "result" && <AiResult navigate={setCurrentView} uploadedImage={uploadedImage} />}
      {currentView === "result2" && <AiResult2 navigate={setCurrentView} uploadedImage={uploadedImage} />}
      {currentView === "result3" && <AiResult3 navigate={setCurrentView} uploadedImage={uploadedImage} />}
      {currentView === "result4" && <AiResult4 navigate={setCurrentView} uploadedImage={uploadedImage} />}
      {currentView === "result5" && <AiResult5 navigate={setCurrentView} uploadedImage={uploadedImage} />}
      {currentView === "result6" && <AiResult6 navigate={setCurrentView} uploadedImage={uploadedImage} />}
      {currentView === "result7" && <AiResult7 navigate={setCurrentView} uploadedImage={uploadedImage} />}
      {currentView === "atlas" && <Atlas navigate={setCurrentView} />}
      {currentView === "library" && <Library navigate={setCurrentView} />}
      {currentView.startsWith("reader:") && <Reader navigate={setCurrentView} bookId={currentView.split(":", 2)[1]} />}
      {currentView === "games" && <Games navigate={setCurrentView} />}
      {currentView === "helper" && <AiAssistant navigate={setCurrentView} />}
      {currentView === "profile" && <Profile navigate={setCurrentView} />}
      {currentView.startsWith("games:level:") && <GameLevel navigate={setCurrentView} level={parseInt(currentView.split(":", 3)[2])} />}
      {currentView === "games:success" && <GameSuccess navigate={setCurrentView} />}
    </div>
  );
}
