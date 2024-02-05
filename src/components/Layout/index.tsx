import { ReactNode } from "react";
import { Container } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />

      {children}

      <Footer />
    </Container>
  );
}