import { StyledContainer } from "../styled/Container.Styled";
import { shad, logoImg, box } from "../images/images";
import { Shadow, Logo, Box } from "../styled/Container.Styled";
import QA from "./QA";

export default function Container() {
  return (
    <StyledContainer>
      <Shadow src={shad} />
      <Logo src={logoImg} />
      <Box src={box} />
      <QA />
    </StyledContainer>
  );
}
