declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const className: IClassNames;
  export default className;
}

// declaration.d.ts
// declare module '*.module.scss' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }