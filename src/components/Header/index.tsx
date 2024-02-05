
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Link } from "../Link";
import { ButtonLogo } from "./ButtonLogo";
import { HeaderContainer, NavBar } from "./styles";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  function handleScheduleAppointment() {
    router.push("/agendar-consulta");
  }

  return (
    <>
      <HeaderContainer>

        <ButtonLogo />

        <NavBar>
          <Link
            label="Quem Somos"
            href="/quem-somos"
          />
          <Button
            label="Agendar Consulta"
            onClick={handleScheduleAppointment}
          />
        </NavBar>

      </HeaderContainer>
    </>
  );
}