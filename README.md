# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




// const fetchDataFromDB = () => {
//   // Simulação de dados do banco de dados
//   return [
//     {
//       id: 1,
//       date: "janeiro",
//       changeTitle: "Valor de 'nome' alterado",
//       beforeChange: "CARMEN DANIELA DA ROSA",
//       afterChange: "CARMEN DANIELA DA ROSA RECCO",
//     },
//     {
//       id: 2,
//       date: "fevereiro",
//       changeTitle: "Atualização de 'endereço'",
//       beforeChange: "Rua ABC, 123",
//       afterChange: "Avenida XYZ, 456",
//     },
//     {
//       id: 3,
//       date: "março",
//       changeTitle: "Modificação de 'email'",
//       beforeChange: "johndoe@email.com",
//       afterChange: "john.doe@email.com",
//     },
//     {
//       id: 4,
//       date: "abril",
//       changeTitle: "Ajuste de 'telefone'",
//       beforeChange: "+123 456 789",
//       afterChange: "+987 654 321",
//     },
//     {
//       id: 5,
//       date: "maio",
//       changeTitle: "Correção de 'data de nascimento'",
//       beforeChange: "01/01/1990",
//       afterChange: "15/05/1985",
//     },
//     {
//       id: 6,
//       date: "junho",
//       changeTitle: "Mudança de 'cargo'",
//       beforeChange: "Analista de Marketing",
//       afterChange: "Gerente de Marketing",
//     },
//     {
//       id: 7,
//       date: "julho",
//       changeTitle: "Atualização de 'departamento'",
//       beforeChange: "RH",
//       afterChange: "Finanças",
//     },
//   ];
// };

// const VerticalTimeline: any = () => {
//   const customContent = fetchDataFromDB().map((item) => (
//     <section className="dark:bg-gray-800 dark:text-gray-100">
//       <div className="container max-w-5xl px-4 py-12 mx-auto">
//         <div className="grid gap-4 mx-4 sm:grid-cols-12">
//           <div className="col-span-12 sm:col-span-3">
//             <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
//               <h3 className="text-3xl font-semibold">Morbi tempor   </h3>
//               <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
//                 Vestibulum diam nunc
//               </span>
//             </div>
//           </div>
//           <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
//             <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
//               <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
//                 <h3 className="text-xl font-semibold tracki">
//                   {item.changeTitle}
//                 </h3>
//                 <time className="text-xs tracki uppercase dark:text-gray-400">
//                  {item.date}
//                 </time>
//                 <p className="mt-3">
//                  {item.beforeChange}
//                 </p>
//                 <p className="mt-3">
//                  {item.afterChange}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   ));

//   return customContent;
// };

// export default VerticalTimeline;
