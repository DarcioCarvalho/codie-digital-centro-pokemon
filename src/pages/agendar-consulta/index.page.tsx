import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

import { Region } from "../../types/Region";
import { AppointmentSchedulingData } from "../../types/AppointmentSchedulingData";
import { PokemonEntries } from "../../types/PokemonEntries";
import { Pokemon } from "../../types/Pokemon";
import { ErrorMessage } from "../../types/ErrorMessage";
import { SpecificRegion } from "../../types/SpecificRegion";

import { PageHeader } from "../../components/PageHeader";
import { TextInput } from "../../components/Form/TextInput";
import { Select } from "../../components/Form/Select";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { PokemonTeamItems } from "./_components/PokemonTeamItems";
import { SchedulingMessage } from "./_components/SchedulingMessage";

import {
  Form, Heading, Main, DefaultFieldsContainer,
  Separator, OrderContainer, OrderItem, FeeInformationText,
  OrderFooter, OrderTotal
} from "./styles";

import { api } from "../../service/api";
import { usePokemonAPI } from "../../hooks/usePokemonAPI";
import { useGetListToSelect } from "../../hooks/useGetListToSelect";
import { useSchedulingAPI } from "../../hooks/useSchedulingAPI";

import { priceFormat } from "../../helpers/formats";
import { randomIntFromInterval } from "../../helpers/mathUtil";


const AppointmentSchedulingschema = yup.object()
  .shape({
    name: yup.string()
      .required("Nome obrigatório")
      .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s ]*)$/gi,
        "Aceita apenas caracteres alfabéticos e espaços"),
    lastName: yup.string()
      .required("Nome obrigatório")
      .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s ]*)$/gi,
        "Aceita apenas caracteres alfabéticos e espaços"),
    region: yup.string()
      .required("Região obrigatória"),
    city: yup.string()
      .required("Cidade obrigatória"),
    pokemonTeam: yup.array().of(
      yup.object().shape({
        name: yup.string()
          .required("Pokémon obrigatório")
          .min(3, "O nome precisa ter no mínimo 3 letras")
      })
    ).required("Você tem que escolher pelo menos um pokémon"),
    date: yup.string()
      .required('Data de atendimento obrigatório'),
    time: yup.string()
      .required("Horário de atendimento obrigatório")


  }).required();


interface AppointmentSchedulingProps {
  regionsSSR?: Region[];
  errorSSR?: ErrorMessage;
}


export default function AppointmentScheduling({ regionsSSR, errorSSR }: AppointmentSchedulingProps) {
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [regions] = useState<Region[]>(regionsSSR || []);
  const [specificRegion, setSpecificRegion] = useState<SpecificRegion>();
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const [schedulingResult, setSchedulingResult] = useState<"Success" | "Warning" | null>(null);

  const [error, setError] = useState<ErrorMessage | null>(errorSSR || null);


  const { getAvailableDates, getAvailableTimes } = useSchedulingAPI();
  const { getCities, getPokemons } = usePokemonAPI();
  const { regionsList, citiesList, pokemonsList } = useGetListToSelect({ regions, cities: specificRegion?.cities, pokemons });

  const router = useRouter();


  const { register, handleSubmit, control, watch, setValue, reset, formState: { errors, isSubmitting } } = useForm<AppointmentSchedulingData>({
    resolver: yupResolver(AppointmentSchedulingschema),
    shouldFocusError: true,
    defaultValues: {
      pokemonTeam: [
        {
          name: ""
        }
      ],
      serviceValueByPokemon: 70,
      generationalFee: 0,
      subtotalValue: 0,
      totalValue: 0
    }
  });

  const watchAllFields = watch();
  const amountPokemonTeam = (watchAllFields.pokemonTeam?.slice(-1)[0].name == "" ?
    watchAllFields.pokemonTeam.length - 1 :
    watchAllFields.pokemonTeam?.length) as number;

  async function getAvailableDatesAPI() {
    await getAvailableDates()
      .then(response => setAvailableDates(response.data))
      .catch(err => setError({
        status: err.response.status,
        message: "Não foi possível buscar as datas disponíveis."
      }));
  }

  async function getAvailableTimesAPI(date: string) {
    await getAvailableTimes(date)
      .then(response => setAvailableTimes(response.data))
      .catch(err => setError({
        status: err.response.status,
        message: "Não foi possível buscar os horários disponíveis."
      }));
  }

  async function handleCitiesAndPokemonsList(regionName: string) {
    if (regionName) {
      const regionURL = regions?.find(
        region => region.name === regionName)?.url;

      const updateSpecificRegion = async () =>
        getCities(regionURL as string)
          .then(response => response.data)
          .then(data => {
            setSpecificRegion({
              cities: data.locations,
              pokedexesURL: data.pokedexes[0].url
            })
            return data.pokedexes[0].url
          })
          .catch(errorAPI => setError({
            status: errorAPI.response.status,
            message: "Não foi possível buscar os dados das Cidades no servidor!"
          }));

      const updatePokemons = async (pokedexesURL: string) =>
        getPokemons(pokedexesURL)
          .then(response => response.data)
          .then(data => {
            const pokemonEntries = data.pokemon_entries as PokemonEntries[];
            const pokemonList = pokemonEntries.map(pokemonEntry =>
              ({ name: pokemonEntry.pokemon_species.name } as Pokemon));
            setPokemons(pokemonList);
          })
          .catch(errorAPI => setError({
            status: errorAPI.response.status,
            message: "Não foi possível buscar os dados dos Pokémons no servidor!"
          }));


      await updateSpecificRegion()
        .then(async pokedekesURL => await updatePokemons(pokedekesURL));

    }
  }


  const handleCreateAppointmentScheduling: SubmitHandler<AppointmentSchedulingData> = async (values, event) => {
    event?.preventDefault();

    const failureSimulator = randomIntFromInterval(0, 2);

    // Simulando a espera da API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Dados do Formulário:", values);

    if (failureSimulator == 0) {
      setSchedulingResult("Warning");
      console.log("SIMULANDO ERRO NO ENVIO DO AGENDAMENTO...");
    } else {
      setSchedulingResult("Success");
    }
  }

  useEffect(() => {

    getAvailableDatesAPI();
  }, []);

  useEffect(() => {
    function updateOrderValues() {
      const subtotal = (watchAllFields.serviceValueByPokemon as number) * amountPokemonTeam;
      const generationalFee = subtotal * 0.03;
      const total = subtotal + generationalFee;

      setValue("subtotalValue", subtotal);
      setValue("generationalFee", generationalFee);
      setValue("totalValue", total);
    }

    updateOrderValues();

  }, [amountPokemonTeam]);

  return (
    <>
      <Head>
        <title>CodieDigital - Teste Técnico | Agendar Consulta</title>
      </Head>

      <PageHeader
        currentPage="Agendar Consulta"
        description="Recupere seus pokémon em 5 segundos"
      />

      {schedulingResult == "Success" &&
        <SchedulingMessage
          type={"Success"}
          date={watchAllFields.date}
          time={watchAllFields.time}
          amountPokemon={amountPokemonTeam.toString()}
          handleButton={() => {
            reset();
            setSchedulingResult(null);
          }}
        />
      }

      {schedulingResult == "Warning" &&
        <SchedulingMessage
          type={"Warning"}
          handleButton={() => {
            setSchedulingResult(null);
          }}
        />
      }

      {error &&
        <SchedulingMessage
          type={"Warning"}
          message={`Status: ${error.status} - ${error.message}`}
          handleButton={() => router.push("/agendar-consulta")}
        />
      }


      {!schedulingResult && !error &&
        <Main>
          <Heading>Preencha o formulário abaixo para agendar sua consulta</Heading>

          <Form onSubmit={handleSubmit(handleCreateAppointmentScheduling)}>
            <DefaultFieldsContainer>

              <TextInput
                label="Nome"
                placeholder="Digite seu nome"
                error={errors.name?.message}
                {...register("name")}
              />

              <TextInput
                label="Sobrenome"
                placeholder="Digite seu Sobrenome"
                error={errors.lastName?.message}
                {...register("lastName")}
              />

              <Select
                label="Região"
                options={regionsList}
                placeholder={"Selecione sua região"}
                error={errors.region?.message}
                {...register("region", {
                  onChange: async (event) => {
                    const regionName = event.target.value;
                    await handleCitiesAndPokemonsList(regionName);
                  }
                })}
              />

              <Select
                label="Cidade"
                options={citiesList}
                placeholder={"Selecione sua cidade"}
                disabled={!citiesList.length}
                error={errors.city?.message}
                {...register("city")}
              />
            </DefaultFieldsContainer>

            <PokemonTeamItems
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              pokemonsList={pokemonsList}
            />

            <DefaultFieldsContainer>
              <Select
                label="Data para Atendimento"
                options={availableDates}
                placeholder={"Selecione uma data"}
                error={errors.date?.message}
                {...register("date", {
                  onChange: (event) => {
                    const dateSelected = event.target.value;
                    getAvailableTimesAPI(dateSelected);
                  }
                })}
              />

              <Select
                label="Horário de Atendimento"
                options={availableTimes}
                placeholder={"Selecione um horário"}
                error={errors.time?.message}
                {...register("time")}
              />

            </DefaultFieldsContainer>

            <Separator />

            <OrderContainer>
              <OrderItem>
                <Text>Número de pokémons a serem atendidos:</Text>
                <Text>{String(amountPokemonTeam).padStart(2, "0")}</Text>
              </OrderItem>

              <OrderItem>
                <Text>Atendimento unitário por pokémon:</Text>
                <Text>{priceFormat(watchAllFields.serviceValueByPokemon as number)}</Text>
              </OrderItem>

              <OrderItem>
                <Text>Subtotal:</Text>
                <Text>{priceFormat(watchAllFields.subtotalValue as number)}</Text>
              </OrderItem>

              <OrderItem>
                <Text>Taxa geracional*:</Text>
                <Text>{priceFormat(watchAllFields.generationalFee as number)}</Text>
              </OrderItem>

              <FeeInformationText>
                *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%
              </FeeInformationText>
            </OrderContainer>

            <OrderFooter>
              <OrderTotal>
                Valor Total: {priceFormat(watchAllFields.totalValue as number)}
              </OrderTotal>

              <Button
                label={isSubmitting ? "Agendando..." : "Concluir Agendamento"}
                isSubmitting={isSubmitting}
              />
            </OrderFooter>

          </Form>
        </Main>
      }

    </>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {

  try {
    const response = await api.get("https://pokeapi.co/api/v2/region");

    return {
      props: {
        regionsSSR: response.data.results,
      }
    }
  } catch (error) {
    return {
      props: {
        errorSSR: {
          status: 500,
          message: "Não foi possível buscar os dados das Regiões no servidor!"
        }
      }
    }
  }

}