import { useEffect, useState } from "react";
import { PokemonIcon } from "../../icons/PokemonIcon";
import { IconContainer, LogoButton, LogoLabel } from "./styles";
import { useRouter } from "next/router";


export function ButtonLogo() {
  const router = useRouter();
  const isHome = router.asPath === "/";
  const [expandedSize, setExpandedSize] = useState(true);

  function handleHome() {
    if (!isHome) {
      router.push("/");
    }
  }

  function initialRendering() {
    setTimeout(() => setExpandedSize(false), 2000);
  }

  useEffect(() => {
    setExpandedSize(true);
    if (isHome)
      initialRendering();
  }, [isHome]);

  return (
    <LogoButton
      $expandedSize={expandedSize || !isHome}
      $isHome={isHome}
      onClick={handleHome}
    >
      <IconContainer>
        <PokemonIcon />
      </IconContainer>
      <LogoLabel />
    </LogoButton>
  );
}