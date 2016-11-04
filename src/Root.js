import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';

import './index.css';

const Root = () => {
  return (
    <BrowserRouter history={history}>
      <section>
        <Match exactly pattern="/" component={App} />
      </section>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))

export default Root;









// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';
// import App from './App';
//
// import './index.css';
//
// const Root = () => {
//   return (
//     <BrowserRouter history={history}>
//       <section>
//         <Match exactly pattern="/" component={App} />
//       </section>
//     </BrowserRouter>
//   )
// }
//
// render(<Root />, document.querySelector("#root"))
//
// export default Root;
