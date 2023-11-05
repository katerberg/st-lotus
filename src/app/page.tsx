'use client'
import PreviewVideo from '@/app/home/PreviewVideo';
import CountDown from '@/app/home/CountDown';
import CardSearch from '@/app/home/card-search/CardSearch';
import Hero from '@/app/home/Hero';
import Follow from '@/app/home/Follow';

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
  return (
    <div>
      <Hero />
      <CountDown />
      <CardSearch />
      <Follow />
      <PreviewVideo />
    </div>
  );
}

