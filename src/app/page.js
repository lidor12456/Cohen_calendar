"use client";
import PersonCard from "@/components/PersonCard";
import { PERSONS } from "@/constants/PERSONS";

export default function Home() {
  return (
    <>
      {PERSONS.map((person) => (
        <PersonCard person={person} key={Number(person.id)} />
      ))}
    </>
  );
}
