import { Page } from "./pages";

export default function App() {
  return (
    <>
    
      {/* Full Page Background Gradient and Blob Effects */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="relative size-full bg-primary">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
          <div className="absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        </div>{" "}
        {/* Main Content */}
        <Page />
      </div>
    </>
  );
}
