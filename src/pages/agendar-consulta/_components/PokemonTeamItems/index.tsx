import { Control, FieldErrors, UseFormRegister, UseFormWatch, useFieldArray } from "react-hook-form";

import { AppointmentSchedulingData } from "../../../../types/AppointmentSchedulingData";
import { Select } from "../../../../components/Form/Select";

import {
  ButtonAddPokemon, ButtonDeletePokemon, NavBarPokemonTeam,
  PlusIconButton, PokemonTeamContainer, PokemonTeamHeading,
  PokemonTeamInfo, PokemonTeamItem
} from "./styles";

interface PokemonTeamItemsProps {
  register: UseFormRegister<AppointmentSchedulingData>;
  errors: FieldErrors<AppointmentSchedulingData>;
  control: Control<AppointmentSchedulingData, any, AppointmentSchedulingData>;
  watch: UseFormWatch<AppointmentSchedulingData>;
  pokemonsList: string[];
}

export function PokemonTeamItems({ register, errors, control, watch, pokemonsList }: PokemonTeamItemsProps) {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "pokemonTeam",
    rules: {
      maxLength: 6
    }
  });

  const watchFields = watch("pokemonTeam");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFields[index]
    };
  })

  function addItem() {
    append({
      name: ""
    });
  }

  function deleteItem() {
    if (controlledFields.length == 1) {
      update(0, { name: "" });
      return
    }

    remove(fields.length - 1);
  }

  return (
    <PokemonTeamContainer>
      <PokemonTeamHeading>
        Cadastre seu time
      </PokemonTeamHeading>

      <PokemonTeamInfo>
        Atendemos até 06 pokémons por vez
      </PokemonTeamInfo>

      <PokemonTeamItem>

        {controlledFields.map((pokemon, index) =>
          <Select
            key={pokemon.id}
            label={`Pokémon 0${index + 1}`}
            options={pokemonsList}
            placeholder={"Selecione seu pokémon"}
            disabled={!pokemonsList.length}
            labelDirection="row"
            error={errors.pokemonTeam?.[index]?.name?.message}
            {...register(`pokemonTeam.${index}.name`)}
          />
        )}

        <NavBarPokemonTeam>
          <ButtonAddPokemon
            disabled={controlledFields.length >= 6 || controlledFields.slice(-1)[0].name == ""}
            type="button"
            onClick={addItem}
          >
            Adiciona novo pokémon ao time...
            <PlusIconButton />
          </ButtonAddPokemon>

          <ButtonDeletePokemon
            aria-disabled={controlledFields[0].name == ""}
            onClick={deleteItem}
          >
            Remove Pokémon
          </ButtonDeletePokemon>
        </NavBarPokemonTeam>

      </PokemonTeamItem>

    </PokemonTeamContainer>
  );
}