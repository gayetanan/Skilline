import Button from "./components/Button";
import Card, { cardDetails } from "./components/Card";
import CardContent from "./components/CardContent";
import CardMorphism from "./components/CardMorphism";
import Container from "./components/Container";
import Header from "./components/Header";
import TrustCompanyLogo from "./components/TrustCompanyLogo";

function App() {
  return (
    <>
      <Header />
      <section className="bg-orange-100 pt-20 sk">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
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

              <div className="flex items-center flex-col-reverse md:flex-row justify-center gap-10 my-10 xl:justify-start">
                <Button
                  text={"Join for free"}
                  type={"accent"}
                  size
                  className="w-full md:w-max"
                />
                <a href="#" className="flex gap-4 items-center text-xl">
                  <span className="h-10 w-10 p-8 rounded-full bg-white inline-flex justify-center items-center">
                    <span>X</span>
                  </span>
                  <span>Watch how it works</span>
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl relative ">
              <div className="absolute top-24 -left-12">
                <CardMorphism>
                  <CardContent
                    title={"20k"}
                    detail={"Assisted Student"}
                    img={"/calendar-icon.svg"}
                  />
                </CardMorphism>
              </div>

              <div className="absolute top-96 -left-40">
                <CardMorphism>
                  <CardContent
                    title={"User Experience Class"}
                    detail={"Today at 12.00 PM"}
                    img={"/avatar.png"}
                  />
                  <div className="flex justify-center mt-4">
                    <a
                      href="#"
                      className="bg-pink text-white inline-block rounded-3xl py-4 px-7 text-sm md:text-xl font-semibold"
                    >
                      Join now
                    </a>
                  </div>
                </CardMorphism>
              </div>
              <div className="absolute top-80 -right-20">
                <CardMorphism>
                  <CardContent
                    title={"Congratulations"}
                    detail={"Your admission completed"}
                    img={"/envelop.svg"}
                  />
                </CardMorphism>
              </div>
              <div className="xl:max-w-md mx-auto">
                <img className="w-full" src="/hero-girl-img.png" alt="image" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-leading text-3xl mx-auto inline-block">
                Trusted by 5,000+ Companies Worldwide
              </span>
            </div>
            <div className="flex flex-wrap gap-8 items-center justify-center mt-10 max-w-full md:max-w-5xl mx-auto">
              <TrustCompanyLogo src={"./google.svg"} />
              <TrustCompanyLogo src={"./airbnb.svg"} />
              <TrustCompanyLogo src={"./amazon.svg"} />
              <TrustCompanyLogo src={"./facebook.svg"} />
              <TrustCompanyLogo src={"./grab-logo.svg"} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-2">
                <span className="text-primary">All-In-One </span>
                <span className="text-accent">Cloud Software.</span>
              </h2>
            </div>
            <div className="mt-10">
              <p className="text-leading-300 text-center text-lg xl:text-xl leading-normal max-w-xl xl:max-w-2xl mx-auto">
                Skilline is one powerful online software suite that combines all
                the tools needed to run a successful school or office.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-32 mt-32">
              <Card {...cardDetails[0]} />
              <Card {...cardDetails[1]} />
              <Card {...cardDetails[2]} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default App;
