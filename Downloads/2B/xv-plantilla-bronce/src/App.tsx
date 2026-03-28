import HeaderBronce from './components/HeaderBronce';
import CountdownBronce from './components/CountdownBronce';
import GreetingBronce from './components/GreetingBronce';
import DetailsBronce from './components/DetailsBronce';
import GiftTableBronce from './components/GiftTableBronce'; // <-- Lo importamos
import GalleryBronce from './components/GalleryBronce';
import RsvpBronce from './components/RsvpBronce';
import FooterBronce from './components/FooterBronce';

function App() {
  return (
    <div className="w-full min-h-screen bg-rose-50 text-neutral-800 font-sans">
      <HeaderBronce />
      <CountdownBronce />
      <GreetingBronce />
      <DetailsBronce />
      <GiftTableBronce /> {/* <-- Lo colocamos aquí */}
      <GalleryBronce />
      <RsvpBronce />
      <FooterBronce />
    </div>
  )
}

export default App;