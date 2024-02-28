"use client";
import classes from "./cerere-racordare.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/ui/input/input";
import Field from "@/components/ui/field/field";
import Divider from "@/components/ui/divider/divider";

interface ICerereRacordare extends React.ComponentPropsWithoutRef<"form"> {
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CerereRacordare = (props: ICerereRacordare) => {
  const { setCardOpen } = props;
  return (
    <form {...props} className={classes.form}>
      <Field.FieldSection label="Date personale">
        <Field.FieldSet columnNumber={2}>
          <Field.Field label="Nume">
            <Input placeholder="numele dvs." />
          </Field.Field>
          <Field.Field label="Prenume">
            <Input placeholder="prenumele dvs." />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={1}>
          <Field.Field label="Telefon">
            <Input placeholder="numar telefon" />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={1}>
          <Field.Field label="Email">
            <Input placeholder="email" />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={1}>
          <Field.Field label="Fax">
            <Input placeholder="fax" />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={1}>
          <Field.Field label="Cod Numeric Personal(CNP)">
            <Input placeholder="cod numeric personal" />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={2}>
          <Field.Field label="Serie Carte Identitate">
            <Input placeholder="serie CI" />
          </Field.Field>
          <Field.Field label="Numar Carte Identitate">
            <Input placeholder="numar CI" />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={1}>
          <Field.Field label="Cod IBAN">
            <Input placeholder="IBAN" />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={1}>
          <Field.Field label="Denumire Unitate Bancara">
            <Input placeholder="denumire unitate bancara" />
          </Field.Field>
        </Field.FieldSet>
      </Field.FieldSection>

      <Field.FieldSection label="Adresa domiciliu">
        <Field.FieldSet columnNumber={2}>
          <Field.Field label="Localitate">
            <Input placeholder="localitate" />
          </Field.Field>
          <Field.Field label="Strada">
            <Input placeholder="strada" />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={3}>
          <Field.Field label="Numar strada">
            <Input placeholder="numar strada" />
          </Field.Field>
          <Field.Field label="Bloc">
            <Input placeholder="bloc" />
          </Field.Field>
          <Field.Field label="Scara">
            <Input placeholder="scara" />
          </Field.Field>
        </Field.FieldSet>
        <Field.FieldSet columnNumber={3}>
          <Field.Field label="Apartament">
            <Input placeholder="numar apartament" />
          </Field.Field>
          <Field.Field label="Judet">
            <Input placeholder="judet" />
          </Field.Field>
          <Field.Field label="Cod Postal">
            <Input placeholder="cod postal" />
          </Field.Field>
        </Field.FieldSet>
      </Field.FieldSection>
    </form>
  );
};

export default CerereRacordare;
