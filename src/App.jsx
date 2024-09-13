import Container from "./components/Container";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <section className="bg-orange-100 pt-20">
        <Container>
          <div className="text-center xl:text-left xl:flex xl:items-center gap-x-48 justify-between ">
            <div className="mx-auto w-full max-w-2xl">
              <h1 className="text-4xl lg:text-5xl leading-normal lg:leading-normal font-bold text-primary">
                <span className="text-accent">Studying</span> Online is now much
                easier
              </h1>
              <p className="text-leading lg:text-lg xl:text-xl">
                Skilline is an interesting platform that will <br /> teach you
                in more an interactive way.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl">
              <div className="xl:max-w-md mx-auto">
                <img className="w-full" src="/hero-girl-img.png" alt="image" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default App;
