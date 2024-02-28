import CerereRacordare from "@/components/elements/forms/cerere-racordare/cerere-racordare";

const EmptyElement = () => {
  return <div>No element for this type</div>;
};

export const useGetForm = (form: string) => {
  switch (form) {
    case "cerere_racordare":
      return CerereRacordare;
    case "cerere_contract":
      return "cerere contract"
    default:
      return EmptyElement;
  }
};
