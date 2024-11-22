import { MainStyle, Copo, Section } from "./style";

export default function Home() {
    return (
      <MainStyle>
        <section>
          <h2>Mais que Café</h2>
          <h1>
            Isso é <span>Starbucks</span>
          </h1>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <button>SAIBA MAIS</button>
          <div>
            <img
              src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/amarelo%201.png?raw=true"
              alt="copo pequeno amarelo"
            />
            <img
              src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/vermelho%201.png?raw=true"
              alt="copo pequeno vermelho"
            />
            <img
              src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/laranja%203.png?raw=true"
              alt="copo pequeno laranja"
            />
          </div>
        </section>
        <Section>
          <Copo
            src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/laranja2x%201.png?raw=true"
            alt=""
          />
          <img
            src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/Ellipse%201%20(1).png?raw=true"
            alt=""
          />
        </Section>
      </MainStyle>
    );
}