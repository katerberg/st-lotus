'use client'
// import Image from 'next/image'

// import ReactGA from 'react-ga';
// import {
//   HashRouter as Router,
// } from 'react-router-dom';
// import Routes from './routes';
// import {createBrowserHistory} from 'history';
// import styles from '@/app/page.module.css'
// const browserHistory = createBrowserHistory();

// browserHistory.listen(location => {
//   const {hash, pathname, search} = location;
//   if (hash !== '') {
//     // Push onto callback queue so it runs after the DOM is updated,
//     // This is required when navigating from a different page so that
//     // The element is rendered on the page before trying to getElementById.
//     setTimeout(
//       () => {
//         const id = hash.replace('#', '');
//         const element = document.getElementById(id);
//         if (element) {
//           element.scrollIntoView();
//         }
//         window.ga('set', 'page', pathname + search + hash);
//         window.ga('send', 'pageview');
//       },
//       0,
//     );
//   }
// });


export default function App() {
  // ReactGA.initialize('UA-208899645-1');
  // window.ga('set', 'page', window.location.pathname + window.location.search + window.location.hash);
  // window.ga('send', 'pageview');

  return (
    <h1> hello</h1>
  );
}

