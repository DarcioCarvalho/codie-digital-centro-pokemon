import { Link } from "../Link";
import { AddressBar, AddressBarSeparator, Description, HeaderContainer, CurrentPage, Title } from "./styles";

interface PageHeaderProps {
  currentPage: string;
  description: string;
}

export function PageHeader({ currentPage, description }: PageHeaderProps) {
  return (
    <HeaderContainer>
      <AddressBar>
        <Link label="Home" size="sm" color="white" href="/" />
        <AddressBarSeparator />
        <CurrentPage>{currentPage}</CurrentPage>
      </AddressBar>

      <Title>
        {currentPage}
      </Title>

      <Description>
        {description}
      </Description>
    </HeaderContainer>
  );
}