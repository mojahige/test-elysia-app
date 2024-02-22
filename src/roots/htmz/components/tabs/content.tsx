import { TabPanel } from "../tab-panel";

const Container = ({ children }: { children: JSX.Element }) => {
  return <TabPanel id="tabs-demo-panel">{children}</TabPanel>;
};

export const DogContent = () => {
  return (
    <Container>
      <p>
        🐕
        <br />
        Dogs are loyal, playful, social animals, known for their diverse breeds,
        sizes, and roles as companions, workers, and helpers.
      </p>
    </Container>
  );
};

export const CatContent = () => {
  return (
    <Container>
      <p>
        🐈
        <br />
        Cats are independent, curious, and agile animals, famous for their
        grooming habits, diverse breeds, and roles as affectionate companions
        and skilled hunters.
      </p>
    </Container>
  );
};

export const HorseContent = () => {
  return (
    <Container>
      <p>
        🐎
        <br />
        Horses are intelligent, powerful, and social animals, renowned for their
        diverse breeds, strength, speed, and roles in transportation, sports,
        and therapy.
      </p>
    </Container>
  );
};
