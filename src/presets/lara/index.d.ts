/* eslint-disable @typescript-eslint/no-explicit-any */
declare const Lara: any; // Replace 'any' with the actual type if known
export default Lara;
declare module "./presets/lara/index.js" {
  const Lara: any;
  export default Lara;
}
