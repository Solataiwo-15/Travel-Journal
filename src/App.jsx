import Header from "./components/Header";
import Entry from "./components/Entry"; 
import Data from "./data";

export default function App() {

  const entryElements = Data.map((entry) => {
    return (
      <Entry 
        key = {entry.id}
        entry = {entry}
      />
    )
  })
  
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}

// {...entry}, then go ahead to remove then props(entry) from the Entry component.
// This is a shorthand for props.entry.img.src, props.entry.country, etc.
