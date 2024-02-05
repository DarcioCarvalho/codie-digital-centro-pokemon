import { Button } from "../../../../components/Button";
import { SuccessIcon } from "../../../../components/icons/SuccessIcon";
import { WarningIcon } from "../../../../components/icons/WarningIcon";
import { Text } from "../../../../components/Text";

import { Heading, MessageContainer, MessageText } from "./styles";

interface SchedulingMessageProps {
  type: "Success" | "Warning";
  handleButton: () => void;
  date?: string;
  time?: string;
  amountPokemon?: string;
  message?: string;
}

export function SchedulingMessage({ type, handleButton, date, time, amountPokemon, message }: SchedulingMessageProps) {

  if (type == "Success") {
    const [hour, minute] = String(time).split(":");

    return (
      <MessageContainer>
        <Heading
          style={{ marginBottom: "1.875rem" }}
        >
          Consulta Agendada
        </Heading>

        <SuccessIcon />

        <MessageText
          style={{ marginBlock: "1.25rem" }}
        >
          Seu agendamento para dia {date}, às {hour}h{minute}m,
          <br />
          para {amountPokemon}x pokémons foi realizado com sucesso!
        </MessageText>

        <Button
          label="Fazer Novo Agendamento"
          onClick={handleButton}
        />


      </MessageContainer>
    );
  }

  return (
    <MessageContainer>
      <Heading
        style={{ marginBottom: "1.5rem" }}
      >
        Houve um problema no agendamento
      </Heading>

      <WarningIcon />

      <MessageText
        style={{ marginBlock: "2rem 1.25rem" }}
      >
        {message ? message : "Problema ao registrar o agendamento da consulta"}
      </MessageText>

      <Button
        label="Fazer Novo Agendamento"
        onClick={handleButton}
      />

    </MessageContainer>
  );


}