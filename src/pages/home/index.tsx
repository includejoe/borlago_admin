import HomeCard from "@/src/components/homeCard";
import { PageContainer } from "@layouts/dashboardLayout/styles";
import { CardContainer } from "./styles";

const HomePage = () => {
  return (
    <PageContainer>
      <CardContainer>
        <HomeCard to="/" type={1} />
        <HomeCard to="/collector-units/" type={2} />
      </CardContainer>
      <CardContainer>
        <HomeCard to="/" type={3} />
        <HomeCard to="/" type={4} />
      </CardContainer>
      <CardContainer></CardContainer>
    </PageContainer>
  );
};

export default HomePage;
