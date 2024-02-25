import Forms from "@/components/elements/forms/forms";

const EmptyElement = () => {
  return <div>No element for this type</div>;
};

export const useGetForm = (formTitle: string) => {
  switch (formTitle) {
    case "form_one":
      return Forms.Form_One;
    default:
      return EmptyElement;
  }
};
