import Button from "./components/Button";
import Container from "./components/Container";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <section className="bg-orange-100 pt-20 skmnf">
        <Container>
          <div className="text-center xl:text-left xl:flex xl:items-center gap-x-48 justify-between ">
            <div className="mx-auto w-full max-w-3xl">
              <h1 className="text-4xl md:text-[56px] lg:text-5xl leading-normal lg:leading-normal font-bold text-primary">
                <span className="text-accent">Studying</span> Online is now much
                easier
              </h1>
              <p className="text-leading text-lg xl:text-xl leading-normal my-6">
                Skilline is an interesting platform that will <br /> teach you
                in more an interactive way.
              </p>

              <div className="flex items-center justify-center gap-10 my-10 xl:justify-start">
                <Button text={"Join for free"} type={"accent"} size />
                <a href="#" className="flex gap-4 items-center text-xl">
                  <span className="h-10 w-10 p-8 rounded-full bg-white inline-flex justify-center items-center">
                    <span>X</span>
                  </span>
                  <span>Watch how it works</span>
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl bg-red-300">
              <div className="bg-white absolute flex items-center gap-4 rounded-md p-4">
                <div>icon</div>
                <div className="grid text-left">
                  <span className="text-lg font-medium">20k</span>
                  <span>Assisted Student</span>
                </div>
              </div>
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
