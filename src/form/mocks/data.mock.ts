/**
 * 2) Lista de países y estados
 *    Esto puede venir de un fetch o API en producción.
 */
const COUNTRY_OPTIONS = [
  { label: "España", value: "es" },
  { label: "Estados Unidos", value: "us" },
  { label: "México", value: "mx" },
];

const STATES_BY_COUNTRY: Record<string, { label: string; value: string }[]> = {
  es: [
    { value: "andalucia", label: "Andalucía" },
    { value: "madrid", label: "Madrid" },
  ],
  us: [
    { value: "ny", label: "New York" },
    { value: "ca", label: "California" },
  ],
  mx: [
    { value: "cmx", label: "Ciudad de México" },
    { value: "jal", label: "Jalisco" },
  ],
};

export { COUNTRY_OPTIONS, STATES_BY_COUNTRY };
