import { StyledContainer } from "../styled/Container.Styled";
import { shad, logoImg, arrowDown } from "../images/images";
import { Shadow, Logo, Title } from "../styled/Container.Styled";
import QA from "./QA";

export default function Container() {
  return (
    <StyledContainer>
      <Shadow src={shad} />
      <Logo src={logoImg} />
      <Title>FAQ</Title>
      <QA />
    </StyledContainer>
  );
}
