import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import Contact from './components/Layouts/Pages/Contact/Contact';
import Home from './components/Layouts/Pages/Home/Home';
import Repo from './components/Layouts/Pages/Works/Repositories/Repo/Repo';
import Readme from './components/Layouts/Pages/Works/Repositories/RepoTile/ViewRepoBtn/Readme/Readme';
import Works from './components/Layouts/Pages/Works/Works';
import FormProvider from './components/Store/FormContext/FormProvider';
import ModalProvider from './components/Store/ModalContext/ModalProvider';
import ThemeProvider from './components/Store/ThemeContext/ThemeProvider';

const App = () => {
   return (
      <ModalProvider>
         <ThemeProvider>
            <FormProvider>
               <Layouts>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/works" element={<Works />} />
                     <Route path="/contact" element={<Contact />} />
                     <Route path={`/works/:repoName`} element={<Repo />}>
                        <Route path="readme" element={<Readme />} />
                     </Route>
                  </Routes>
               </Layouts>
            </FormProvider>
         </ThemeProvider>
      </ModalProvider>
   );
};

export default App;
