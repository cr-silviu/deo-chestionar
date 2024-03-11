"use client";
import classes from "./cerere-racordare.module.scss";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "@/components/ui/input/input";
import { FieldSection, FieldSet, Field } from "@/components/ui/field/field";
import Label from "@/components/ui/label/label";
import PowerCalculator from "@/components/power-calculator/power-calculator";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group/radio-group";
import OtherHouseholdDependencties from "@/components/other-household-dependencies/other-household-dependencies";

interface ICerereRacordare extends React.ComponentPropsWithoutRef<"form"> {
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IForm {}
const CerereRacordare = (props: ICerereRacordare) => {
  const { setCardOpen } = props;
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      CNP: "",
      IBAN: "",
      apartamentAC: "",
      apartamentLC: "",
      blocAC: "",
      blocDomiciliu: "",
      blocLC: "",
      codPostalAC: "",
      codPostalDomiciliu: "",
      codPostalLC: "",
      email: "",
      fax: "",
      judetAC: "",
      judetDomiciliu: "",
      judetLC: "",
      localitateAC: "",
      localitateDOmiciliu: "",
      localitateLC: "",
      numarApartamentDomiciliu: "",
      numarCI: "",
      numarStradaAC: "",
      numarStradaDomiciliu: "",
      numarStradaLC: "",
      nume: "",
      numeBanca: "",
      prenume: "",
      scaraAC: "",
      scaraDomiciliu: "",
      scaraLC: "",
      scopulSolicitarii: "lc_nou",
      serieCI: "",
      stradaAC: "",
      stradaDomiciliu: "",
      stradaLC: "",
      telefon: "",
      tipBransament: "monofazat",
      punctReincarcareVehiculeElectrice:"NU",
      numarPuncteReincarcareVehiculeElectrice:null,
      putereInstalataEchipamentReincarcare:null,
      putereMaxismAbsorbitaSimultan:null,
      tipStatieReincarcare:"incarcare_lenta"
    },
  });

  console.log(watch());

  const handleTipBransament = (value: string) => {
    setValue("tipBransament", value);
  };

  const handleScopSolicitare = (value: string) => {
    setValue("scopulSolicitarii", value);
    setValue("punctReincarcareVehiculeElectrice", "NU")
  };

  const hanldlePunctReincarcareVehiculeElectrivce = (value:string)=>{
    setValue("punctReincarcareVehiculeElectrice", value)
  }

  const handleTipStatieReincarcare=(value:string)=>{
    setValue("tipStatieReincarcare", value)
  }

  return (
    <form {...props} className={classes.form}>
      <FieldSection label="Date personale">
        <FieldSet columnNumber={2}>
          <Field label="Nume">
            <Input placeholder="numele dvs." control={control} name="nume" />
          </Field>
          <Field label="Prenume">
            <Input
              placeholder="prenumele dvs."
              control={control}
              name="prenume"
            />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={1}>
          <Field label="Telefon">
            <Input
              placeholder="numar telefon"
              control={control}
              name="telefon"
            />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={1}>
          <Field label="Email">
            <Input placeholder="email" control={control} name="email" />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={1}>
          <Field label="Fax">
            <Input placeholder="fax" control={control} name="fax" />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={1}>
          <Field label="Cod Numeric Personal(CNP)">
            <Input
              placeholder="cod numeric personal"
              control={control}
              name="CNP"
            />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={2}>
          <Field label="Serie Carte Identitate">
            <Input placeholder="serie CI" control={control} name="serieCI" />
          </Field>
          <Field label="Numar Carte Identitate">
            <Input placeholder="numar CI" control={control} name="numarCI" />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={1}>
          <Field label="Cod IBAN">
            <Input placeholder="IBAN" control={control} name="IBAN" />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={1}>
          <Field label="Denumire Unitate Bancara">
            <Input
              placeholder="denumire unitate bancara"
              control={control}
              name="numeBanca"
            />
          </Field>
        </FieldSet>
      </FieldSection>

      <FieldSection label="Adresa domiciliu">
        <FieldSet columnNumber={2}>
          <Field label="Localitate">
            <Input
              placeholder="localitate"
              control={control}
              name="localitateDOmiciliu"
            />
          </Field>
          <Field label="Strada">
            <Input
              placeholder="strada"
              control={control}
              name="stradaDomiciliu"
            />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={3}>
          <Field label="Numar strada">
            <Input
              placeholder="numar strada"
              control={control}
              name="numarStradaDomiciliu"
            />
          </Field>
          <Field label="Bloc">
            <Input placeholder="bloc" control={control} name="blocDomiciliu" />
          </Field>
          <Field label="Scara">
            <Input
              placeholder="scara"
              control={control}
              name="scaraDomiciliu"
            />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={3}>
          <Field label="Apartament">
            <Input
              placeholder="numar apartament"
              control={control}
              name="numarApartamentDomiciliu"
            />
          </Field>
          <Field label="Judet">
            <Input
              placeholder="judet"
              control={control}
              name="judetDomiciliu"
            />
          </Field>
          <Field label="Cod Postal">
            <Input
              placeholder="cod postal"
              control={control}
              name="codPostalDomiciliu"
            />
          </Field>
        </FieldSet>
      </FieldSection>

      <FieldSection label="Adresa loc de consum">
        <FieldSet columnNumber={2}>
          <Field label="Localitate">
            <Input
              placeholder="localitate"
              control={control}
              name="localitateLC"
            />
          </Field>
          <Field label="Strada">
            <Input placeholder="strada" control={control} name="stradaLC" />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={3}>
          <Field label="Numar strada">
            <Input
              placeholder="numar strada"
              control={control}
              name="numarStradaLC"
            />
          </Field>
          <Field label="Bloc">
            <Input placeholder="bloc" control={control} name="blocLC" />
          </Field>
          <Field label="Scara">
            <Input placeholder="scara" control={control} name="scaraLC" />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={3}>
          <Field label="Apartament">
            <Input
              placeholder="numar apartament"
              control={control}
              name="apartamentLC"
            />
          </Field>
          <Field label="Judet">
            <Input placeholder="judet" control={control} name="judetLC" />
          </Field>
          <Field label="Cod Postal">
            <Input
              placeholder="cod postal"
              control={control}
              name="codPostalLC"
            />
          </Field>
        </FieldSet>
      </FieldSection>

      <FieldSection label="Adresa de corespondenta">
        <FieldSet columnNumber={2}>
          <Field label="Localitate">
            <Input
              placeholder="localitate"
              control={control}
              name="localitateAC"
            />
          </Field>
          <Field label="Strada">
            <Input placeholder="strada" control={control} name="stradaAC" />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={3}>
          <Field label="Numar strada">
            <Input
              placeholder="numar strada"
              control={control}
              name="numarStradaAC"
            />
          </Field>
          <Field label="Bloc">
            <Input placeholder="bloc" control={control} name="blocAC" />
          </Field>
          <Field label="Scara">
            <Input placeholder="scara" control={control} name="scaraAC" />
          </Field>
        </FieldSet>
        <FieldSet columnNumber={3}>
          <Field label="Apartament">
            <Input
              placeholder="numar apartament"
              control={control}
              name="apartamentAC"
            />
          </Field>
          <Field label="Judet">
            <Input placeholder="judet" control={control} name="judetAC" />
          </Field>
          <Field label="Cod Postal">
            <Input
              placeholder="cod postal"
              control={control}
              name="codPostalAC"
            />
          </Field>
        </FieldSet>
      </FieldSection>

      <FieldSection label="Informatii obiectiv">
        <FieldSet columnNumber={2}>
          <Field label="Tip bransament">
            <RadioGroup
              defaultValue={getValues("tipBransament")}
              className={classes.radioGroupItem}
              onValueChange={(e) => handleTipBransament(e)}
            >
              <div className={classes.radioGroupItemWrapper}>
                <RadioGroupItem
                  value="monofazat"
                  id="br1"
                  className={classes.radioGroupItem}
                />
                <Label htmlFor="br1" className={classes.radioGroupLabel}>
                  Monofazat (220/400V)
                </Label>
              </div>
              <div className={classes.radioGroupItemWrapper}>
                <RadioGroupItem
                  value="trifazat"
                  id="br2"
                  className={classes.radioGroupItem}
                />
                <Label htmlFor="br2" className={classes.radioGroupLabel}>
                  Trifazat (400/800V)
                </Label>
              </div>
            </RadioGroup>
          </Field>
        </FieldSet>
        <FieldSet columnNumber={1}>
          <Field label="Scopul solicitarii">
            <RadioGroup
              defaultValue={getValues("scopulSolicitarii")}
              className={classes.radioGroupItem}
              onValueChange={(e) => handleScopSolicitare(e)}
            >
              <div className={classes.radioGroupItemWrapper}>
                <RadioGroupItem value="lc_nou" id="ss1" />
                <Label htmlFor="ss1" className={classes.radioGroupLabel}>
                  Aparitia unui loc de consum nou, definitiv sau temporar;
                </Label>
              </div>
              <div className={classes.radioGroupItemWrapper}>
                <RadioGroupItem value="separare_instalatii" id="ss2" />
                <Label htmlFor="ss2" className={classes.radioGroupLabel}>
                  Separarea instalatiilor unui utilizator de instalatiile altui
                  utilizator in vederea racordarii directe a acestora la reteaua
                  electrica a operatorului de retea;
                </Label>
              </div>
            </RadioGroup>
          </Field>
        </FieldSet>

        {getValues("scopulSolicitarii") === "lc_nou" ? (
          <FieldSet columnNumber={1}>
            <Field label="Loc de consum cu punct/puncte de reincarcare pentru vehicule electrice?">
              <RadioGroup
                defaultValue={getValues("punctReincarcareVehiculeElectrice")}
                className={classes.radioGroupItem}
                onValueChange={(e) => hanldlePunctReincarcareVehiculeElectrivce(e)}
              >
                <div className={classes.radioGroupItemWrapper}>
                  <RadioGroupItem value="DA" id="ptrve1" />
                  <Label htmlFor="ptrve1" className={classes.radioGroupLabel}>
                    Da.
                  </Label>
                </div>
                <div className={classes.radioGroupItemWrapper}>
                  <RadioGroupItem value="NU" id="ptrve3" />
                  <Label htmlFor="ptrve3" className={classes.radioGroupLabel}>
                    Nu.
                  </Label>
                </div>
              </RadioGroup>
            </Field>
          </FieldSet>
        ) : null}
       
      </FieldSection>
      {
          getValues("punctReincarcareVehiculeElectrice") === "DA" ? 
          <FieldSection label="Informatii punct de reincarcare vehicule electrice">
            <FieldSet columnNumber={1}>
            <Field label="Numar puncte de reincarcare pentru vehiculele electrice">
            <Input
              placeholder="Numar puncte reincarcare vehicule electrice"
              control={control}
              type="number"
              name="numarPuncteReincarcareVehiculeElectrice"
            />
          </Field>
            </FieldSet>
            <FieldSet columnNumber={1}>
            <Field label="Putere instalata a unui echipament/statie de reincarcare">
            <Input
              placeholder="Putere instalata"
              unit="kW:"
              control={control}
              type="number"
              name="putereInstalataEchipamentReincarcare"
            />
          </Field>
            </FieldSet>
            <FieldSet columnNumber={1}>
            <Field label="Putere maxim simultan absorbita de punctele de reincarcare">
            <Input
              placeholder="Maximum putere absorbita"
              unit="kW:"
              control={control}
              type="number"
              name="putereMaxismAbsorbitaSimultan"
            />
          </Field>
            </FieldSet>

          <FieldSet columnNumber={1}>
          <Field label="Tip statie de reincarcare:">
            <RadioGroup
              defaultValue={getValues("tipStatieReincarcare")}
              className={classes.radioGroupItem}
              onValueChange={(e) => handleTipStatieReincarcare(e)}
            >
              <div className={classes.radioGroupItemWrapper}>
                <RadioGroupItem value="incarcare_lenta" id="tsr1" />
                <Label htmlFor="tsr1" className={classes.radioGroupLabel}>
                  Incarcare lenta;
                </Label>
              </div>
              <div className={classes.radioGroupItemWrapper}>
                <RadioGroupItem value="incarcare_rapida" id="tsr2" />
                <Label htmlFor="tsr2" className={classes.radioGroupLabel}>
                  Incarcare rapida;
                </Label>
              </div>
            </RadioGroup>
          </Field>
        </FieldSet>
          </FieldSection>

          :null
        }

    <FieldSection label="Compozitie locuinta">
         <OtherHouseholdDependencties/>
      </FieldSection>
    </form>
  );
};

export default CerereRacordare;
